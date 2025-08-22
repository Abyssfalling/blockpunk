# 🎨 前端字段映射说明

## 📋 字段定义

根据您提供的前端字段结构，以下是完整的字段映射和说明：

```javascript
const inputFields = [
    { id: 'clubName', type: 'text' },
    { id: 'activityContent', type: 'textarea' },
    { id: 'posterStyle', type: 'select' },
    { id: 'activityTime', type: 'datetime' },
    { id: 'activityLocation', type: 'text' },
    { id: 'themeColor', type: 'color' }
];
```

## 🔤 字段详细说明

### 1. `clubName` (社团名称)
- **类型**: `text`
- **必填**: ✅ 是
- **说明**: 社团或组织的名称
- **示例**: "NTU AI Club", "NTU Photography Society"
- **用途**: 作为海报的主要标题和标识

### 2. `activityContent` (活动内容)
- **类型**: `textarea`
- **必填**: ✅ 是
- **说明**: 活动的详细描述和内容
- **示例**: "Intro to Stable Diffusion and prompt engineering workshop"
- **用途**: 生成活动类型，构建提示词的核心内容

### 3. `posterStyle` (海报风格)
- **类型**: `select`
- **必填**: ❌ 否（默认: "modern"）
- **可选值**: 
  - `"modern"` - 现代简约风格
  - `"vintage"` - 复古经典风格
  - `"cyberpunk"` - 赛博朋克风格
  - `"handdrawn"` - 手绘艺术风格
  - `"academic"` - 学术正式风格
  - `"minimalist"` - 极简主义风格
- **用途**: 决定海报的视觉风格和设计元素

### 4. `activityTime` (活动时间)
- **类型**: `datetime`
- **必填**: ❌ 否
- **格式**: "YYYY-MM-DD HH:mm"
- **示例**: "2025-09-20 19:00"
- **用途**: 在海报上显示活动时间信息

### 5. `activityLocation` (活动地点)
- **类型**: `text`
- **必填**: ❌ 否
- **示例**: "Student Activity Centre Room 204"
- **用途**: 在海报上显示活动地点信息

### 6. `themeColor` (主题颜色)
- **类型**: `color`
- **必填**: ❌ 否（默认: "#0055FF"）
- **格式**: 十六进制颜色值
- **示例**: "#0055FF", "#FF6B6B", "#4ECDC4"
- **用途**: 决定海报的主色调和配色方案

## 🚀 API接口使用

### 推荐接口：`/api/generate-poster`

```javascript
// 前端调用示例
const response = await fetch('/api/generate-poster', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    clubName: "NTU AI Club",
    activityContent: "Intro to Stable Diffusion Workshop",
    posterStyle: "modern",
    activityTime: "2025-09-20 19:00",
    activityLocation: "Student Activity Centre Room 204",
    themeColor: "#0055FF"
  })
});

const result = await response.json();
```

### 提示词优化接口：`/api/optimize-prompt`

```javascript
// 仅获取优化后的提示词（不生成图片）
const response = await fetch('/api/optimize-prompt', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    clubName: "NTU AI Club",
    activityContent: "Intro to Stable Diffusion Workshop",
    posterStyle: "modern",
    activityTime: "2025-09-20 19:00",
    activityLocation: "Student Activity Centre Room 204",
    themeColor: "#0055FF"
  })
});

const optimization = await response.json();
```

## 📊 响应数据结构

### 成功响应
```json
{
  "success": true,
  "data": {
    "images": ["https://...", "https://..."],
    "storedImages": [...],
    "count": 2,
    "activityName": "Intro to Stable Diffusion Workshop",
    "storageInfo": "Images stored in /generated-images/...",
    "promptOptimization": {
      "positivePrompt": "Professional event poster design...",
      "negativePrompt": "blurry, low quality...",
      "qualityEvaluation": {
        "score": 10,
        "maxScore": 12,
        "percentage": 83,
        "grade": "B"
      },
      "activityType": "educational workshop",
      "style": "modern",
      "coreInfo": [...]
    }
  }
}
```

### 错误响应
```json
{
  "success": false,
  "error": "missing_required_fields",
  "message": "clubName and activityContent are required",
  "requiredFields": ["clubName", "activityContent"],
  "receivedFields": ["posterStyle", "themeColor"]
}
```

## 🎯 最佳实践

### 1. 字段验证
- 确保 `clubName` 和 `activityContent` 不为空
- 验证 `posterStyle` 是否为有效值
- 检查 `themeColor` 是否为有效的十六进制颜色

### 2. 用户体验
- 为必填字段添加明显的标识
- 提供风格选择的预览效果
- 显示颜色选择器的当前值

### 3. 错误处理
- 捕获并显示API错误信息
- 提供字段验证的实时反馈
- 显示加载状态和进度指示

### 4. 响应处理
- 显示生成的海报图片
- 展示提示词质量评分
- 提供优化建议和改进方向

## 🔧 测试工具

使用提供的测试脚本验证API接口：

```bash
# 测试所有新接口
node test-new-api.js

# 测试提示词优化
node test-combined.js
```

## 📝 注意事项

1. **字段顺序**: 字段顺序不影响API处理，但建议按照逻辑顺序排列
2. **默认值**: 非必填字段都有合理的默认值，确保系统稳定运行
3. **国际化**: 目前支持英文内容，建议活动信息使用英文
4. **图片尺寸**: 默认生成1024x1536的垂直海报，可通过width/height参数自定义
5. **存储管理**: 生成的图片会自动分类存储，按活动名称组织文件夹

