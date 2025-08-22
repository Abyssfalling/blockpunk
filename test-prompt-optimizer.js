import { PromptOptimizer } from './prompt-optimizer.js';

// 测试数据 - 更多样化的测试案例
const testCases = [
  {
    name: "AI Workshop - Modern Style",
    payload: {
      clubName: "NTU AI Club",
      activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
      posterStyle: "modern",
      activityTime: "2025-09-20 19:00",
      activityLocation: "Student Activity Centre Room 204",
      themeColor: "#0055FF"
    }
  },
  {
    name: "Vintage Social Event",
    payload: {
      clubName: "NTU Photography Club",
      activityContent: "Vintage film photography social gathering",
      posterStyle: "vintage",
      activityTime: "2025-09-25 18:00",
      activityLocation: "Campus Garden",
      themeColor: "#8B4513"
    }
  },
  {
    name: "Cyberpunk Competition",
    payload: {
      clubName: "NTU Gaming Club",
      activityContent: "Cyberpunk 2077 cosplay competition",
      posterStyle: "cyberpunk",
      activityTime: "2025-10-01 20:00",
      activityLocation: "Student Union Hall",
      themeColor: "#FF00FF"
    }
  },
  {
    name: "Academic Lecture - Minimalist",
    payload: {
      clubName: "NTU Science Society",
      activityContent: "Quantum computing fundamentals lecture",
      posterStyle: "minimalist",
      activityTime: "2025-09-28 14:00",
      activityLocation: "Lecture Theatre 1",
      themeColor: "#2E8B57"
    }
  },
  {
    name: "Handdrawn Exhibition",
    payload: {
      clubName: "NTU Art Club",
      activityContent: "Student art exhibition showcase",
      posterStyle: "handdrawn",
      activityTime: "2025-10-05 15:00",
      activityLocation: "Art Gallery",
      themeColor: "#FF6B6B"
    }
  },
  {
    name: "Academic Conference",
    payload: {
      clubName: "NTU Research Society",
      activityContent: "Annual research symposium and conference",
      posterStyle: "academic",
      activityTime: "2025-11-15 09:00",
      activityLocation: "Conference Hall",
      themeColor: "#4A90E2"
    }
  }
];

// 原始提示词生成函数（用于对比）
function buildOriginalPrompt(payload) {
  const clubName = payload.clubName || '';
  const activityContent = payload.activityContent || '';
  const posterStyle = payload.posterStyle || '';
  const activityTime = payload.activityTime || '';
  const activityLocation = payload.activityLocation || '';
  const themeColor = payload.themeColor || '';

  const styleDesc = {
    'modern': 'modern minimalist university poster, bold Swiss typography, strong grid, clean composition, high contrast',
    'vintage': 'vintage poster, textured paper, letterpress look, classic serif type, muted colors',
    'cyberpunk': 'cyberpunk neon poster, high contrast, holographic glow, futuristic typography, dynamic diagonal layout',
    'handdrawn': 'hand-drawn illustration poster, ink and marker texture, playful composition, friendly typography',
    'academic': 'academic style poster, institutional layout, formal hierarchy, accessible typography, clear information blocks',
    'minimalist': 'ultra-minimalist poster, generous negative space, precise alignment, premium print look'
  }[posterStyle] || 'modern minimalist university poster, bold Swiss typography, clean composition, premium print look';

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

  return positive;
}

// 运行测试
async function runTests() {
  console.log('🚀 提示词优化器测试开始\n');
  console.log('📊 新评分系统: 总分12分 (清晰度3分 + 具体性3分 + 平衡性2分 + 创意性2分 + 技术性2分)\n');
  
  for (const testCase of testCases) {
    console.log(`📋 测试案例: ${testCase.name}`);
    console.log('=' .repeat(80));
    
    // 生成原始提示词
    const originalPrompt = buildOriginalPrompt(testCase.payload);
    
    // 生成优化后的提示词
    const optimized = PromptOptimizer.generateOptimizedPrompt(testCase.payload);
    
    // 评估两个提示词
    const originalEval = PromptOptimizer.evaluatePrompt(originalPrompt);
    const optimizedEval = PromptOptimizer.evaluatePrompt(optimized.positive);
    
    // 显示结果
    console.log('\n📝 原始提示词:');
    console.log(`长度: ${originalPrompt.length} 字符`);
    console.log(`质量评分: ${originalEval.score}/${originalEval.maxScore} (${originalEval.percentage}%) - ${originalEval.grade}`);
    console.log(`详细评分: 清晰度${originalEval.breakdown.clarity}, 具体性${originalEval.breakdown.specificity}, 平衡性${originalEval.breakdown.balance}, 创意性${originalEval.breakdown.creativity}, 技术性${originalEval.breakdown.technical}`);
    console.log(`内容: ${originalPrompt}`);
    
    console.log('\n✨ 优化后提示词:');
    console.log(`长度: ${optimized.positive.length} 字符`);
    console.log(`质量评分: ${optimizedEval.score}/${optimizedEval.maxScore} (${optimizedEval.percentage}%) - ${optimizedEval.grade}`);
    console.log(`详细评分: 清晰度${optimizedEval.breakdown.clarity}, 具体性${optimizedEval.breakdown.specificity}, 平衡性${optimizedEval.breakdown.balance}, 创意性${optimizedEval.breakdown.creativity}, 技术性${optimizedEval.breakdown.technical}`);
    console.log(`内容: ${optimized.positive}`);
    
    console.log('\n🎨 优化详情:');
    console.log(`活动类型: ${optimized.activityType}`);
    console.log(`风格: ${optimized.style}`);
    console.log(`核心信息: ${optimized.coreInfo.join(', ')}`);
    
    console.log('\n❌ 负面提示词:');
    console.log(optimized.negative);
    
    console.log('\n📊 质量对比:');
    console.log(`原始提示词: ${originalEval.grade} (${originalEval.percentage}%)`);
    console.log(`优化提示词: ${optimizedEval.grade} (${optimizedEval.percentage}%)`);
    console.log(`改进幅度: +${optimizedEval.score - originalEval.score} 分`);
    
    console.log('\n' + '=' .repeat(80) + '\n');
  }
  
  console.log('✅ 所有测试完成！');
  console.log('\n🎯 优化效果总结:');
  console.log('- 提示词结构更加专业和系统化');
  console.log('- 增加了技术性描述和质量增强');
  console.log('- 负面提示词更加全面和具体');
  console.log('- 评分系统更加精确和全面');
}

// 运行测试
runTests().catch(console.error);
