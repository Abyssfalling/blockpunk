// 通用提示词优化器 - 适用于各种海报和图像生成需求
// 基于AI图像生成的最佳实践，简洁而有效
export class PromptOptimizer {
  
  // 通用风格映射 - 基于专业设计风格和提示词
  static getStyleDescription(style) {
    const styles = {
      // 新风格映射 - 基于用户提供的专业风格
      'modern minimalist': 'minimalist poster design, clean layout, simple geometric shapes, bold typography, negative space, soft neutral colors, modern aesthetic',
      'vintage artistic': 'vintage poster design, retro textures, distressed paper, hand-drawn illustration, warm earthy tones, nostalgic typography, 20th century style',
      'dynamic energetic': 'dynamic poster design, vibrant colors, bold gradients, kinetic typography, abstract motion elements, energetic composition, futuristic vibe',
      'elegant formal': 'elegant poster design, refined serif typography, balanced composition, black and gold palette, luxury aesthetic, classy and formal layout',
      'creative artistic': 'creative poster design, surreal composition, experimental typography, bold artistic expression, colorful abstract shapes, modern art inspiration',
      'tech futuristic': 'futuristic tech poster design, neon lights, holographic effects, cyberpunk color scheme, circuit-inspired patterns, digital typography, high-tech vibe',
      
      // 兼容旧风格
      'modern': 'clean lines, geometric shapes, minimalist design, professional layout, contemporary aesthetic',
      'vintage': 'retro style, classic design, warm colors, traditional layout, nostalgic feel',
      'cyberpunk': 'futuristic design, neon colors, high-tech elements, dynamic composition, sci-fi aesthetic',
      'handdrawn': 'artistic illustration, organic shapes, creative design, handcrafted feel, artistic style',
      'academic': 'professional design, formal layout, clear structure, institutional style, scholarly appearance',
      'minimalist': 'simple design, clean aesthetic, essential elements, refined style, elegant appearance',
      'dynamic': 'energetic design, bold colors, strong contrast, vibrant layout, exciting appearance',
      'elegant': 'sophisticated design, refined aesthetic, balanced composition, premium feel, luxury appearance'
    };
    
    return styles[style] || styles.modern;
  }
  
  // 风格类型识别 - 自动映射到标准风格
  static getStandardStyle(style) {
    const styleMapping = {
      'modern minimalist': 'minimalist',
      'vintage artistic': 'vintage',
      'dynamic energetic': 'dynamic',
      'elegant formal': 'elegant',
      'creative artistic': 'creative',
      'tech futuristic': 'cyberpunk'
    };
    
    return styleMapping[style] || style;
  }
  
  // 通用活动类型识别
  static getActivityType(activityContent) {
    const content = activityContent.toLowerCase();
    
    if (content.includes('workshop') || content.includes('training')) return 'educational event';
    if (content.includes('meeting') || content.includes('gathering')) return 'group event';
    if (content.includes('competition') || content.includes('contest')) return 'competitive event';
    if (content.includes('social') || content.includes('party')) return 'social event';
    if (content.includes('lecture') || content.includes('seminar')) return 'academic event';
    if (content.includes('exhibition') || content.includes('showcase')) return 'exhibition event';
    if (content.includes('conference') || content.includes('symposium')) return 'conference event';
    
    return 'general event';
  }
  
