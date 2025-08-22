import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 启动NTU社团海报AI生成系统...\n');

// 检查后端依赖
const backendPackagePath = join(__dirname, 'package.json');
if (!fs.existsSync(backendPackagePath)) {
    console.error('❌ 后端依赖未安装，请先运行: npm install');
    process.exit(1);
}

// 检查前端文件
const frontendPath = join(__dirname, 'sogni', 'index.html');
if (!fs.existsSync(frontendPath)) {
    console.error('❌ 前端文件未找到，请检查sogni目录');
    process.exit(1);
}

// 启动后端服务器
console.log('🔧 启动后端服务器...');
const backend = spawn('npm', ['start'], {
    cwd: __dirname,
    stdio: 'pipe',
    shell: true
});

backend.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[BACKEND] ${output.trim()}`);
    
    // 检查后端是否启动成功
    if (output.includes('listening on http://localhost:3001')) {
        console.log('\n✅ 后端服务器启动成功！');
        startFrontend();
    }
});

backend.stderr.on('data', (data) => {
    console.error(`[BACKEND ERROR] ${data.toString().trim()}`);
});

backend.on('error', (error) => {
    console.error('❌ 启动后端服务器失败:', error);
    process.exit(1);
});

// 启动前端服务器
function startFrontend() {
    console.log('\n🌐 启动前端服务器...');
    
    // 使用Python或Node.js启动简单的HTTP服务器
    const frontendPort = 8080;
    
    // 尝试使用Python
    const python = spawn('python', ['-m', 'http.server', frontendPort], {
        cwd: join(__dirname, 'sogni'),
        stdio: 'pipe',
        shell: true
    });
    
    python.stdout.on('data', (data) => {
        console.log(`[FRONTEND] ${data.toString().trim()}`);
    });
    
    python.stderr.on('data', (data) => {
        const error = data.toString();
        if (error.includes('Address already in use')) {
            console.log(`⚠️  端口 ${frontendPort} 已被占用，尝试其他端口...`);
            startFrontendAlternative();
        } else {
            console.error(`[FRONTEND ERROR] ${error.trim()}`);
        }
    });
    
    python.on('error', (error) => {
        console.log('Python服务器启动失败，尝试使用Node.js...');
        startFrontendAlternative();
    });
    
    // 等待一下让服务器启动
    setTimeout(() => {
        console.log(`\n🎉 系统启动完成！`);
        console.log(`📱 前端地址: http://localhost:${frontendPort}`);
        console.log(`🔧 后端地址: http://localhost:3001`);
        console.log(`\n💡 使用说明:`);
        console.log(`1. 在浏览器中打开 http://localhost:${frontendPort}`);
        console.log(`2. 填写社团活动信息`);
        console.log(`3. 点击提交，AI将自动生成海报`);
        console.log(`4. 查看生成结果和质量评估`);
        console.log(`\n🔄 按 Ctrl+C 停止所有服务`);
    }, 2000);
}

// 备用前端启动方法
function startFrontendAlternative() {
    const alternativePort = 8081;
    
    try {
        // 尝试使用Node.js的http-server
        const httpServer = spawn('npx', ['http-server', '-p', alternativePort], {
            cwd: join(__dirname, 'sogni'),
            stdio: 'pipe',
            shell: true
        });
        
        httpServer.stdout.on('data', (data) => {
            console.log(`[FRONTEND] ${data.toString().trim()}`);
        });
        
        httpServer.stderr.on('data', (data) => {
            console.log(`[FRONTEND] ${data.toString().trim()}`);
        });
        
        setTimeout(() => {
            console.log(`\n🎉 系统启动完成！`);
            console.log(`📱 前端地址: http://localhost:${alternativePort}`);
            console.log(`🔧 后端地址: http://localhost:3001`);
            console.log(`\n💡 使用说明:`);
            console.log(`1. 在浏览器中打开 http://localhost:${alternativePort}`);
            console.log(`2. 填写社团活动信息`);
            console.log(`3. 点击提交，AI将自动生成海报`);
            console.log(`4. 查看生成结果和质量评估`);
            console.log(`\n🔄 按 Ctrl+C 停止所有服务`);
        }, 3000);
        
    } catch (error) {
        console.error('❌ 无法启动前端服务器，请手动启动:');
        console.log(`1. 在sogni目录下运行: python -m http.server 8080`);
        console.log(`2. 或者安装http-server: npm install -g http-server`);
        console.log(`3. 然后运行: http-server -p 8080`);
    }
}

// 处理退出信号
process.on('SIGINT', () => {
    console.log('\n🛑 正在停止服务...');
    
    if (backend) {
        backend.kill('SIGINT');
    }
    
    console.log('✅ 服务已停止');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 正在停止服务...');
    
    if (backend) {
        backend.kill('SIGTERM');
    }
    
    console.log('✅ 服务已停止');
    process.exit(0);
});

