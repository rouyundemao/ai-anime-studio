import { create } from 'zustand'

interface SearchResult {
  type: 'module' | 'prompt' | 'section' | 'tutorial' | 'resource'
  id: string
  title: string
  content: string
  path: string
  module?: string
  tags?: string[]
}

interface SearchState {
  query: string
  results: SearchResult[]
  isSearching: boolean
  searchHistory: string[]
  
  setQuery: (query: string) => void
  search: (query: string) => void
  clearResults: () => void
  addToHistory: (query: string) => void
  clearHistory: () => void
}

// 搜索数据源（扩展版）
const searchData: SearchResult[] = [
  // 模块搜索
  { type: 'module', id: 'module-1', title: '艺术理念', content: '创意构思与策划 核心理念 故事构思 创意灵感 艺术表达', path: '/module-1', tags: ['创意', '策划', '理念', '构思', '灵感', '艺术'] },
  { type: 'module', id: 'module-2', title: '故事创作艺术', content: '剧本结构 英雄之旅 救猫咪 人物弧光 三幕结构 情节设计 故事模板', path: '/module-2', tags: ['剧本', '故事', '人物', '结构', '情节', '模板'] },
  { type: 'module', id: 'module-3', title: '角色设计体系', content: '角色人设 五官设计 LoRA训练 三视图 角色设定 性格特征 外貌设计', path: '/module-3', tags: ['角色', '设计', 'LoRA', '五官', '人设', '特征'] },
  { type: 'module', id: 'module-4', title: '世界构建方法', content: '世界观 地理生态 历史神话 文明体系 社会结构 魔法体系 场景设定', path: '/module-4', tags: ['世界观', '设定', '地理', '历史', '文明', '场景'] },
  { type: 'module', id: 'module-5', title: '画面生成', content: '镜头语言 三层光影 画质提升 调色 构图 色彩搭配 视觉设计', path: '/module-5', tags: ['画面', '光影', '画质', '镜头', '构图', '视觉'] },
  { type: 'module', id: 'module-6', title: '动画生成', content: '静帧动画 物理真实感 情感动画 补帧 动作设计 流畅度 视频生成', path: '/module-6', tags: ['动画', '物理', '动作', '流畅', '情感', '视频'] },
  { type: 'module', id: 'module-7', title: '混合媒体艺术', content: '水墨风格 手绘AI 实拍融合 后期制作 风格融合 特效 混合媒体', path: '/module-7', tags: ['水墨', '手绘', '融合', '特效', '后期', '媒体'] },
  { type: 'module', id: 'module-8', title: '六步标准化工作流', content: '完整流程 剧本创作 角色设计 场景设计 动画生成 后期制作 标准流程', path: '/module-8', tags: ['工作流', '流程', '标准', '完整'] },
  
  // Prompt 搜索（扩展版）
  { type: 'prompt', id: 'prompt-1', title: '剧本创作模板', content: 'AI 动漫短剧剧本创作模板 场景描述 对话设计 故事大纲', path: '/prompt-library', module: 'Module 8', tags: ['剧本', '模板', '对话', '场景', '大纲'] },
  { type: 'prompt', id: 'prompt-2', title: '角色设计提示词', content: '完美精致五官 五官比例协调 角色设定 人物特征 外貌描述', path: '/prompt-library', module: 'Module 3', tags: ['角色', '五官', '人设', '特征', '外貌'] },
  { type: 'prompt', id: 'prompt-3', title: '三层光影Prompt', content: '环境氛围光 人物轮廓光 面部补光 光影效果 灯光设计', path: '/prompt-library', module: 'Module 5', tags: ['光影', '画面', '氛围', '灯光', '效果'] },
  { type: 'prompt', id: 'prompt-4', title: '图生动画Prompt', content: '静帧图生成动画 动作幅度控制 流畅动画 动态效果 视频生成', path: '/prompt-library', module: 'Module 6', tags: ['动画', '视频', '动作', '动态', '流畅'] },
  { type: 'prompt', id: 'prompt-5', title: '水墨风格Prompt', content: '东方水墨风格 传统笔触 意境悠远 中国风 国画效果', path: '/prompt-library', module: 'Module 7', tags: ['水墨', '风格', '中国风', '传统', '国画'] },
  { type: 'prompt', id: 'prompt-6', title: '世界观构建Prompt', content: '地理生态 文明体系 历史神话 社会结构 世界设定', path: '/prompt-library', module: 'Module 4', tags: ['世界观', '设定', '文明', '历史', '社会'] },
  { type: 'prompt', id: 'prompt-7', title: 'LoRA训练提示词', content: '角色LoRA训练 三视图 多角度 特征提取 模型训练', path: '/prompt-library', module: 'Module 3', tags: ['LoRA', '训练', '多角度', '三视图', '模型'] },
  { type: 'prompt', id: 'prompt-8', title: '画质提升Prompt', content: '超高清画质 细节增强 4K 分辨率提升 高清图像', path: '/prompt-library', module: 'Module 5', tags: ['画质', '高清', '细节', '4K', '分辨率'] },
  { type: 'prompt', id: 'prompt-9', title: '场景设计Prompt', content: '场景构建 环境设计 背景生成 氛围营造 空间设计', path: '/prompt-library', module: 'Module 4', tags: ['场景', '环境', '背景', '氛围', '空间'] },
  { type: 'prompt', id: 'prompt-10', title: '色彩搭配Prompt', content: '色彩理论 配色方案 色调调整 色彩情感 颜色搭配', path: '/prompt-library', module: 'Module 5', tags: ['色彩', '配色', '色调', '情感', '颜色'] },
  
  // 工具搜索（扩展版）
  { type: 'section', id: 'tool-midjourney', title: 'Midjourney', content: 'AI 图片生成工具 高质量图像 艺术风格 图像生成 绘画工具', path: '/tools', tags: ['工具', '图片', '艺术', 'AI', '绘画'] },
  { type: 'section', id: 'tool-runway', title: 'Runway Gen-3', content: 'AI 视频生成工具 文生视频 图生视频 视频制作', path: '/tools', tags: ['工具', '视频', 'AI', '生成', '制作'] },
  { type: 'section', id: 'tool-comfyui', title: 'ComfyUI', content: '本地 AI 生成工具 节点式工作流 自定义 工作流程', path: '/tools', tags: ['工具', '本地', '节点', '工作流', '自定义'] },
  { type: 'section', id: 'tool-stable-diffusion', title: 'Stable Diffusion', content: '开源AI图像生成 模型训练 插件扩展 图像生成', path: '/tools', tags: ['工具', '开源', '模型', '图像', '扩展'] },
  { type: 'section', id: 'tool-pika', title: 'Pika Labs', content: 'AI 视频生成 文本转视频 图像转视频 动画生成', path: '/tools', tags: ['工具', '视频', 'AI', '生成', '动画'] },
  { type: 'section', id: 'tool-heygen', title: 'HeyGen', content: 'AI 数字人 视频口型 虚拟主播 数字人生成', path: '/tools', tags: ['工具', '数字人', '口型', '虚拟', '主播'] },
  { type: 'section', id: 'tool-elevenlabs', title: 'ElevenLabs', content: 'AI 语音合成 声音克隆 多语言 配音工具', path: '/tools', tags: ['工具', '语音', '声音', 'AI', '配音'] },
  { type: 'section', id: 'tool-jimeng', title: '即梦 AI', content: '字节跳动 AI 图片生成 视频生成 国产AI工具', path: '/tools', tags: ['工具', '图片', '视频', 'AI', '国产'] },
  
  // 教程章节搜索
  { type: 'tutorial', id: 'tutorial-hero-journey', title: '英雄之旅', content: '约瑟夫坎贝尔 英雄之旅 故事模板 冒险召唤 故事结构', path: '/tutorials', tags: ['教程', '英雄之旅', '故事', '模板', '结构'] },
  { type: 'tutorial', id: 'tutorial-save-cat', title: '救猫咪', content: '布莱克斯奈德 救猫咪 剧本结构 节拍表 故事节拍', path: '/tutorials', tags: ['教程', '救猫咪', '剧本', '结构', '节拍'] },
  { type: 'tutorial', id: 'tutorial-three-act', title: '三幕结构', content: '第一幕 第二幕 第三幕 起承转合 故事分段', path: '/tutorials', tags: ['教程', '三幕', '结构', '剧本', '分段'] },
  { type: 'tutorial', id: 'tutorial-character-arc', title: '人物弧光', content: '角色成长 性格转变 内心冲突 人物发展', path: '/tutorials', tags: ['教程', '角色', '成长', '转变', '发展'] },
  { type: 'tutorial', id: 'tutorial-camera-language', title: '镜头语言', content: '景别 角度 运动 构图 视觉叙事 摄影技巧', path: '/tutorials', tags: ['教程', '镜头', '构图', '视觉', '摄影'] },
  { type: 'tutorial', id: 'tutorial-lighting', title: '三层光影', content: '环境光 轮廓光 补光 灯光设计 光影理论', path: '/tutorials', tags: ['教程', '光影', '灯光', '氛围', '理论'] },
  { type: 'tutorial', id: 'tutorial-color-theory', title: '色彩理论', content: '色相 饱和度 明度 配色 色彩心理 颜色理论', path: '/tutorials', tags: ['教程', '色彩', '配色', '心理', '理论'] },
  { type: 'tutorial', id: 'tutorial-animation-principles', title: '动画十二原则', content: '挤压拉伸 预备动作 跟随动作 缓入缓出 动画理论', path: '/tutorials', tags: ['教程', '动画', '原则', '运动', '理论'] },
  
  // 资源搜索
  { type: 'resource', id: 'resource-models', title: 'AI 模型资源', content: '预训练模型 微调模型 社区模型 模型下载 模型资源', path: '/resources', tags: ['资源', '模型', '下载', '社区', '训练'] },
  { type: 'resource', id: 'resource-datasets', title: '数据集资源', content: '训练数据集 标注数据 公开数据集 图像数据集 数据资源', path: '/resources', tags: ['资源', '数据集', '训练', '标注', '数据'] },
  { type: 'resource', id: 'resource-tutorials', title: '教程资源', content: '视频教程 图文教程 入门教程 进阶教程 学习资源', path: '/resources', tags: ['资源', '教程', '学习', '入门', '进阶'] },
  { type: 'resource', id: 'resource-communities', title: '社区资源', content: 'Discord社区 Reddit论坛 GitHub项目 技术交流 社区论坛', path: '/resources', tags: ['资源', '社区', '论坛', '交流', 'Discord'] },
]

