import { PromptOptimizer } from './prompt-optimizer.js';

// 专门测试AI生图文字质量的脚本
const testPayload = {
  clubName: "NTU AI Club",
  activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
  posterStyle: "modern",
  activityTime: "2025-09-20 19:00",
  activityLocation: "Student Activity Centre Room 204",
  themeColor: "#0055FF"
};

console.log('🔤 测试AI生图文字质量优化 v1.0\n');

// 生成优化后的提示词
const optimized = PromptOptimizer.generateOptimizedPrompt(testPayload);

console.log('✅ 正面提示词 (文字质量强化):');
console.log(optimized.positive);
console.log('\n❌ 负面提示词 (文字问题强化):');
console.log(optimized.negative);

// 文字质量分析
console.log('\n🔍 文字质量分析:');
const textQualityFeatures = [
  'Text quality:',
  'Text rendering:',
  'Text visibility:',
  'Text processing:',
  'Text accuracy:',
  'Text integrity:'
];

const negativeTextFeatures = [
  'text corruption',
  'text mutation',
  'text deformation',
  'gibberish text',
  'random characters',
  'text overlapping',
  'text merging',
  'broken text'
];

console.log('\n✅ 正面文字特征:');
textQualityFeatures.forEach(feature => {
  const hasFeature = optimized.positive.includes(feature);
  console.log(`${hasFeature ? '✅' : '❌'} ${feature}`);
});

console.log('\n❌ 负面文字特征:');
negativeTextFeatures.forEach(feature => {
  const hasFeature = optimized.negative.includes(feature);
  console.log(`${hasFeature ? '✅' : '❌'} ${feature}`);
});

// 文字处理策略检查
console.log('\n🎯 文字处理策略:');
const strategies = [
  'AI must render text exactly as specified',
  'no text generation',
  'no text interpretation',
  'exact text reproduction',
  'faithful text rendering',
  'maintain text meaning',
  'preserve text structure'
];

strategies.forEach(strategy => {
  const hasStrategy = optimized.positive.includes(strategy);
  console.log(`${hasStrategy ? '✅' : '❌'} ${strategy}`);
});

console.log('\n💡 文字质量改进建议:');
console.log('• 使用更具体的文字质量描述');
console.log('• 强调AI必须准确渲染文字');
console.log('• 避免文字生成和解释');
console.log('• 保持文字完整性和清晰度');
console.log('• 确保文字与背景的对比度');

console.log('\n🚀 预期效果:');
console.log('• 减少文字变形和扭曲');
console.log('• 避免奇怪字符出现');
console.log('• 提高文字可读性');
console.log('• 保持信息完整性');
console.log('• 确保专业海报质量');

