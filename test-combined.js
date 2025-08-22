import { PromptOptimizer } from './prompt-optimizer.js';

// 测试结合两者优点的提示词
const testPayload = {
  clubName: "NTU AI Club",
  activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
  posterStyle: "modern",
  activityTime: "2025-09-20 19:00",
  activityLocation: "Student Activity Centre Room 204",
  themeColor: "#0055FF"
};

console.log('🎨 测试结合两者优点的提示词 v5.0\n');

// 生成优化后的提示词
const optimized = PromptOptimizer.generateOptimizedPrompt(testPayload);

console.log('✅ 正面提示词 (结合视觉冲击力+信息完整性):');
console.log(optimized.positive);
console.log('\n❌ 负面提示词 (文字问题强化):');
console.log(optimized.negative);

// 评估质量
const evaluation = PromptOptimizer.evaluatePrompt(optimized.positive);
console.log('\n📊 质量评估:');
console.log(`总分: ${evaluation.score}/${evaluation.maxScore} (${evaluation.percentage}%) - ${evaluation.grade}`);

// 详细评分分析
console.log('\n🔍 详细评分分析:');
console.log(`清晰度 (Clarity): ${evaluation.breakdown.clarity}/3 分 - 信息展示清晰度`);
console.log(`具体性 (Specificity): ${evaluation.breakdown.specificity}/3 分 - 设计元素和信息的具体描述`);
console.log(`平衡性 (Balance): ${evaluation.breakdown.balance}/2 分 - 底图与信息层的平衡`);
console.log(`创意性 (Creativity): ${evaluation.breakdown.creativity}/2 分 - 设计创意`);
console.log(`技术性 (Technical): ${evaluation.breakdown.technical}/2 分 - 技术质量`);

// 提示词长度
console.log(`\n📏 提示词长度: ${optimized.positive.length} 字符`);

console.log('\n🎯 优化详情:');
console.log(`活动类型: ${optimized.activityType}`);
console.log(`风格: ${optimized.style}`);
console.log(`核心信息: ${optimized.coreInfo.join(', ')}`);

// 结合效果分析
console.log('\n🏗️ 结合效果分析:');
const hasVisualImpact = optimized.positive.includes('neural network orb') && optimized.positive.includes('holographic interfaces');
const hasInfoStructure = optimized.positive.includes('Information layer') && optimized.positive.includes('Primary information');
const hasTextQuality = optimized.positive.includes('Text quality') && optimized.positive.includes('Text processing');
const hasRequiredContent = optimized.positive.includes('Required content display');

console.log(`✅ 视觉冲击力: ${hasVisualImpact ? '包含' : '缺失'} - 神经网络球体、全息界面等`);
console.log(`✅ 信息结构: ${hasInfoStructure ? '包含' : '缺失'} - 信息层次、主要信息等`);
console.log(`✅ 文字质量: ${hasTextQuality ? '包含' : '缺失'} - 文字质量、文字处理等`);
console.log(`✅ 必需内容: ${hasRequiredContent ? '包含' : '缺失'} - 所有活动信息显示`);

// 视觉描述分析
console.log('\n🎨 视觉描述分析:');
const visualElements = [
  'neural network orb',
  'glowing pathways',
  'futuristic conference arena',
  'holographic interfaces',
  'neon beams',
  'prismatic highlights',
  'neon blues purples electric greens',
  'floating data streams',
  'abstract tech elements',
  'surreal high-tech visually striking'
];

visualElements.forEach(element => {
  const hasElement = optimized.positive.includes(element);
  console.log(`${hasElement ? '✅' : '❌'} ${element}`);
});

console.log('\n💡 结合优势总结:');
console.log('• 🎨 视觉冲击力: 神经网络球体、全息界面、霓虹光束等科幻元素');
console.log('• 📝 信息完整性: 确保所有活动信息清晰显示');
console.log('• 🔤 文字质量: 专门针对AI生图文字问题优化');
console.log('• 🏗️ 结构清晰: 底图+信息层的明确分离');
console.log('• 🎯 商业标准: 符合专业活动海报要求');

console.log('\n🚀 预期效果:');
console.log('• 强大的视觉冲击力和科技感');
console.log('• 清晰、准确的活动信息展示');
console.log('• 避免AI生图文字问题');
console.log('• 专业、吸引人的活动海报');
console.log('• 适合NTU AI Club的技术主题');

