/* global process */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { SogniClient } from '@sogni-ai/sogni-client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import { PromptOptimizer } from './prompt-optimizer.js';

dotenv.config();

// 获取当前文件目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Basic env
const PORT = Number(process.env.PORT || 3001);
const SOGNI_ENV = process.env.SOGNI_ENV || 'production';
const SOGNI_APP_ID = process.env.SOGNI_APP_ID || 'minimal-photobooth';
const SOGNI_USERNAME = process.env.SOGNI_USERNAME;
const SOGNI_PASSWORD = process.env.SOGNI_PASSWORD;

// 图片存储配置
const IMAGES_BASE_DIR = path.join(__dirname, 'generated-images');
const IMAGES_PUBLIC_DIR = path.join(__dirname, 'public', 'images');

if (!SOGNI_USERNAME || !SOGNI_PASSWORD) {
  console.warn('[WARN] Missing SOGNI_USERNAME or SOGNI_PASSWORD in environment.');
}

// Map env → endpoints
function getSogniUrls(env) {
  const SOGNI_HOSTS = {
    local: { socket: 'wss://socket-local.sogni.ai', api: 'https://api-local.sogni.ai' },
    staging: { socket: 'wss://socket-staging.sogni.ai', api: 'https://api-staging.sogni.ai' },
    production: { socket: 'wss://socket.sogni.ai', api: 'https://api.sogni.ai' },
  };
  return SOGNI_HOSTS[env] || SOGNI_HOSTS.production;
}

// Reusable singleton client (kept simple)
let sogniClient = null;
async function getClient() {
  console.log('[CLIENT] Getting Sogni client...');
  if (sogniClient) {
    console.log('[CLIENT] Reusing existing client, authenticated:', sogniClient.account.currentAccount.isAuthenicated);
    return sogniClient;
  }

  const { api, socket } = getSogniUrls(SOGNI_ENV);
  const useTestnet = SOGNI_ENV === 'staging' || SOGNI_ENV === 'local';
  
  console.log('[CLIENT] Creating new Sogni client with:', { appId: SOGNI_APP_ID, testnet: useTestnet, api, socket });

  const client = await SogniClient.createInstance({
    appId: SOGNI_APP_ID,
    testnet: useTestnet,
    network: 'fast',
    logLevel: 'info',
    restEndpoint: api,
    socketEndpoint: socket,
    connectionTimeout: 5000,
  });

  console.log('[CLIENT] Client created, checking authentication...');
  if (!client.account.currentAccount.isAuthenicated) {
    console.log('[CLIENT] Client not authenticated, attempting login...');
    await client.account.login(SOGNI_USERNAME, SOGNI_PASSWORD);
    console.log('[CLIENT] Login completed, authenticated:', client.account.currentAccount.isAuthenicated);
  } else {
    console.log('[CLIENT] Client already authenticated');
  }

  sogniClient = client;
  return sogniClient;
}

// 确保存储目录存在
function ensureDirectories() {
  try {
    if (!fs.existsSync(IMAGES_BASE_DIR)) {
      fs.mkdirSync(IMAGES_BASE_DIR, { recursive: true });
      console.log('[STORAGE] Created base images directory:', IMAGES_BASE_DIR);
    }
    
    if (!fs.existsSync(IMAGES_PUBLIC_DIR)) {
      fs.mkdirSync(IMAGES_PUBLIC_DIR, { recursive: true });
      console.log('[STORAGE] Created public images directory:', IMAGES_PUBLIC_DIR);
    }
  } catch (error) {
    console.error('[STORAGE] Error creating directories:', error);
  }
}

