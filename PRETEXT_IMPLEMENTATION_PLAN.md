# Pretext 排版优化实施计划

_使用 Pretext 文本测量库优化 AI 动漫网站的文本排版体验 + 科技感提升_

---

## 📋 项目概览

**目标**: 使用 Pretext 文本测量库解决当前排版问题，提升阅读体验 + 科技感

**核心问题**:
1. 代码块背景深色（已修复但需优化）
2. 文本高度计算不精确，导致布局跳动
3. 响应式排版依赖 CSS，缺乏精确控制
4. 长文本无法实现虚拟滚动优化
5. **缺乏科技感视觉元素** ← 新增

**预期效果**:
- ✅ 代码块、Prompt 卡片高度精确计算
- ✅ 零布局跳动（CLS = 0）
- ✅ 支持虚拟滚动（长文章/大量 Prompt）
- ✅ 跨浏览器一致的文本渲染
- ✅ **科技感排版设计**（渐变、光效、动态效果）

---

## 🎯 实施阶段

### 阶段 1: 基础环境搭建（预计 15 分钟）
**状态**: ⏳ 待开始

#### 任务清单
- [ ] 1.1 安装 Pretext 依赖包
- [ ] 1.2 创建文本测量工具函数 (`src/utils/textLayout.ts`)
- [ ] 1.3 创建 React Hook (`src/hooks/useTextLayout.ts`)
- [ ] 1.4 测试工具函数（控制台验证）

#### 交付物
- `frontend/src/utils/textLayout.ts` - 文本测量工具
- `frontend/src/hooks/useTextLayout.ts` - React Hook
- 测试截图/日志

#### 验收标准
```typescript
// 工具函数可正常调用
const { height, lineCount } = measureText('测试文本', 16, 600)
console.log(height, lineCount) // 应输出有效数值

// Hook 可在组件中使用
const { height } = useTextLayout('测试', 16, 600)
```

---

### 阶段 2: 代码块排版优化 + 科技感（预计 30 分钟）
**状态**: ⏳ 待开始

#### 任务清单
- [ ] 2.1 创建 CodeBlock 组件 (`src/components/CodeBlock.tsx`)
- [ ] 2.2 替换 Module1 中的代码块
- [ ] 2.3 统一代码块样式（浅色背景、正确字体）
- [ ] 2.4 **添加科技感边框和光效**
- [ ] 2.5 测试不同长度代码的渲染效果

#### 交付物
- `frontend/src/components/CodeBlock.tsx` - 代码块组件
- Module1-8 中的代码块更新
- 前后对比截图

#### 科技感设计
```css
/* 渐变边框 */
border: 2px solid transparent;
background: linear-gradient(#f9fafb, #f9fafb) padding-box,
            linear-gradient(90deg, #3b82f6, #8b5cf6) border-box;

/* 光效 */
box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);

/* 代码高亮 */
.token { color: #3b82f6; } /* 关键词 */
.token.string { color: #10b981; } /* 字符串 */
```

#### 验收标准
- ✅ 代码块背景始终为浅色（#f9fafb）
- ✅ 高度精确计算，无布局跳动
- ✅ 长代码自动换行，无溢出
- ✅ **科技感边框和光效**
- ✅ 移动端适配正常

---

### 阶段 3: Prompt 卡片优化 + 科技感（预计 30 分钟）
**状态**: ⏳ 待开始

#### 任务清单
- [ ] 3.1 创建 PromptCard 组件 (`src/components/PromptCard.tsx`)
- [ ] 3.2 替换 Module 中的 Prompt 示例卡片
- [ ] 3.3 添加复制按钮和格式化功能
- [ ] 3.4 **添加渐变背景和悬停效果**
- [ ] 3.5 优化卡片列表的虚拟滚动（可选）

#### 交付物
- `frontend/src/components/PromptCard.tsx` - Prompt 卡片组件
- Module1-8 中的 Prompt 卡片更新
- 性能对比数据（渲染时间、滚动流畅度）

#### 科技感设计
```css
/* 渐变背景 */
background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);

/* 悬停光效 */
:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* 复制按钮 */
.copy-btn {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  color: white;
}
```

#### 验收标准
- ✅ 卡片高度一致，无跳动
- ✅ 复制功能正常
- ✅ **渐变背景和悬停光效**
- ✅ 移动端显示完整
- ✅ 列表滚动流畅（60fps）

---

### 阶段 4: 文章排版优化 + 科技感（预计 45 分钟）
**状态**: ⏳ 待开始

#### 任务清单
- [ ] 4.1 创建 ArticleContent 组件 (`src/components/ArticleContent.tsx`)
- [ ] 4.2 优化段落间距和行高
- [ ] 4.3 **添加标题渐变和装饰元素**
- [ ] 4.4 **添加阅读进度条（科技感样式）**
- [ ] 4.5 实现长文章虚拟滚动（可选）

#### 交付物
- `frontend/src/components/ArticleContent.tsx` - 文章内容组件
- 阅读进度条组件
- 性能优化报告