// 搜索函数（增强版）
const performSearch = (query: string): SearchResult[] => {
  if (!query.trim()) return []
  
  const lowerQuery = query.toLowerCase()
  
  // 分词搜索
  const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 0)
  
  return searchData.filter(item => {
    // 标题匹配（权重最高）
    if (item.title.toLowerCase().includes(lowerQuery)) return true
    
    // 分词匹配标题
    if (queryWords.some(word => item.title.toLowerCase().includes(word))) return true
    
    // 内容匹配
    if (item.content.toLowerCase().includes(lowerQuery)) return true
    
    // 分词匹配内容
    if (queryWords.some(word => item.content.toLowerCase().includes(word))) return true
    
    // 标签匹配
    if (item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))) return true
    
    // 分词匹配标签
    if (item.tags?.some(tag => queryWords.some(word => tag.toLowerCase().includes(word)))) return true
    
    // 模块匹配
    if (item.module?.toLowerCase().includes(lowerQuery)) return true
    
    return false
  })
}

export const useSearchStore = create<SearchState>()((set, get) => ({
  query: '',
  results: [],
  isSearching: false,
  searchHistory: [],
  
  setQuery: (query: string) => {
    set({ query })
  },
  
  search: (query: string) => {
    if (!query.trim()) {
      set({ results: [], isSearching: false })
      return
    }
    
    set({ isSearching: true, query })
    
    const results = performSearch(query)
    
    set({ results, isSearching: false })
    
    // 添加到搜索历史
    if (query.trim().length > 1) {
      get().addToHistory(query)
    }
  },
  
  clearResults: () => {
    set({ results: [], query: '', isSearching: false })
  },
  
  addToHistory: (query: string) => {
    const history = get().searchHistory
    if (!history.includes(query) && query.trim().length > 1) {
      set({ searchHistory: [query, ...history].slice(0, 10) })
    }
  },
  
  clearHistory: () => {
    set({ searchHistory: [] })
  },
}))