  // 通用构图指导 - 支持新风格类型
  static getCompositionGuide(style) {
    const guides = {
      // 新风格构图指导
      'modern minimalist': 'centered composition, generous space, precise alignment, essential elements, balanced proportions',
      'vintage artistic': 'classic composition, organic flow, traditional layout, timeless proportions, handcrafted feel',
      'dynamic energetic': 'energetic composition, bold layout, strong visual impact, exciting arrangement, dynamic movement',
      'elegant formal': 'sophisticated composition, refined layout, balanced proportions, premium feel, formal structure',
      'creative artistic': 'creative composition, organic shapes, artistic layout, natural flow, innovative arrangement',
      'tech futuristic': 'dynamic composition, high energy, futuristic layout, dramatic angles, high-tech structure',
      
      // 兼容旧风格
      'modern': 'clean composition, clear focal point, balanced layout, professional proportions',
      'vintage': 'classic composition, organic flow, traditional layout, timeless proportions',
      'cyberpunk': 'dynamic composition, high energy, futuristic layout, dramatic angles',
      'handdrawn': 'creative composition, organic shapes, artistic layout, natural flow',
      'academic': 'structured layout, clear hierarchy, professional composition, organized structure',
      'minimalist': 'centered composition, generous space, precise alignment, essential elements',
      'dynamic': 'energetic composition, bold layout, strong visual impact, exciting arrangement',
      'elegant': 'sophisticated composition, refined layout, balanced proportions, premium feel'
    };
    
    return guides[style] || guides.modern;
  }
  
  // 通用颜色主题 - 支持新风格类型
  static getColorTheme(themeColor, style) {
    if (!themeColor) return 'harmonious color palette, professional appearance';
    
    const baseColor = `primary color ${themeColor}`;
    
    // 新风格颜色主题
    if (style === 'modern minimalist') return `${baseColor}, neutral backgrounds, minimal palette, balanced contrast, soft tones`;
    if (style === 'vintage artistic') return `${baseColor}, warm tones, muted palette, classic harmony, earthy colors`;
    if (style === 'dynamic energetic') return `${baseColor}, vibrant palette, bold contrast, energetic colors, high saturation`;
    if (style === 'elegant formal') return `${baseColor}, black and gold palette, luxury colors, sophisticated harmony, premium tones`;
    if (style === 'creative artistic') return `${baseColor}, colorful palette, artistic harmony, creative colors, expressive tones`;
    if (style === 'tech futuristic') return `${baseColor}, neon accents, dark backgrounds, high contrast, cyberpunk palette`;
    
    // 兼容旧风格
    if (style === 'cyberpunk') return `${baseColor}, neon accents, dark backgrounds, high contrast`;
    if (style === 'vintage') return `${baseColor}, warm tones, muted palette, classic harmony`;
    if (style === 'minimalist') return `${baseColor}, neutral backgrounds, minimal palette, balanced contrast`;
    
    return `${baseColor}, complementary colors, professional palette, balanced contrast`;
  }
  
  // 生成通用优化提示词
  static generateOptimizedPrompt(payload) {
    const {
      clubName,
      activityContent,
      posterStyle,
      activityTime,
      activityLocation,
      themeColor
    } = payload;
    
    // 获取基础描述
    const activityType = this.getActivityType(activityContent);
    const styleDesc = this.getStyleDescription(posterStyle);
    const standardStyle = this.getStandardStyle(posterStyle);
    const colorTheme = this.getColorTheme(themeColor, posterStyle);
    const composition = this.getCompositionGuide(posterStyle);
    
    // 构建核心信息
    const coreInfo = [
      clubName && `Club: ${clubName}`,
      activityContent && `Activity: ${activityContent}`,
      activityTime && `Time: ${activityTime}`,
      activityLocation && `Location: ${activityLocation}`
    ].filter(Boolean);
    
    // 生成正面提示词 - 使用专业风格描述
    const positivePrompt = [
      // 专业风格描述 - 直接使用用户提供的专业提示词
      styleDesc,
      
      // 构图指导
      composition,
      
      // 活动类型
      `${activityType} design`,
      
      // 视觉元素
      'professional layout',
      'clear information display',
      'readable text',
      'balanced design',
      
      // 颜色和风格
      `${colorTheme}`,
      'high quality',
      'professional appearance',
      
      // 核心信息
      `Content: ${coreInfo.join(' | ')}`,
      'All text in English, clear and readable',
      
      // 海报格式
      'poster format, vertical orientation, promotional material'
    ].join(', ');
    
    // 生成负面提示词 - 针对常见问题
    const negativePrompt = [
      // 质量问题
      'blurry, low quality, distorted, pixelated, bad quality',
      
      // 文字问题
      'unreadable text, strange characters, foreign symbols, text corruption',
      'excessive text, cluttered layout, poor text placement',
      
      // 设计问题
      'amateur design, unprofessional, messy, cluttered, poor layout',
      'watermarks, logos, signatures, text overlays',
      
      // AI生成问题
      'bad anatomy, deformed, ugly, bad proportions, extra limbs',
      'worst quality, low quality, normal quality, jpeg artifacts'
    ].join(', ');
    
    return {
      positive: positivePrompt,
      negative: negativePrompt,
      style: posterStyle,
      standardStyle: standardStyle,
      activityType: activityType,
      coreInfo: coreInfo
    };
  }
  