// 下载图片到本地
async function downloadAndStoreImage(imageUrl, activityName, projectId) {
  try {
    console.log('[STORAGE] Downloading image from:', imageUrl);
    
    // 清理活动名称，移除特殊字符
    const cleanActivityName = activityName
      .replace(/[<>:"/\\|?*]/g, '_')
      .replace(/\s+/g, '_')
      .substring(0, 50);
    
    // 创建活动子目录
    const activityDir = path.join(IMAGES_BASE_DIR, cleanActivityName);
    if (!fs.existsSync(activityDir)) {
      fs.mkdirSync(activityDir, { recursive: true });
      console.log('[STORAGE] Created activity directory:', activityDir);
    }
    
    // 生成唯一文件名
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const randomId = Math.random().toString(36).substring(2, 8);
    const filename = `${timestamp}_${randomId}.png`;
    const filePath = path.join(activityDir, filename);
    
    // 下载图片
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
    }
    
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
    
    console.log('[STORAGE] Image saved to:', filePath);
    
    // 同时保存到公共目录（用于前端访问）
    const publicFilePath = path.join(IMAGES_PUBLIC_DIR, filename);
    fs.writeFileSync(publicFilePath, Buffer.from(buffer));
    
    return {
      localPath: filePath,
      publicPath: `/images/${filename}`,
      filename: filename,
      activityName: cleanActivityName
    };
  } catch (error) {
    console.error('[STORAGE] Error downloading/storing image:', error);
    throw error;
  }
}

// Minimal image generation by prompt
async function generateImageByPrompt(prompt, options = {}) {
  console.log('[GENERATE] Starting image generation with prompt:', prompt);
  console.log('[GENERATE] Options:', options);
  
  if (typeof prompt !== 'string' || !prompt.trim()) {
    throw new Error('prompt must be a non-empty string');
  }

  const client = await getClient();
  console.log('[GENERATE] Sogni client obtained, authenticated:', client.account.currentAccount.isAuthenicated);
  
  // 确保存储目录存在
  ensureDirectories();

  // Defaults: single square image, lightweight fast model
  const modelId = options.modelId || 'flux1-schnell-fp8';
  const width = Number(options.width || 768);
  const height = Number(options.height || 768);
  const numberOfImages = 1;

  console.log('[GENERATE] Creating Sogni project with options:', { modelId, positivePrompt: prompt, sizePreset: 'custom', width, height, steps: 7, guidance: 2, numberOfImages, tokenType: 'spark' });
  const project = await client.projects.create({
    modelId,
    positivePrompt: prompt,
    sizePreset: 'custom',
    width,
    height,
    steps: 7,
    guidance: 2,
    numberOfImages,
    tokenType: 'spark',
  });

  const projectId = project.id;
  const imageUrls = [];

  // Wait for completion via lightweight event listeners
  await new Promise((resolve, reject) => {
    let resolved = false;
    const timeoutMs = Number(options.timeoutMs || 120000);
    let projectCompleted = false;
    let completedJobs = 0;
    const totalJobs = 1; // numberOfImages = 1

    const onProject = (event) => {
      console.log('[EVENT] Project event received:', event);
      if (event.projectId !== projectId) return;
      
      if (event.type === 'completed') {
        console.log('[EVENT] Project completed, waiting for jobs to finish...');
        projectCompleted = true;
        
        // 检查是否所有作业都完成了
        if (completedJobs >= totalJobs) {
          console.log('[EVENT] All jobs completed, extracting image URLs...');
          extractAndResolve();
        }
      } else if (event.type === 'error' || event.type === 'failed') {
        console.error('[EVENT] Project failed:', event);
        cleanup();
        resolved = true;
        reject(new Error(typeof event.message === 'string' ? event.message : 'Generation failed'));
      }
    };

          const onJob = (event) => {
      console.log('[EVENT] Job event received:', event);
      if (event.projectId !== projectId) return;
      
      if (event.type === 'completed') {
        console.log('[EVENT] Job completed, checking for result URL...');
        completedJobs++;
        
        // 检查 event 对象中的各种可能的 URL 属性
        let jobUrl = null;
        if (event.resultUrl) jobUrl = event.resultUrl;
        else if (event.imageUrl) jobUrl = event.imageUrl;
        else if (event.url) jobUrl = event.url;
        
        // 如果没有直接 URL，尝试从 event 的其他属性中查找
        if (!jobUrl) {
          for (const [key, value] of Object.entries(event)) {
            if (typeof value === 'string' && value.includes('http') && (value.includes('.png') || value.includes('.jpg') || value.includes('.jpeg'))) {
              console.log(`[EVENT] Found potential URL in job event ${key}:`, value);
              jobUrl = value;
              break;
            }
          }
        }
        
        if (jobUrl) {
          console.log('[EVENT] Job completed with URL:', jobUrl);
          imageUrls.push(jobUrl);
        } else {
          console.log('[EVENT] Job completed but no URL found in event:', event);
          console.log('[EVENT] Full job event object:', JSON.stringify(event, null, 2));
        }
        
        // 检查是否所有作业都完成了
        if (projectCompleted && completedJobs >= totalJobs) {
          console.log('[EVENT] All jobs completed, extracting image URLs...');
          extractAndResolve();
        }
      }
      
      if (event.type === 'failed') {
        console.error('[EVENT] Job failed:', event);
        cleanup();
        resolved = true;
        reject(new Error('Job failed: ' + (event.message || 'Unknown error')));
      }
    };

    // 提取图片 URL 并解析 Promise 的函数
    function extractAndResolve() {
      try {
        console.log('[EVENT] Extracting image URLs from project object...');
        console.log('[EVENT] Current imageUrls array:', imageUrls);
        
        // 如果 job 事件中没有找到 URL，尝试从 project 对象获取
        if (imageUrls.length === 0) {
          console.log('[EVENT] No URLs from job events, trying project object...');
          console.log('[EVENT] Project object keys:', Object.keys(project));
          
          // 尝试从 project 的其他属性中查找
          for (const [key, value] of Object.entries(project)) {
            if (typeof value === 'string' && value.includes('http') && (value.includes('.png') || value.includes('.jpg') || value.includes('.jpeg'))) {
              console.log(`[EVENT] Found potential URL in project ${key}:`, value);
              imageUrls.push(value);
            }
          }
        }
        
        console.log('[EVENT] Final image URLs:', imageUrls);
        cleanup();
        resolved = true;
        resolve();
      } catch (e) {
        console.error('[EVENT] Error in extractAndResolve:', e);
        cleanup();
        resolved = true;
        reject(e);
      }
    }

    function cleanup() {
      try { client.projects.off('project', onProject); } catch {}
      try { client.projects.off('job', onJob); } catch {}
      clearTimeout(timer);
    }

    try {
      console.log('[EVENT] Setting up event listeners for project:', projectId);
      client.projects.on('project', onProject);
      client.projects.on('job', onJob);
      console.log('[EVENT] Event listeners set up successfully');
    } catch (e) {
      console.error('[EVENT] Failed to set up event listeners:', e);
      cleanup();
      reject(e);
    }

    const timer = setTimeout(() => {
      if (!resolved) {
        cleanup();
        reject(new Error('Generation timeout'));
      }
    }, timeoutMs);
  });

  console.log('[GENERATE] Generation completed, returning image URLs:', imageUrls);
  return imageUrls;
}

// Build NTU club poster prompt from structured fields
function mapPosterStyle(style) {
  const key = String(style || '').toLowerCase();
  switch (key) {
    case 'modern':
    case '现代':
      return 'modern minimalist university poster, bold Swiss typography, strong grid, clean composition, high contrast';
    case 'vintage':
    case '复古':
      return 'vintage poster, textured paper, letterpress look, classic serif type, muted colors';
    case 'cyberpunk':
    case '赛博朋克':
      return 'cyberpunk neon poster, high contrast, holographic glow, futuristic typography, dynamic diagonal layout';
    case 'handdrawn':
    case '手绘':
      return 'hand-drawn illustration poster, ink and marker texture, playful composition, friendly typography';
    case 'academic':
    case '学院风':
      return 'academic style poster, institutional layout, formal hierarchy, accessible typography, clear information blocks';
    case 'minimalist':
    case '极简':
      return 'ultra-minimalist poster, generous negative space, precise alignment, premium print look';
    default:
      return 'modern minimalist university poster, bold Swiss typography, clean composition, premium print look';
  }
}

function sanitizeText(value) {
  if (value == null) return '';
  const text = String(value).trim();
  return text.replace(/\s+/g, ' ').slice(0, 500);
}

function buildNtuPosterPrompt(payload) {
  try {
    // 使用提示词优化器
    const optimized = PromptOptimizer.generateOptimizedPrompt(payload);
    
    // 记录优化信息
    console.log('[PROMPT] 使用提示词优化器生成');
    console.log('[PROMPT] 活动类型:', optimized.activityType);
    console.log('[PROMPT] 风格:', optimized.style);
    console.log('[PROMPT] 核心信息:', optimized.coreInfo);
    
    // 评估提示词质量
    const evaluation = PromptOptimizer.evaluatePrompt(optimized.positive);
    console.log('[PROMPT] 质量评估:', evaluation);
    
    return optimized.positive;
  } catch (error) {
    console.error('[PROMPT] 优化器失败，使用原始方法:', error);
    
    // 回退到原始方法
    const clubName = sanitizeText(payload.clubName);
    const activityContent = sanitizeText(payload.activityContent);
    const posterStyle = sanitizeText(payload.posterStyle);
    const activityTime = sanitizeText(payload.activityTime);
    const activityLocation = sanitizeText(payload.activityLocation);
    const themeColor = sanitizeText(payload.themeColor);

    const styleDesc = mapPosterStyle(posterStyle);
    const colorDesc = themeColor ? `primary color palette: ${themeColor}, harmonious accents, consistent contrast` : 'cohesive university color palette';

    const infoBlocks = [
      clubName && `Club: ${clubName}`,
      activityContent && `Activity: ${activityContent}`,
      activityTime && `Time: ${activityTime}`,
      activityLocation && `Location: ${activityLocation}`
    ].filter(Boolean).join(' | ');

    const positive = [
      'High-quality vertical poster for a university club at NTU',
      styleDesc,
      colorDesc,
      'clear layout, strong hierarchy, legible typography, balanced negative space',
      'print-ready aesthetic, photographic realism of materials, soft lighting, subtle paper texture',
      infoBlocks ? `Emphasize: ${infoBlocks}` : 'Emphasize: university club activities and information',
      'avoid clutter, avoid excessive text density, avoid watermark, avoid logos unless implicit'
    ].filter(Boolean).join(', ');

    return positive.trim() || 'High-quality vertical poster for a university club at NTU, modern minimalist style, clear layout, strong hierarchy, legible typography';
  }
}

// Express app
const app = express();
app.use(express.json({ limit: '5mb' }));

// CORS配置 - 支持多个前端端口
const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081', 
  'http://localhost:3000',
  'http://localhost:5173'
];

