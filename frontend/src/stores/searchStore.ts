import { create } from 'zustand'

interface SearchResult {
  type: 'module' | 'prompt' | 'section'
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

// 搜索数据源
const searchData: SearchResult[] = [
  // 模块搜索
  { type: 'module', id: 'module-1', title: '艺术理念', content: '创意构思与策划 核心理念', path: '/module-1', tags: ['创意', '策划', '理念'] },
  { type: 'module', id: 'module-2', title: '故事创作艺术', content: '剧本结构 英雄之旅 救猫咪 人物弧光', path: '/module-2', tags: ['剧本', '故事', '人物'] },
  { type: 'module', id: 'module-3', title: '角色设计体系', content: '角色人设 五官设计 LoRA训练 三视图', path: '/module-3', tags: ['角色', '设计', 'LoRA'] },
  { type: 'module', id: 'module-4', title: '世界构建方法', content: '世界观 地理生态 历史神话 文明体系', path: '/module-4', tags: ['世界观', '设定'] },
  { type: 'module', id: 'module-5', title: '画面生成', content: '镜头语言 三层光影 画质提升 调色', path: '/module-5', tags: ['画面', '光影', '画质'] },
  { type: 'module', id: 'module-6', title: '动画生成', content: '静帧动画 物理真实感 情感动画 补帧', path: '/module-6', tags: ['动画', '物理'] },
  { type: 'module', id: 'module-7', title: '混合媒体艺术', content: '水墨风格 手绘AI 实拍融合 后期制作', path: '/module-7', tags: ['水墨', '手绘', '融合'] },
  { type: 'module', id: 'module-8', title: '六步标准化工作流', content: '完整流程 剧本创作 角色设计 场景设计', path: '/module-8', tags: ['工作流', '流程'] },
  
  // Prompt 搜索
  { type: 'prompt', id: 'prompt-1', title: '剧本创作模板', content: 'AI 动漫短剧剧本创作模板', path: '/prompt-library', module: 'Module 8', tags: ['剧本', '模板'] },
  { type: 'prompt', id: 'prompt-2', title: '角色设计提示词', content: '完美精致五官 五官比例协调', path: '/prompt-library', module: 'Module 3', tags: ['角色', '五官'] },
  { type: 'prompt', id: 'prompt-3', title: '三层光影Prompt', content: '环境氛围光 人物轮廓光 面部补光', path: '/prompt-library', module: 'Module 5', tags: ['光影', '画面'] },
  { type: 'prompt', id: 'prompt-4', title: '图生动画Prompt', content: '静帧图生成动画 动作幅度控制', path: '/prompt-library', module: 'Module 6', tags: ['动画', '视频'] },
  { type: 'prompt', id: 'prompt-5', title: '水墨风格Prompt', content: '东方水墨风格 传统笔触 意境悠远', path: '/prompt-library', module: 'Module 7', tags: ['水墨', '风格'] },
  { type: 'prompt', id: 'prompt-6', title: '世界观构建Prompt', content: '地理生态 文明体系 历史神话', path: '/prompt-library', module: 'Module 4', tags: ['世界观', '设定'] },
  
  // 工具搜索
  { type: 'section', id: 'tool-midjourney', title: 'Midjourney', content: 'AI 图片生成工具', path: '/tools', tags: ['工具', '图片'] },
  { type: 'section', id: 'tool-runway', title: 'Runway Gen-3', content: 'AI 视频生成工具', path: '/tools', tags: ['工具', '视频'] },
  { type: 'section', id: 'tool-comfyui', title: 'ComfyUI', content: '本地 AI 生成工具', path: '/tools', tags: ['工具', '本地'] },
]

// 搜索函数
const performSearch = (query: string): SearchResult[] => {
  if (!query.trim()) return []
  
  const lowerQuery = query.toLowerCase()
  
  return searchData.filter(item => {
    // 标题匹配
    if (item.title.toLowerCase().includes(lowerQuery)) return true
    // 内容匹配
    if (item.content.toLowerCase().includes(lowerQuery)) return true
    // 标签匹配
    if (item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))) return true
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