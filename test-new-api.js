import fetch from 'node-fetch';

// 测试新的API接口
const API_BASE_URL = 'http://localhost:3001';

// 测试数据 - 对应前端字段
const testPayload = {
  clubName: "NTU AI Club",
  activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
  posterStyle: "modern",
  activityTime: "2025-09-20 19:00",
  activityLocation: "Student Activity Centre Room 204",
  themeColor: "#0055FF"
};

// 测试提示词优化接口
async function testOptimizePrompt() {
  console.log('🧪 测试提示词优化接口 /api/optimize-prompt\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/optimize-prompt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testPayload)
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('✅ 提示词优化成功！');
      console.log('\n📊 质量评估:');
      console.log(`总分: ${data.data.qualityEvaluation.score}/${data.data.qualityEvaluation.maxScore} (${data.data.qualityEvaluation.percentage}%) - ${data.data.qualityEvaluation.grade}`);
      
      console.log('\n🔍 详细评分:');
      console.log(`清晰度: ${data.data.qualityEvaluation.breakdown.clarity}/3`);
      console.log(`具体性: ${data.data.qualityEvaluation.breakdown.specificity}/3`);
      console.log(`平衡性: ${data.data.qualityEvaluation.breakdown.balance}/2`);
      console.log(`创意性: ${data.data.qualityEvaluation.breakdown.creativity}/2`);
      console.log(`技术性: ${data.data.qualityEvaluation.breakdown.technical}/2`);
      
      console.log('\n📝 优化建议:');
      data.data.suggestions.forEach((suggestion, index) => {
        console.log(`${index + 1}. ${suggestion}`);
      });
      
      console.log('\n📏 提示词长度:');
      console.log(`正面提示词: ${data.data.optimizedPrompts.positive.length} 字符`);
      console.log(`负面提示词: ${data.data.optimizedPrompts.negative.length} 字符`);
      
      console.log('\n🎯 活动信息:');
      console.log(`活动类型: ${data.data.optimizationDetails.activityType}`);
      console.log(`风格: ${data.data.optimizationDetails.style}`);
      console.log(`核心信息: ${data.data.optimizationDetails.coreInfo.join(', ')}`);
      
    } else {
      console.log('❌ 提示词优化失败:', data.error);
    }
    
  } catch (error) {
    console.error('❌ 测试提示词优化接口时出错:', error.message);
  }
}

// 测试海报生成接口
async function testGeneratePoster() {
  console.log('\n🎨 测试海报生成接口 /api/generate-poster\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/generate-poster`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testPayload)
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('✅ 海报生成成功！');
      console.log(`\n📊 生成结果:`);
      console.log(`图片数量: ${data.data.count}`);
      console.log(`活动名称: ${data.data.activityName}`);
      console.log(`存储信息: ${data.data.storageInfo}`);
      
      console.log('\n🖼️ 图片信息:');
      data.data.storedImages.forEach((image, index) => {
        console.log(`${index + 1}. ${image.filename || '未存储'}`);
        console.log(`   原始URL: ${image.originalUrl}`);
        console.log(`   本地路径: ${image.localPath || '未存储'}`);
        console.log(`   公共路径: ${image.publicPath || '未存储'}`);
      });
      
      console.log('\n📝 提示词优化详情:');
      console.log(`质量评分: ${data.data.promptOptimization.qualityEvaluation.score}/${data.data.promptOptimization.qualityEvaluation.maxScore} - ${data.data.promptOptimization.qualityEvaluation.grade}`);
      console.log(`活动类型: ${data.data.promptOptimization.activityType}`);
      console.log(`风格: ${data.data.promptOptimization.style}`);
      
    } else {
      console.log('❌ 海报生成失败:', data.error);
    }
    
  } catch (error) {
    console.error('❌ 测试海报生成接口时出错:', error.message);
  }
}

// 测试健康检查接口
async function testHealthCheck() {
  console.log('\n🏥 测试健康检查接口 /api/health\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const data = await response.json();
    
    console.log('✅ 服务器状态:', data.status);
    console.log(`环境: ${data.env}`);
    console.log(`时间: ${data.time}`);
    
  } catch (error) {
    console.error('❌ 测试健康检查接口时出错:', error.message);
  }
}

// 测试获取图片列表接口
async function testGetImages() {
  console.log('\n🖼️ 测试获取图片列表接口 /api/images\n');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/images`);
    const data = await response.json();
    
    console.log('✅ 获取图片列表成功！');
    console.log(`总活动数: ${data.totalActivities}`);
    console.log(`总图片数: ${data.totalImages}`);
    
    if (data.activities && data.activities.length > 0) {
      console.log('\n📁 活动列表:');
      data.activities.forEach((activity, index) => {
        console.log(`${index + 1}. ${activity.activityName} (${activity.count} 张图片)`);
        activity.images.forEach((image, imgIndex) => {
          console.log(`   ${imgIndex + 1}. ${image.filename} - ${image.publicPath}`);
        });
      });
    } else {
      console.log('📁 暂无存储的图片');
    }
    
  } catch (error) {
    console.error('❌ 测试获取图片列表接口时出错:', error.message);
  }
}

// 主测试函数
async function runAllTests() {
  console.log('🚀 开始测试新的API接口\n');
  console.log('=' .repeat(60));
  
  // 测试健康检查
  await testHealthCheck();
  
  console.log('\n' + '=' .repeat(60));
  
  // 测试提示词优化
  await testOptimizePrompt();
  
  console.log('\n' + '=' .repeat(60));
  
  // 测试海报生成
  await testGeneratePoster();
  
  console.log('\n' + '=' .repeat(60));
  
  // 测试获取图片列表
  await testGetImages();
  
  console.log('\n' + '=' .repeat(60));
  console.log('🎉 所有测试完成！');
}

// 运行测试
runAllTests().catch(console.error);