app.use(cors({ 
  origin: function (origin, callback) {
    // 允许没有origin的请求（比如同源请求）
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('[CORS] Blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true 
}));

// 静态文件服务 - 提供图片访问
app.use('/images', express.static(IMAGES_PUBLIC_DIR));
app.use('/generated-images', express.static(IMAGES_BASE_DIR));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', env: SOGNI_ENV, time: new Date().toISOString() });
});

// 获取已生成的图片列表
app.get('/api/images', (req, res) => {
  try {
    const images = [];
    
    if (fs.existsSync(IMAGES_BASE_DIR)) {
      const activityDirs = fs.readdirSync(IMAGES_BASE_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());
      
      for (const activityDir of activityDirs) {
        const activityPath = path.join(IMAGES_BASE_DIR, activityDir.name);
        const imageFiles = fs.readdirSync(activityPath)
          .filter(file => /\.(png|jpg|jpeg)$/i.test(file))
          .map(file => {
            const filePath = path.join(activityPath, file);
            const stats = fs.statSync(filePath);
            return {
              filename: file,
              activityName: activityDir.name,
              localPath: filePath,
              publicPath: `/generated-images/${activityDir.name}/${file}`,
              size: stats.size,
              created: stats.birthtime,
              modified: stats.mtime
            };
          });
        
        if (imageFiles.length > 0) {
          images.push({
            activityName: activityDir.name,
            count: imageFiles.length,
            images: imageFiles
          });
        }
      }
    }
    
    res.json({
      totalActivities: images.length,
      totalImages: images.reduce((sum, activity) => sum + activity.count, 0),
      activities: images,
      storageInfo: {
        baseDir: IMAGES_BASE_DIR,
        publicDir: IMAGES_PUBLIC_DIR
      }
    });
  } catch (error) {
    console.error('[API] Error getting images list:', error);
    res.status(500).json({ error: 'failed_to_list_images', message: error.message });
  }
});

