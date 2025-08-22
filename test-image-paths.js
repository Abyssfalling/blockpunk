import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_BASE_URL = 'http://localhost:3001';

async function testImagePaths() {
    console.log('🔍 测试图片路径和访问...\n');
    
    try {
        // 1. 测试健康检查
        console.log('1️⃣ 测试后端健康检查...');
        const healthResponse = await fetch(`${API_BASE_URL}/api/health`);
        if (!healthResponse.ok) {
            throw new Error('Backend health check failed');
        }
        console.log('✅ 后端健康检查通过');
        
        // 2. 测试图片列表API
        console.log('\n2️⃣ 测试图片列表API...');
        const imagesResponse = await fetch(`${API_BASE_URL}/api/images`);
        if (!imagesResponse.ok) {
            throw new Error('Images API failed');
        }
        
        const imagesResult = await imagesResponse.json();
        console.log('✅ 图片列表API正常');
        console.log('📁 活动数量:', imagesResult.totalActivities);
        console.log('🖼️ 图片总数:', imagesResult.totalImages);
        
        // 3. 检查存储目录
        console.log('\n3️⃣ 检查存储目录...');
        const baseDir = path.join(process.cwd(), 'generated-images');
        const publicDir = path.join(process.cwd(), 'public', 'images');
        
        console.log('📂 基础存储目录:', baseDir);
        console.log('📂 公共访问目录:', publicDir);
        
        if (fs.existsSync(baseDir)) {
            const activityDirs = fs.readdirSync(baseDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory());
            
            console.log('📁 活动目录数量:', activityDirs.length);
            
            for (const activityDir of activityDirs) {
                const activityPath = path.join(baseDir, activityDir.name);
                const imageFiles = fs.readdirSync(activityPath)
                    .filter(file => /\.(png|jpg|jpeg)$/i.test(file));
                
                console.log(`  📂 ${activityDir.name}: ${imageFiles.length} 张图片`);
                
                // 测试每个图片的访问路径
                for (const imageFile of imageFiles) {
                    const publicPath = `/generated-images/${activityDir.name}/${imageFile}`;
                    const fullUrl = `${API_BASE_URL}${publicPath}`;
                    
                    console.log(`    🖼️ ${imageFile}`);
                    console.log(`      本地路径: ${path.join(activityPath, imageFile)}`);
                    console.log(`      公共路径: ${publicPath}`);
                    console.log(`      完整URL: ${fullUrl}`);
                    
                    // 测试图片访问
                    try {
                        const imageResponse = await fetch(fullUrl);
                        if (imageResponse.ok) {
                            console.log(`      ✅ 访问成功 (${imageResponse.status})`);
                        } else {
                            console.log(`      ❌ 访问失败 (${imageResponse.status})`);
                        }
                    } catch (error) {
                        console.log(`      ❌ 访问错误: ${error.message}`);
                    }
                }
            }
        } else {
            console.log('⚠️  基础存储目录不存在');
        }
        
        // 4. 测试静态文件服务
        console.log('\n4️⃣ 测试静态文件服务...');
        const testImagePath = '/generated-images/test.png';
        const testImageUrl = `${API_BASE_URL}${testImagePath}`;
        
        try {
            const testResponse = await fetch(testImageUrl);
            if (testResponse.status === 404) {
                console.log('✅ 静态文件服务正常 (404 for non-existent file)');
            } else {
                console.log(`⚠️  静态文件服务响应: ${testResponse.status}`);
            }
        } catch (error) {
            console.log('❌ 静态文件服务测试失败:', error.message);
        }
        
        console.log('\n🎉 图片路径测试完成！');
        
        // 5. 提供修复建议
        console.log('\n💡 修复建议:');
        console.log('1. 确保后端服务器正在运行');
        console.log('2. 检查CORS配置是否正确');
        console.log('3. 确认图片文件权限设置');
        console.log('4. 验证静态文件服务配置');
        
    } catch (error) {
        console.error('❌ 测试过程中发生错误:', error.message);
    }
}

// 运行测试
testImagePaths();
