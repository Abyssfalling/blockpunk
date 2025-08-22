import fetch from 'node-fetch';

const API_BASE_URL = 'http://localhost:3001';

// 测试数据
const testPayload = {
    clubName: "NTU AI Club",
    activityContent: "Introduction to Stable Diffusion and Prompt Engineering Workshop",
    posterStyle: "modern",
    activityTime: "2025-09-20T19:00",
    activityLocation: "Student Activity Centre Room 204",
    themeColor: "#4CAF50"
};

async function testFrontendConnection() {
    console.log('🔍 测试前后端连接...\n');
    
    try {
        // 1. 测试健康检查
        console.log('1️⃣ 测试后端健康检查...');
        const healthResponse = await fetch(`${API_BASE_URL}/api/health`);
        const healthResult = await healthResponse.json();
        
        if (healthResponse.ok && healthResult.status === 'ok') {
            console.log('✅ 后端健康检查通过');
        } else {
            console.log('❌ 后端健康检查失败:', healthResult);
            return;
        }
        
        // 2. 测试提示词优化
        console.log('\n2️⃣ 测试提示词优化API...');
        const optimizeResponse = await fetch(`${API_BASE_URL}/api/optimize-prompt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testPayload)
        });
        
        if (optimizeResponse.ok) {
            const optimizeResult = await optimizeResponse.json();
            console.log('✅ 提示词优化API正常');
            console.log('📊 质量评分:', optimizeResult.data.qualityEvaluation.score);
            console.log('📝 提示词长度:', optimizeResult.data.optimizedPrompts.positive.length);
        } else {
            console.log('❌ 提示词优化API失败:', optimizeResponse.status, optimizeResponse.statusText);
            const errorText = await optimizeResponse.text();
            console.log('错误详情:', errorText);
        }
        
        // 3. 测试海报生成API
        console.log('\n3️⃣ 测试海报生成API...');
        const generateResponse = await fetch(`${API_BASE_URL}/api/generate-poster`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testPayload)
        });
        
        if (generateResponse.ok) {
            const generateResult = await generateResponse.json();
            console.log('✅ 海报生成API正常');
            console.log('🖼️ 生成图片数量:', generateResult.data.count);
            console.log('💾 存储信息:', generateResult.data.storageInfo);
        } else {
            console.log('❌ 海报生成API失败:', generateResponse.status, generateResponse.statusText);
            const errorText = await generateResponse.text();
            console.log('错误详情:', errorText);
        }
        
        // 4. 测试图片列表API
        console.log('\n4️⃣ 测试图片列表API...');
        const imagesResponse = await fetch(`${API_BASE_URL}/api/images`);
        
        if (imagesResponse.ok) {
            const imagesResult = await imagesResponse.json();
            console.log('✅ 图片列表API正常');
            console.log('📁 图片总数:', imagesResult.count);
        } else {
            console.log('❌ 图片列表API失败:', imagesResponse.status, imagesResponse.statusText);
        }
        
        console.log('\n🎉 前后端连接测试完成！');
        
    } catch (error) {
        console.error('❌ 测试过程中发生错误:', error.message);
        
        if (error.code === 'ECONNREFUSED') {
            console.log('\n💡 解决方案:');
            console.log('1. 确保后端服务器正在运行 (npm start)');
            console.log('2. 检查端口3001是否被占用');
            console.log('3. 检查防火墙设置');
        }
    }
}

// 运行测试
testFrontendConnection();