// Minimal endpoint: accept a single string prompt and return image URLs
app.post('/api/generate', async (req, res) => {
  console.log('[API] POST /api/generate received:', req.body);
  try {
    const { prompt, modelId, width, height, timeoutMs, clubName, activityContent, posterStyle, activityTime, activityLocation, themeColor } = req.body || {};

    let finalPrompt = prompt;
    let w = width;
    let h = height;
    let activityName = '';

    // If structured NTU fields are provided, build a poster prompt
    const hasNtuFields = clubName || activityContent || posterStyle || activityTime || activityLocation || themeColor;
    if (!finalPrompt && hasNtuFields) {
      console.log('[API] Building NTU poster prompt from fields');
      finalPrompt = buildNtuPosterPrompt({ clubName, activityContent, posterStyle, activityTime, activityLocation, themeColor });
      console.log('[API] Generated prompt:', finalPrompt);
      // Default to vertical poster aspect if not supplied
      if (!w) w = 1024;
      if (!h) h = 1536;
      
      // 使用活动内容作为活动名称
      activityName = activityContent || clubName || 'NTU_Activity';
    } else if (prompt) {
      // 如果没有NTU字段，使用prompt的前20个字符作为活动名称
      activityName = prompt.substring(0, 20).replace(/\s+/g, '_') || 'Generated_Image';
    }

    console.log('[API] Calling generateImageByPrompt with:', { finalPrompt, modelId, width: w, height: h, timeoutMs, activityName });
    const urls = await generateImageByPrompt(finalPrompt, { modelId, width: w, height: h, timeoutMs, activityName });
    
    // 下载并存储图片
    const storedImages = [];
    for (const url of urls) {
      try {
        const stored = await downloadAndStoreImage(url, activityName, 'generated');
        storedImages.push({
          originalUrl: url,
          localPath: stored.localPath,
          publicPath: stored.publicPath,
          filename: stored.filename,
          activityName: stored.activityName
        });
      } catch (error) {
        console.error('[API] Failed to store image:', error);
        // 即使存储失败，也返回原始URL
        storedImages.push({
          originalUrl: url,
          localPath: null,
          publicPath: null,
          filename: null,
          activityName: activityName
        });
      }
    }
    
    console.log('[API] Generation and storage completed, returning:', { 
      images: storedImages, 
      count: storedImages.length,
      activityName: activityName
    });
    
    res.json({ 
      images: storedImages, 
      count: storedImages.length,
      activityName: activityName,
      storageInfo: {
        baseDir: IMAGES_BASE_DIR,
        publicDir: IMAGES_PUBLIC_DIR
      }
    });
  } catch (error) {
    console.error('[API] Error in /api/generate:', error);
    res.status(500).json({ error: 'generation_failed', message: error.message || String(error) });
  }
});