  // 提示词质量评估 - 简化版本
  static evaluatePrompt(prompt) {
    const score = {
      clarity: 0,
      specificity: 0,
      balance: 0,
      creativity: 0,
      technical: 0
    };
    
    // 清晰度评分 (0-3分)
    if (prompt.includes('clear information display')) score.clarity += 1;
    if (prompt.includes('readable text')) score.clarity += 1;
    if (prompt.includes('professional appearance')) score.clarity += 1;
    
    // 具体性评分 (0-3分)
    if (prompt.includes('event poster')) score.specificity += 1;
    if (prompt.includes('design')) score.specificity += 1;
    if (prompt.includes('Content:')) score.specificity += 1;
    
    // 平衡性评分 (0-2分)
    const promptLength = prompt.length;
    if (promptLength > 200 && promptLength < 800) score.balance += 1;
    if (prompt.includes('balanced design')) score.balance += 1;
    
    // 创意性评分 (0-2分)
    if (prompt.includes('creative') || prompt.includes('artistic')) score.creativity += 1;
    if (prompt.includes('unique') || prompt.includes('distinctive')) score.creativity += 1;
    
    // 技术性评分 (0-2分)
    if (prompt.includes('high quality')) score.technical += 1;
    if (prompt.includes('professional')) score.technical += 1;
    
    const totalScore = Object.values(score).reduce((a, b) => a + b, 0);
    const maxScore = 12;
    
    return {
      score: totalScore,
      maxScore: maxScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      breakdown: score,
      grade: totalScore >= 9 ? 'A' : totalScore >= 7 ? 'B' : totalScore >= 5 ? 'C' : totalScore >= 3 ? 'D' : 'F'
    };
  }
  
  // 生成创意提示词变体 - 基于新风格类型
  static generateCreativeVariants(basePrompt, style, count = 3) {
    const variants = [];
    
    // 基于风格的创意变体
    if (style === 'modern minimalist') {
      variants.push(basePrompt.replace('minimalist poster design', 'ultra-minimalist poster design, zen aesthetic'));
      variants.push(basePrompt.replace('clean layout', 'breathable layout, generous white space'));
      variants.push(basePrompt.replace('simple geometric shapes', 'essential geometric forms, refined simplicity'));
    } else if (style === 'vintage artistic') {
      variants.push(basePrompt.replace('vintage poster design', 'authentic vintage poster design, classic charm'));
      variants.push(basePrompt.replace('retro textures', 'authentic retro textures, heritage feel'));
      variants.push(basePrompt.replace('20th century style', 'golden age style, timeless appeal'));
    } else if (style === 'dynamic energetic') {
      variants.push(basePrompt.replace('dynamic poster design', 'high-energy poster design, explosive impact'));
      variants.push(basePrompt.replace('vibrant colors', 'ultra-vibrant colors, electric energy'));
      variants.push(basePrompt.replace('futuristic vibe', 'cutting-edge vibe, next-level energy'));
    } else if (style === 'elegant formal') {
      variants.push(basePrompt.replace('elegant poster design', 'luxury poster design, premium elegance'));
      variants.push(basePrompt.replace('black and gold palette', 'platinum and gold palette, royal luxury'));
      variants.push(basePrompt.replace('classy and formal layout', 'sophisticated layout, high-end design'));
    } else if (style === 'creative artistic') {
      variants.push(basePrompt.replace('creative poster design', 'avant-garde poster design, artistic innovation'));
      variants.push(basePrompt.replace('surreal composition', 'dreamlike composition, artistic fantasy'));
      variants.push(basePrompt.replace('modern art inspiration', 'contemporary art inspiration, cutting-edge creativity'));
    } else if (style === 'tech futuristic') {
      variants.push(basePrompt.replace('futuristic tech poster design', 'next-gen tech poster design, future now'));
      variants.push(basePrompt.replace('neon lights', 'advanced neon technology, holographic innovation'));
      variants.push(basePrompt.replace('high-tech vibe', 'cutting-edge tech vibe, tomorrow\'s design'));
    } else {
      // 通用创意变体
      variants.push(basePrompt.replace('professional appearance', 'visually striking, eye-catching design'));
      variants.push(basePrompt.replace('event poster', 'contemporary event poster, modern design approach'));
      variants.push(basePrompt.replace('professional layout', 'creative layout, innovative design approach'));
    }
    
    return variants.slice(0, count);
  }
  
