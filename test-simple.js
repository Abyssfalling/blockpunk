import { PromptOptimizer } from './prompt-optimizer.js';

// 测试信息完整性和清晰度的提示词结构
const testPayload = {
  clubName: "NTU AI Club",
  activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
  posterStyle: "modern",
  activityTime: "2025-09-20 19:00",
  activityLocation: "Student Activity Centre Room 204",
  themeColor: "#0055FF"
};

console.log('🎨 测试信息完整性和清晰度 v4.0\n');

// 生成优化后的提示词
const optimized = PromptOptimizer.generateOptimizedPrompt(testPayload);

console.log('✅ 正面提示词 (强调信息完整性):');
console.log(optimized.positive);
console.log('\n❌ 负面提示词:');
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

// 信息完整性分析
console.log('\n🏗️ 信息完整性分析:');
const hasBackground = optimized.positive.includes('Background:');
const hasInfoLayer = optimized.positive.includes('Information layer:');
const hasPrimaryInfo = optimized.positive.includes('Primary information:');
const hasSecondaryInfo = optimized.positive.includes('Secondary information:');
const hasRequiredContent = optimized.positive.includes('Required content display:');
const hasNoStrangeChars = optimized.positive.includes('no strange characters');

console.log(`✅ 底图设计: ${hasBackground ? '包含' : '缺失'}`);
console.log(`✅ 信息层设计: ${hasInfoLayer ? '包含' : '缺失'}`);
console.log(`✅ 主要信息层次: ${hasPrimaryInfo ? '包含' : '缺失'}`);
console.log(`✅ 次要信息层次: ${hasSecondaryInfo ? '包含' : '缺失'}`);
console.log(`✅ 必需内容显示: ${hasRequiredContent ? '包含' : '缺失'}`);
console.log(`✅ 避免奇怪字符: ${hasNoStrangeChars ? '包含' : '缺失'}`);

// 评分改进建议
console.log('\n💡 评分改进建议:');
if (evaluation.breakdown.clarity < 3) console.log('- 清晰度: 确保包含prominent text display和clear information hierarchy描述');
if (evaluation.breakdown.specificity < 3) console.log('- 具体性: 确保包含Background、Base composition、Required content display等具体描述');
if (evaluation.breakdown.balance < 2) console.log('- 平衡性: 确保同时包含Background和Information layer描述');
if (evaluation.breakdown.creativity < 2) console.log('- 创意性: 确保包含Creative design和artistic composition描述');
if (evaluation.breakdown.technical < 2) console.log('- 技术性: 确保包含8K resolution和studio lighting描述');

console.log('\n🎨 新结构特点:');
console.log('• 信息完整性: 确保所有活动信息都清晰显示在海报上');
console.log('• 主次分明: 社团名称作为主标题，活动描述次之，时间地点再次之');
console.log('• 避免奇怪字符: 明确要求全英文，无奇怪符号');
console.log('• 清晰可读: 强调文字对比度和可读性');
console.log('• 商业级标准: 8K分辨率、专业摄影、工作室照明');