// Dedicated endpoint for NTU poster generation (accepts the structured payload directly)
app.post('/api/ntu-poster', async (req, res) => {
  try {
    const { modelId, width, height, timeoutMs } = req.body || {};
    const finalPrompt = buildNtuPosterPrompt(req.body || {});
    const w = width || 1024;
    const h = height || 1536;
    const urls = await generateImageByPrompt(finalPrompt, { modelId, width: w, height: h, timeoutMs });
    res.json({ images: urls, count: urls.length });
  } catch (error) {
    res.status(400).json({ error: 'invalid_request', message: error.message || String(error) });
  }
});

// 新增：使用PromptOptimizer的智能海报生成接口
app.post('/api/generate-poster', async (req, res) => {
  console.log('[API] POST /api/generate-poster received:', req.body);
  
  try {
    const { 
      clubName, 
      activityContent, 
      posterStyle, 
      activityTime, 
      activityLocation, 
      themeColor,
      modelId, 
      width, 
      height, 
      timeoutMs 
    } = req.body || {};

    // 验证必需字段
    if (!clubName || !activityContent) {
      return res.status(400).json({ 
        error: 'missing_required_fields', 
        message: 'clubName and activityContent are required',
        requiredFields: ['clubName', 'activityContent'],
        receivedFields: Object.keys(req.body || {})
      });
    }

    // 构建测试载荷
    const payload = {
      clubName,
      activityContent,
      posterStyle: posterStyle || 'modern',
      activityTime: activityTime || '',
      activityLocation: activityLocation || '',
      themeColor: themeColor || '#0055FF'
    };

    console.log('[API] Using PromptOptimizer with payload:', payload);

    // 使用PromptOptimizer生成优化提示词
    const optimized = PromptOptimizer.generateOptimizedPrompt(payload);
    
    // 评估提示词质量
    const evaluation = PromptOptimizer.evaluatePrompt(optimized.positive);
    
    console.log('[API] PromptOptimizer results:', {
      activityType: optimized.activityType,
      style: optimized.style,
      promptLength: optimized.positive.length,
      qualityScore: evaluation.score,
      qualityGrade: evaluation.grade
    });

    // 设置默认尺寸（垂直海报）
    const w = width || 1024;
    const h = height || 1536;
    
    // 使用活动内容作为活动名称
    const activityName = activityContent || clubName || 'NTU_Activity';
    
    console.log('[API] Generating images with optimized prompt:', {
      positivePrompt: optimized.positive.substring(0, 100) + '...',
      negativePrompt: optimized.negative.substring(0, 100) + '...',
      width: w,
      height: h,
      activityName
    });

    // 生成图片
    const urls = await generateImageByPrompt(optimized.positive, { 
      modelId, 
      width: w, 
      height: h, 
      timeoutMs, 
      activityName,
      negativePrompt: optimized.negative // 传递负面提示词
    });
    
    // 下载并存储图片
    const storedImages = [];
    for (const url of urls) {
      try {
        const stored = await downloadAndStoreImage(url, activityName, 'poster');
        storedImages.push({
          originalUrl: url,
          localPath: stored.localPath,
          publicPath: stored.publicPath,
          filename: stored.filename,
          activityName: stored.activityName
        });
      } catch (error) {
        console.error('[API] Failed to store image:', error);
        // 即使存储失败，也返回原始URL
        storedImages.push({
          originalUrl: url,
          localPath: null,
          publicPath: null,
          filename: null,
          activityName: activityName
        });
      }
    }
    
    console.log('[API] Poster generation completed:', { 
      count: storedImages.length,
      activityName: activityName,
      qualityScore: evaluation.score,
      qualityGrade: evaluation.grade
    });
    
    // 返回完整结果
    res.json({
      success: true,
      data: {
        images: urls,
        storedImages: storedImages,
        count: storedImages.length,
        activityName: activityName,
        storageInfo: `Images stored in /generated-images/${activityName}/`,
        promptOptimization: {
          positivePrompt: optimized.positive,
          negativePrompt: optimized.negative,
          qualityEvaluation: evaluation,
          activityType: optimized.activityType,
          style: optimized.style,
          coreInfo: optimized.coreInfo
        }
      }
    });

  } catch (error) {
    console.error('[API] Error in /api/generate-poster:', error);
    res.status(500).json({ 
      success: false,
      error: 'poster_generation_failed', 
      message: error.message || String(error),
      timestamp: new Date().toISOString()
    });
  }
});