  // 生成风格化提示词 - 基于新风格类型
  static generateStyledPrompt(basePrompt, style) {
    const styleEnhancers = {
      // 新风格增强器
      'modern minimalist': 'zen aesthetic, refined simplicity, essential beauty, minimalist elegance',
      'vintage artistic': 'classic charm, timeless appeal, heritage feel, vintage sophistication',
      'dynamic energetic': 'energetic presence, bold impact, exciting appeal, dynamic power',
      'elegant formal': 'luxury feel, premium quality, sophisticated charm, elegant prestige',
      'creative artistic': 'artistic flair, creative expression, unique character, innovative beauty',
      'tech futuristic': 'futuristic edge, high-tech vibe, digital aesthetic, next-gen appeal',
      
      // 兼容旧风格
      'modern': 'contemporary aesthetic, sleek design, cutting-edge appearance',
      'vintage': 'classic charm, timeless appeal, heritage feel',
      'cyberpunk': 'futuristic edge, high-tech vibe, digital aesthetic',
      'handdrawn': 'artistic flair, creative expression, unique character',
      'academic': 'scholarly appearance, professional authority, institutional prestige',
      'minimalist': 'refined elegance, sophisticated simplicity, premium feel',
      'dynamic': 'energetic presence, bold impact, exciting appeal',
      'elegant': 'luxury feel, premium quality, sophisticated charm'
    };
    
    const enhancer = styleEnhancers[style] || styleEnhancers.modern;
    return `${basePrompt}, ${enhancer}`;
  }
}

// 使用示例
if (typeof globalThis.process !== 'undefined' && import.meta.url === `file://${globalThis.process.argv[1]}`) {
  const testPayload = {
    clubName: "NTU AI Club",
    activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
    posterStyle: "modern",
    activityTime: "2025-09-20 19:00",
    activityLocation: "Student Activity Centre Room 204",
    themeColor: "#0055FF"
  };
  
  const optimizer = new PromptOptimizer();
  const result = optimizer.generateOptimizedPrompt(testPayload);
  const evaluation = optimizer.evaluatePrompt(result.positive);
  
  console.log('🎨 通用优化提示词:');
  console.log('✅ 正面提示词:', result.positive);
  console.log('❌ 负面提示词:', result.negative);
  console.log('📊 质量评估:', evaluation);
  
  // 生成创意变体
  const variants = optimizer.generateCreativeVariants(result.positive, result.style);
  console.log('\n🎭 创意变体:');
  variants.forEach((variant, index) => {
    console.log(`变体 ${index + 1}:`, variant);
  });
}