#### 科技感设计
```css
/* 标题渐变 */
h1, h2, h3 {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 段落装饰 */
p {
  border-left: 3px solid transparent;
  border-image: linear-gradient(180deg, #3b82f6, #8b5cf6) 1;
  padding-left: 1rem;
}

/* 进度条 */
.progress-bar {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}
```

#### 验收标准
- ✅ 行高统一（1.6 倍字体）
- ✅ 段落间距合理
- ✅ **标题渐变文字**
- ✅ **阅读进度条准确**
- ✅ 长文章滚动流畅

---

### 阶段 5: 全局测试与优化（预计 30 分钟）
**状态**: ⏳ 待开始

#### 任务清单
- [ ] 5.1 跨浏览器测试（Chrome、Edge、Firefox）
- [ ] 5.2 移动端适配测试（iOS、Android）
- [ ] 5.3 性能测试（Lighthouse 评分）
- [ ] 5.4 **科技感效果性能优化**
- [ ] 5.5 文档更新（README、工具注释）

#### 交付物
- 测试报告（浏览器兼容性、性能数据）
- 更新后的文档
- 最终提交

#### 验收标准
- ✅ Chrome/Edge/Firefox 显示一致
- ✅ 移动端无布局问题
- ✅ Lighthouse 性能评分 > 90
- ✅ **科技感效果不影响性能**
- ✅ 代码注释完整

---

## 📁 文件结构

```
frontend/src/
├── components/
│   ├── CodeBlock.tsx          # 阶段 2: 代码块组件（科技感边框）
│   ├── PromptCard.tsx         # 阶段 3: Prompt 卡片（渐变背景）
│   ├── ArticleContent.tsx     # 阶段 4: 文章内容（渐变标题）
│   └── ReadingProgress.tsx    # 阶段 4: 阅读进度条
├── hooks/
│   └── useTextLayout.ts       # 阶段 1: 文本布局 Hook
├── utils/
│   └── textLayout.ts          # 阶段 1: 文本测量工具
├── styles/
│   └── tech-glow.css          # 新增：科技感光效样式
└── pages/
    └── Module1-8/             # 逐步替换
```

---

## 🛠️ 技术细节

### Pretext API 使用
```typescript
import { prepare, layout } from '@chenglou/pretext'

// 基础测量
const prepared = prepare(text, '16px "LXGW WenKai"', {
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all'
})
const { height, lineCount } = layout(prepared, maxWidth, lineHeight)

// 分段测量（高级）
const prepared = prepareWithSegments(text, '16px "LXGW WenKai"')
const { lines } = layoutWithLines(prepared, maxWidth, lineHeight)
```

### 科技感配色方案
```typescript
const TECH_COLORS = {
  primary: '#3b82f6',      // 蓝色
  secondary: '#8b5cf6',    // 紫色
  accent: '#10b981',       // 绿色
  glow: 'rgba(59, 130, 246, 0.5)',
  background: '#f9fafb',
  surface: '#ffffff'
}
```

### 光效 CSS
```css
/* 基础光效 */
.tech-glow {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}

/* 渐变边框 */
.tech-border {
  border: 2px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(90deg, #3b82f6, #8b5cf6) border-box;
}

/* 悬停光效增强 */
.tech-glow-hover:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}
```

---

## 📊 验收检查表

### 功能验收
- [ ] 代码块高度精确计算
- [ ] Prompt 卡片无布局跳动
- [ ] 文章排版美观一致
- [ ] 移动端适配正常

### 科技感验收
- [ ] **渐变边框和光效** ✅
- [ ] **标题渐变文字** ✅
- [ ] **悬停动态效果** ✅
- [ ] **阅读进度条** ✅

### 性能验收
- [ ] 首次加载时间 < 3 秒
- [ ] 滚动帧率 > 55fps
- [ ] Lighthouse 性能评分 > 90
- [ ] 无内存泄漏

### 兼容性验收
- [ ] Chrome 最新版 ✅
- [ ] Edge 最新版 ✅
- [ ] Firefox 最新版 ✅
- [ ] iOS Safari ✅
- [ ] Android Chrome ✅

---

## 🚀 实施顺序

```
阶段 1 (基础) → 阶段 2 (代码块) → 阶段 3 (Prompt) → 阶段 4 (文章) → 阶段 5 (测试)
     ↓                ↓                ↓               ↓               ↓
   审查点 1        审查点 2        审查点 3       审查点 4       最终审查
```

**每个阶段完成后提交审查，云确认后再继续下一阶段！**

---

## 📝 变更记录

| 日期 | 阶段 | 状态 | 备注 |
|------|------|------|------|
| 2026-04-24 | 阶段 1 | ⏳ 待开始 | 基础环境搭建 |
| 2026-04-24 | 阶段 2 | ⏳ 待开始 | 代码块优化 + 科技感 |
| 2026-04-24 | 阶段 3 | ⏳ 待开始 | Prompt 卡片 + 渐变 |
| 2026-04-24 | 阶段 4 | ⏳ 待开始 | 文章排版 + 进度条 |
| 2026-04-24 | 阶段 5 | ⏳ 待开始 | 全局测试 |

---

_雾，2026 年 4 月 24 日 01:32_
