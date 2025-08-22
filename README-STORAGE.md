# 🖼️ NTU 社团海报生成器 - 图片存储功能

## 功能概述

现在系统会自动下载并存储所有生成的图片到本地目录，方便查看和管理。

## 📁 目录结构

```
server-minimal/
├── generated-images/           # 按活动分类的图片存储
│   ├── Intro_to_Stable_Diffusion_and_prompt_engineering_workshop/
│   │   ├── 2025-08-22T03-54-44-123Z_abc123.png
│   │   └── 2025-08-22T04-12-33-456Z_def456.png
│   ├── NTU_AI_Club/
│   │   └── 2025-08-22T05-20-15-789Z_ghi789.png
│   └── 其他活动名称/
│       └── ...
├── public/
│   ├── images/                 # 公共访问的图片（用于前端显示）
│   │   ├── 2025-08-22T03-54-44-123Z_abc123.png
│   │   └── ...
│   └── index.html              # 图片查看页面
└── ...
```

## 🚀 新增API端点

### 1. 图片列表API
```
GET /api/images
```

**响应示例：**
```json
{
  "totalActivities": 2,
  "totalImages": 3,
  "activities": [
    {
      "activityName": "Intro_to_Stable_Diffusion_and_prompt_engineering_workshop",
      "count": 2,
      "images": [
        {
          "filename": "2025-08-22T03-54-44-123Z_abc123.png",
          "activityName": "Intro_to_Stable_Diffusion_and_prompt_engineering_workshop",
          "localPath": "D:\\...\\generated-images\\Intro_to_Stable_Diffusion_and_prompt_engineering_workshop\\2025-08-22T03-54-44-123Z_abc123.png",
          "publicPath": "/generated-images/Intro_to_Stable_Diffusion_and_prompt_engineering_workshop/2025-08-22T03-54-44-123Z_abc123.png",
          "size": 1048576,
          "created": "2025-08-22T03:54:44.123Z",
          "modified": "2025-08-22T03:54:44.123Z"
        }
      ]
    }
  ],
  "storageInfo": {
    "baseDir": "D:\\...\\server-minimal\\generated-images",
    "publicDir": "D:\\...\\server-minimal\\public\\images"
  }
}
```

### 2. 增强的生成API
```
POST /api/generate
```

**响应示例：**
```json
{
  "images": [
    {
      "originalUrl": "https://complete-images-production.s3-accelerate.amazonaws.com/...",
      "localPath": "D:\\...\\generated-images\\Intro_to_Stable_Diffusion_and_prompt_engineering_workshop\\2025-08-22T03-54-44-123Z_abc123.png",
      "publicPath": "/images/2025-08-22T03-54-44-123Z_abc123.png",
      "filename": "2025-08-22T03-54-44-123Z_abc123.png",
      "activityName": "Intro_to_Stable_Diffusion_and_prompt_engineering_workshop"
    }
  ],
  "count": 1,
  "activityName": "Intro_to_Stable_Diffusion_and_prompt_engineering_workshop",
  "storageInfo": {
    "baseDir": "D:\\...\\server-minimal\\generated-images",
    "publicDir": "D:\\...\\server-minimal\\public\\images"
  }
}
```

## 🌐 图片访问

### 1. 公共访问
- 所有图片都可以通过 `/images/文件名` 访问
- 例如：`http://localhost:3001/images/2025-08-22T03-54-44-123Z_abc123.png`

### 2. 按活动分类访问
- 按活动分类的图片可以通过 `/generated-images/活动名称/文件名` 访问
- 例如：`http://localhost:3001/generated-images/Intro_to_Stable_Diffusion_and_prompt_engineering_workshop/2025-08-22T03-54-44-123Z_abc123.png`

### 3. 图片查看页面
- 访问 `http://localhost:3001/` 查看所有已生成的图片
- 支持按活动分类显示
- 显示图片统计信息
- 支持刷新图片库

## 🔧 技术特性

### 1. 自动目录创建
- 系统自动创建必要的存储目录
- 按活动名称自动创建子目录
- 清理文件名中的特殊字符

### 2. 唯一文件名
- 时间戳 + 随机ID 确保文件名唯一
- 格式：`YYYY-MM-DDTHH-mm-ss-sssZ_randomId.png`

### 3. 双重存储
- 按活动分类存储到 `generated-images/`
- 同时存储到公共目录 `public/images/` 用于前端访问

### 4. 错误处理
- 即使图片存储失败，API仍会返回原始URL
- 详细的错误日志记录

## 📱 使用方法

### 1. 生成海报
```bash
curl -X POST http://localhost:3001/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "clubName": "NTU AI Club",
    "activityContent": "Intro to Stable Diffusion workshop",
    "posterStyle": "modern",
    "activityTime": "2025-09-20 19:00",
    "activityLocation": "Student Activity Centre Room 204",
    "themeColor": "#0055FF"
  }'
```

### 2. 查看图片列表
```bash
curl http://localhost:3001/api/images
```

### 3. 访问图片查看页面
在浏览器中打开：`http://localhost:3001/`

## 🎯 活动名称规则

- 优先使用 `activityContent` 作为活动名称
- 如果没有，则使用 `clubName`
- 如果都没有，则使用 `NTU_Activity`
- 活动名称会自动清理特殊字符，限制在50个字符内

## 📊 文件管理

- 所有图片都保存在本地，不依赖外部URL
- 支持按活动分类管理
- 提供完整的文件元信息（大小、创建时间等）
- 支持前端直接访问和下载

## 🔄 更新日志

- **v1.1.0**: 添加图片本地存储功能
- **v1.1.0**: 添加图片查看页面
- **v1.1.0**: 添加图片列表API
- **v1.1.0**: 支持按活动分类存储
- **v1.1.0**: 支持公共访问和分类访问

