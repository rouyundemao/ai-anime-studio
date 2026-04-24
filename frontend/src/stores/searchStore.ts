import { create } from 'zustand'

interface SearchResult {
  type: 'module' | 'prompt' | 'section' | 'tutorial' | 'resource' | 'tool' | 'workflow'
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

// 搜索数据源（完整版 - 包含所有页面内容）
const searchData: SearchResult[] = [
  // ==================== 模块搜索 ====================
  { type: 'module', id: 'module-1', title: '艺术理念', content: '创意构思与策划 核心理念 故事构思 创意灵感 艺术表达', path: '/module-1', tags: ['创意', '策划', '理念', '构思', '灵感', '艺术'] },
  { type: 'module', id: 'module-2', title: '故事创作艺术', content: '剧本结构 英雄之旅 救猫咪 人物弧光 三幕结构 情节设计 故事模板', path: '/module-2', tags: ['剧本', '故事', '人物', '结构', '情节', '模板'] },
  { type: 'module', id: 'module-3', title: '角色设计体系', content: '角色人设 五官设计 LoRA训练 三视图 角色设定 性格特征 外貌设计', path: '/module-3', tags: ['角色', '设计', 'LoRA', '五官', '人设', '特征'] },
  { type: 'module', id: 'module-4', title: '世界构建方法', content: '世界观 地理生态 历史神话 文明体系 社会结构 魔法体系 场景设定', path: '/module-4', tags: ['世界观', '设定', '地理', '历史', '文明', '场景'] },
  { type: 'module', id: 'module-5', title: '画面生成', content: '镜头语言 三层光影 画质提升 调色 构图 色彩搭配 视觉设计', path: '/module-5', tags: ['画面', '光影', '画质', '镜头', '构图', '视觉'] },
  { type: 'module', id: 'module-6', title: '动画生成', content: '静帧动画 物理真实感 情感动画 补帧 动作设计 流畅度 视频生成', path: '/module-6', tags: ['动画', '物理', '动作', '流畅', '情感', '视频'] },
  { type: 'module', id: 'module-7', title: '混合媒体艺术', content: '水墨风格 手绘AI 实拍融合 后期制作 风格融合 特效 混合媒体', path: '/module-7', tags: ['水墨', '手绘', '融合', '特效', '后期', '媒体'] },
  { type: 'module', id: 'module-8', title: '六步标准化工作流', content: '完整流程 剧本创作 角色设计 场景设计 动画生成 后期制作 标准流程', path: '/module-8', tags: ['工作流', '流程', '标准', '完整'] },
  
  // ==================== Prompt 搜索 ====================
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
  
  // ==================== 工具搜索 - AI 图片生成 ====================
  { type: 'tool', id: 'tool-jimeng', title: '即梦 AI (Seedream 4.5)', content: '字节跳动顶级图片生成，4K超高清，中文提示词理解优秀，特别适合东方美学风格', path: '/tools', tags: ['国产', '免费', '4K', '图片生成', '字节跳动'] },
  { type: 'tool', id: 'tool-tongyi', title: '通义万相 3.0', content: '阿里云东方风格优化，特别适合水墨效果和古风创作，长文本理解能力强', path: '/tools', tags: ['国产', '免费', '东方风格', '水墨', '古风'] },
  { type: 'tool', id: 'tool-nano-banana', title: 'Nano Banana', content: 'Google Gemini 2.5 Pro Image，付费版最强，多轮编辑后保持高度一致性，支持自然语言指令', path: '/tools', tags: ['国际', '付费', '最强图片', 'Google'] },
  { type: 'tool', id: 'tool-midjourney', title: 'Midjourney', content: '国际顶级艺术风格AI，创意生成能力强，V7版本支持4K高清，适合高端商业创作', path: '/tools', tags: ['国际', '付费', '艺术风格', '商业'] },
  { type: 'tool', id: 'tool-stable-diffusion', title: 'Stable Diffusion 3.0', content: '开源免费，可本地部署，SDXL/SD 3.0模型，ControlNet/IP-Adapter专业控制', path: '/tools', tags: ['开源', '免费', '本地部署', 'ControlNet'] },
  { type: 'tool', id: 'tool-civitai', title: 'Civitai', content: '全球最大的SD模型社区，海量高质量模型可下载，社区活跃（1000万+月活）', path: '/tools', tags: ['模型库', '免费', '社区', 'SD模型'] },
  { type: 'tool', id: 'tool-nijijourney', title: 'NijiJourney', content: 'Midjourney 旗下专业动漫风格工具，二次元创作首选', path: '/tools', tags: ['动漫', '付费', '二次元', 'Midjourney'] },
  { type: 'tool', id: 'tool-draw-things', title: 'Draw Things', content: 'iOS/iPadOS 本地部署工具，隐私安全，适合接NDA保密项目', path: '/tools', tags: ['本地', '免费', '隐私', 'iOS'] },
  
  // ==================== 工具搜索 - AI 视频生成 ====================
  { type: 'tool', id: 'tool-seedance', title: 'Seedance 2.0', content: '字节跳动顶级视频生成模型，支持12项多模态输入，15秒视频，原生音频，2K画质，可用产出率90%+', path: '/tools', tags: ['国产', '付费', '最强视频', '字节跳动'] },
  { type: 'tool', id: 'tool-kling', title: 'Kling 3.0', content: '快手顶级视频生成，2K/4K超高清输出，物理真实感强，多镜头叙事（6镜头），AI导演系统', path: '/tools', tags: ['国产', '免费', '4K画质', '快手'] },
  { type: 'tool', id: 'tool-veo', title: 'Veo 3.1', content: 'Google 旗舰视频生成模型，4K原生画质，原生音画同步，镜头语言丰富，集成 Gemini API', path: '/tools', tags: ['国际', '付费', '电影级', 'Google'] },
  { type: 'tool', id: 'tool-wan', title: 'Wan 2.7', content: '免费工具中逼真度最高（9.8/10），动态逻辑与物理模拟最强，适合专业B-roll素材', path: '/tools', tags: ['免费', '高逼真度', '物理模拟'] },
  { type: 'tool', id: 'tool-runway', title: 'Runway Gen-4 Turbo', content: '国际顶级视频生成和编辑工具，精准操控，主体一致性突破，125积分新用户免费', path: '/tools', tags: ['国际', '付费', '专业级', '视频编辑'] },
  { type: 'tool', id: 'tool-vidu', title: 'Vidu 2.0', content: '生数科技视频生成工具，中国风元素支持佳，3D空间深度强，推拉镜头优秀', path: '/tools', tags: ['国产', '免费', '国风', '3D'] },
  { type: 'tool', id: 'tool-hailuo', title: '海螺 AI 2.3', content: 'MiniMax 视频生成工具，中文理解能力强，生成速度快，300积分新用户免费', path: '/tools', tags: ['国产', '免费', '中文优化', 'MiniMax'] },
  { type: 'tool', id: 'tool-pixverse', title: 'PixVerse', content: '免费工具中面部映射和口型同步表现优秀，60积分/天，适合对口型视频', path: '/tools', tags: ['免费', '口型同步', '面部映射'] },
  
  // ==================== 工具搜索 - 数字人 AI ====================
  { type: 'tool', id: 'tool-wukong', title: '悟空AI', content: '字节跳动与香港大学联合研发，超写实数字人视频生成，解决闪烁断层问题，直接对接电商场景', path: '/tools', tags: ['国产', '电商', '数字人', '字节跳动'] },
  { type: 'tool', id: 'tool-jimeng-avatar', title: '即梦数字人', content: '即梦AI内置数字人功能，输入产品图和文案即可生成带货素材', path: '/tools', tags: ['国产', '带货', '短视频', '数字人'] },
  { type: 'tool', id: 'tool-heygen', title: 'HeyGen', content: '国际顶级数字人平台，支持100+语言，口型同步优秀', path: '/tools', tags: ['国际', '付费', '多语言', '数字人'] },
  { type: 'tool', id: 'tool-did', title: 'D-ID', content: '专业数字人视频生成，支持照片说话，适合营销视频', path: '/tools', tags: ['国际', '付费', '营销', '数字人'] },
  
  // ==================== 工具搜索 - 提示词工具 ====================
  { type: 'tool', id: 'tool-myprompt', title: 'MyPrompt 提示词库', content: 'AI 图片与视频提示词大全，支持 Midjourney、Stable Diffusion、DALL·E、Nano Banana Pro，海量优质提示词', path: '/tools', tags: ['中文', '免费', '图库', '提示词'] },
  { type: 'tool', id: 'tool-promlib', title: 'PromLib·AI 提示词画廊', content: 'AIGC 提示词分享平台，海量 AI 绘画提示词，支持多种模型，社区活跃', path: '/tools', tags: ['中文', '免费', '社区', '提示词'] },
  { type: 'tool', id: 'tool-prompthero', title: 'PromptHero', content: '顶级 AI 提示词搜索引擎，百万级提示词库', path: '/tools', tags: ['国际', '免费', '搜索', '提示词'] },
  { type: 'tool', id: 'tool-promptbase', title: 'PromptBase', content: '专业提示词交易平台，高质量付费提示词', path: '/tools', tags: ['国际', '付费', '交易', '提示词'] },
  { type: 'tool', id: 'tool-aiprm', title: 'AIPRM', content: 'Chrome 插件，一键使用优质提示词', path: '/tools', tags: ['插件', '免费', '便捷', '提示词'] },
  
  // ==================== 工具搜索 - 其他工具 ====================
  { type: 'tool', id: 'tool-deepl', title: 'DeepL', content: '全球最精准的 AI 翻译工具，支持中日英等多语言', path: '/tools', tags: ['国际', '免费', '高精度', '翻译'] },
  { type: 'tool', id: 'tool-figma', title: 'Figma', content: '专业在线设计工具，支持协作', path: '/tools', tags: ['国际', '免费', '协作', '设计'] },
  { type: 'tool', id: 'tool-canva', title: 'Canva', content: '简单易用的在线设计平台', path: '/tools', tags: ['国际', '免费', '模板', '设计'] },
  { type: 'tool', id: 'tool-audacity', title: 'Audacity', content: '免费开源音频编辑软件', path: '/tools', tags: ['免费', '开源', '桌面', '音频'] },
  { type: 'tool', id: 'tool-jianying', title: '剪映', content: '字节跳动视频编辑工具，功能强大', path: '/tools', tags: ['国产', '免费', '易用', '视频编辑'] },
  { type: 'tool', id: 'tool-davinci', title: 'DaVinci Resolve', content: '专业级视频剪辑和调色软件', path: '/tools', tags: ['免费', '专业', '桌面', '调色'] },
  { type: 'tool', id: 'tool-premiere', title: 'Premiere Pro', content: 'Adobe 专业视频编辑软件', path: '/tools', tags: ['付费', '专业', '桌面', '视频编辑'] },
  { type: 'tool', id: 'tool-bilibili', title: 'B 站教程', content: '丰富的 AI 创作和动漫制作教程', path: '/tools', tags: ['国产', '免费', '视频', '教程'] },
  { type: 'tool', id: 'tool-unsplash', title: 'Unsplash', content: '高质量免费图片库', path: '/tools', tags: ['国际', '免费', '图片', '素材'] },
  
  // ==================== 工作流搜索 ====================
  { type: 'workflow', id: 'workflow-1', title: '构思与剧本创作', content: '灵感捕捉 故事内核塑造 角色设定 剧本结构设计 提示词模板 视觉化描写 三幕式结构 救猫咪九幕式', path: '/workflow', tags: ['工作流', '剧本', '构思', '故事', '结构'] },
  { type: 'workflow', id: 'workflow-2', title: '角色设计', content: '角色原型分析 多视角参考图 风格统一技术 ComfyUI 高级控制 角色一致性技术 正面侧面背面', path: '/workflow', tags: ['工作流', '角色', '设计', '一致性', 'ComfyUI'] },
  { type: 'workflow', id: 'workflow-3', title: '场景设计与布局', content: '场景分类与风格统一 VR 实时调整技术 环境音效设计 色彩与光影统一 场景参考图库 室内室外城市自然', path: '/workflow', tags: ['工作流', '场景', '设计', '布局', '氛围'] },
  { type: 'workflow', id: 'workflow-4', title: '动画制作', content: '文生图 + 图生视频 运动捕捉技术 帧数自动化 微表情控制 镜头运动与转场 推拉摇移 淡入淡出', path: '/workflow', tags: ['工作流', '动画', '运动捕捉', '表情', '镜头'] },
  { type: 'workflow', id: 'workflow-5', title: '后期制作', content: '配音艺术 AI 音乐生成 音画同步 视频剪辑调色 数据分析优化 豆包 TTS 2.0 Suno Udio', path: '/workflow', tags: ['工作流', '后期', '配音', '音乐', '剪辑'] },
  { type: 'workflow', id: 'workflow-6', title: '发布与推广', content: '红果签约攻略 抖音/B 站策略 AI 数据分析 多平台分发 商业化变现路径 YouTube TikTok Instagram', path: '/workflow', tags: ['工作流', '发布', '推广', '商业化', '平台'] },
  
  // ==================== 资源搜索 ====================
  { type: 'resource', id: 'resource-ai-tools', title: 'AI 工具资源', content: '顶级 AI 创作工具完整指南 即梦 AI 可灵 AI 海螺 AI Seedance 2.0 通义万相 Midjourney Stable Diffusion', path: '/resources/ai-tools', tags: ['资源', 'AI工具', '工具', '指南'] },
  { type: 'resource', id: 'resource-materials', title: '高质量素材库', content: '精选动漫创作素材资源 场景素材 人物素材 道具素材 特效素材', path: '/resources/materials', tags: ['资源', '素材', '场景', '人物', '特效'] },
  { type: 'resource', id: 'resource-audio', title: '音频资源库', content: '专业音频制作资源集合 背景音乐 音效库 配音素材 音乐创作工具', path: '/resources/audio', tags: ['资源', '音频', '音乐', '音效', '配音'] },
  { type: 'resource', id: 'resource-design', title: '设计资源库', content: '专业设计资源与指南 配色方案 字体库 模板库 排版指南', path: '/resources/design', tags: ['资源', '设计', '配色', '字体', '模板'] },
  { type: 'resource', id: 'resource-prompts', title: '提示词库', content: '顶级提示词模板集合 人物提示词 场景提示词 风格提示词 情感提示词', path: '/resources/prompts', tags: ['资源', '提示词', '模板', '人物', '场景'] },
  { type: 'resource', id: 'resource-documents', title: '技术文档库', content: '专业技术文档与手册 AI 工具手册 视频制作文档 音频处理文档 编程技术文档', path: '/resources/documents', tags: ['资源', '文档', '技术', '手册', '教程'] },
  { type: 'resource', id: 'resource-learning', title: '学习资料库', content: '系统化学习资料集合 艺术史资料 电影语言资料 动漫创作资料 AI 技术资料', path: '/resources/learning', tags: ['资源', '学习', '艺术', '电影', '动漫'] },
  
  // ==================== 教程搜索 ====================
  { type: 'tutorial', id: 'tutorial-hero-journey', title: '英雄之旅', content: '约瑟夫坎贝尔 英雄之旅 故事模板 冒险召唤 故事结构', path: '/tutorials', tags: ['教程', '英雄之旅', '故事', '模板', '结构'] },
  { type: 'tutorial', id: 'tutorial-save-cat', title: '救猫咪', content: '布莱克斯奈德 救猫咪 剧本结构 节拍表 故事节拍', path: '/tutorials', tags: ['教程', '救猫咪', '剧本', '结构', '节拍'] },
  { type: 'tutorial', id: 'tutorial-three-act', title: '三幕结构', content: '第一幕 第二幕 第三幕 起承转合 故事分段', path: '/tutorials', tags: ['教程', '三幕', '结构', '剧本', '分段'] },
  { type: 'tutorial', id: 'tutorial-character-arc', title: '人物弧光', content: '角色成长 性格转变 内心冲突 人物发展', path: '/tutorials', tags: ['教程', '角色', '成长', '转变', '发展'] },
  { type: 'tutorial', id: 'tutorial-camera-language', title: '镜头语言', content: '景别 角度 运动 构图 视觉叙事 摄影技巧', path: '/tutorials', tags: ['教程', '镜头', '构图', '视觉', '摄影'] },
  { type: 'tutorial', id: 'tutorial-lighting', title: '三层光影', content: '环境光 轮廓光 补光 灯光设计 光影理论', path: '/tutorials', tags: ['教程', '光影', '灯光', '氛围', '理论'] },
  { type: 'tutorial', id: 'tutorial-color-theory', title: '色彩理论', content: '色相 饱和度 明度 配色 色彩心理 颜色理论', path: '/tutorials', tags: ['教程', '色彩', '配色', '心理', '理论'] },
  { type: 'tutorial', id: 'tutorial-animation-principles', title: '动画十二原则', content: '挤压拉伸 预备动作 跟随动作 缓入缓出 动画理论', path: '/tutorials', tags: ['教程', '动画', '原则', '运动', '理论'] },
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