// 新增：获取提示词优化建议的接口
app.post('/api/optimize-prompt', async (req, res) => {
  console.log('[API] POST /api/optimize-prompt received:', req.body);
  
  try {
    const { 
      clubName, 
      activityContent, 
      posterStyle, 
      activityTime, 
      activityLocation, 
      themeColor 
    } = req.body || {};

    // 验证必需字段
    if (!clubName || !activityContent) {
      return res.status(400).json({ 
        error: 'missing_required_fields', 
        message: 'clubName and activityContent are required'
      });
    }

    // 构建载荷
    const payload = {
      clubName,
      activityContent,
      posterStyle: posterStyle || 'modern',
      activityTime: activityTime || '',
      activityLocation: activityLocation || '',
      themeColor: themeColor || '#0055FF'
    };

    // 使用PromptOptimizer生成优化提示词
    const optimized = PromptOptimizer.generateOptimizedPrompt(payload);
    
    // 评估提示词质量
    const evaluation = PromptOptimizer.evaluatePrompt(optimized.positive);
    
    // 返回优化结果
    res.json({
      success: true,
      data: {
        originalPayload: payload,
        optimizedPrompts: {
          positive: optimized.positive,
          negative: optimized.negative
        },
        qualityEvaluation: evaluation,
        optimizationDetails: {
          activityType: optimized.activityType,
          style: optimized.style,
          coreInfo: optimized.coreInfo,
          promptLength: optimized.positive.length
        },
        suggestions: generateOptimizationSuggestions(evaluation)
      }
    });

  } catch (error) {
    console.error('[API] Error in /api/optimize-prompt:', error);
    res.status(500).json({ 
      success: false,
      error: 'prompt_optimization_failed', 
      message: error.message || String(error)
    });
  }
});

// 辅助函数：生成优化建议
function generateOptimizationSuggestions(evaluation) {
  const suggestions = [];
  
  if (evaluation.breakdown.clarity < 3) {
    suggestions.push('增加信息层次描述，确保主要信息突出显示');
  }
  
  if (evaluation.breakdown.specificity < 3) {
    suggestions.push('添加更多具体的视觉元素和设计指导');
  }
  
  if (evaluation.breakdown.balance < 2) {
    suggestions.push('平衡底图描述和信息层描述的比例');
  }
  
  if (evaluation.breakdown.creativity < 2) {
    suggestions.push('增加创意元素和独特风格描述');
  }
  
  if (evaluation.breakdown.technical < 2) {
    suggestions.push('添加更多技术质量相关的描述');
  }
  
  return suggestions.length > 0 ? suggestions : ['提示词质量良好，无需额外优化'];
}

app.listen(PORT, () => {
  console.log(`[minimal-server] listening on http://localhost:${PORT}`);
});


