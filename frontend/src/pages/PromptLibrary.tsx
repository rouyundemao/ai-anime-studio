/**
 * Prompt 库页面 - 科技感排版
 * 集中展示所有模块的精选 Prompt，支持分类、搜索、一键复制
 */

import React, { useState, useMemo } from 'react'
import PromptCard from '../components/PromptCard'

// Prompt 数据类型
interface PromptItem {
  id: string
  prompt: string
  title: string
  category: string
  module: string
  icon: string
  tags: string[]
}

// 所有 Prompt 数据
const prompts: PromptItem[] = [
  // ── 东方美学 ──────────────────────────────────
  {
    id: 'ea-1',
    prompt: '[动漫主体与场景]，东方水墨留白美学，计白当黑，大面积虚空留白，墨色晕染边缘，极简构图，意境悠远，笔墨写意，动漫风格，8K --ar 16:9 --style raw --s 250',
    title: '水墨留白',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🖌️',
    tags: ['留白', '水墨', '写意']
  },
  {
    id: 'ea-2',
    prompt: '[核心场景与情绪]，情景交融，虚实相生，以景抒情，雾气朦胧，远山如黛，孤舟一叶，空旷寂寥，东方禅意，动漫风格，电影级光影 --ar 16:9 --style raw --s 300',
    title: '情景交融意境',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌫️',
    tags: ['意境', '情景交融', '禅意']
  },
  {
    id: 'ea-3',
    prompt: '[场景描述]，侘寂美学，残缺之美，岁月痕迹，斑驳苔藓，枯枝落叶，自然风化的肌理，不完美即美，冷色调，低饱和，动漫风格，电影级构图 --ar 16:9 --style raw',
    title: '侘寂残缺美',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🍂',
    tags: ['侘寂', '残缺美', '低饱和']
  },
  {
    id: 'ea-4',
    prompt: '[场景]，东方四季美学，樱花飘落 / 荷叶映日 / 红叶层林 / 寒梅傲雪（四选一），季节色彩情绪，诗意画面，动漫风格，8K 超高清 --ar 16:9 --style raw --s 280',
    title: '四季更迭诗意',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌸',
    tags: ['四季', '诗意', '自然']
  },
  {
    id: 'ea-5',
    prompt: '[建筑场景]，传统枯山水禅庭，白砂纹理，置石如岛，苔藓点缀，极简空间，空与实的对话，禅宗哲学，动漫风格，俯视构图，8K --ar 1:1 --style raw',
    title: '枯山水禅庭',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '⛩️',
    tags: ['枯山水', '禅庭', '极简']
  },
  {
    id: 'ea-6',
    prompt: '[人物与场景]，金箔点缀，琳派装饰美学，金色与墨色交织，奢华而克制，平面装饰性构图，东方传统纹样，动漫插画风格 --ar 16:9 --style raw --s 350',
    title: '琳派金箔美学',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '✨',
    tags: ['金箔', '琳派', '装饰性']
  },
  {
    id: 'ea-7',
    prompt: '[夜晚场景]，月色如水，月光倾泻，清冷月白，淡蓝色调，竹影摇曳，虫鸣声声，东方古典意境，寂静之美，动漫风格，电影级光影 --ar 16:9 --style raw',
    title: '月色清冷意境',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌙',
    tags: ['月色', '清冷', '夜晚']
  },
  {
    id: 'ea-8',
    prompt: '[场景描述]，工笔重彩风格，线条精细如发丝，色彩层层渲染，富丽精工，花鸟虫鱼细节极致，传统东方绘画美学，动漫化演绎 --ar 16:9 --style raw --s 300',
    title: '工笔重彩风',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🖼️',
    tags: ['工笔', '重彩', '精工']
  },
  // ── 角色设计 ──────────────────────────────────
  {
    id: 'cd-1',
    prompt: '[角色名]，动漫角色正面参考图，精致五官，双眸有神，皮肤白皙细腻，[发色]长发，[服装描述]，白色背景，全身图，角色设计参考，8K --ar 9:16 --style raw --s 250',
    title: '角色基础参考图',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '👤',
    tags: ['角色', '参考图', '全身']
  },
  {
    id: 'cd-2',
    prompt: '[角色描述]，动漫角色五视角设计图，正面·侧面·背面·3/4视角·特写，同一角色，保持外形一致，角色设计稿，白色背景，精致线条 --ar 16:9 --style raw',
    title: '五视角设计稿',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🔄',
    tags: ['多视角', '设计稿', '一致性']
  },
  {
    id: 'cd-3',
    prompt: '[角色描述]，古风动漫少女，汉服飘逸，云鬓花颜，点绛唇，蛾眉淡扫，水袖轻舒，玉簪环佩，气质高雅清冷，电影级画质 --ar 9:16 --style raw --s 300',
    title: '古风汉服角色',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '👘',
    tags: ['古风', '汉服', '东方']
  },
  {
    id: 'cd-4',
    prompt: '[角色描述]，现代都市动漫少女，JK制服 / 学院风 / 街头潮流（三选一），青春活力，灵动眼神，自然妆容，城市背景虚化，电影级构图 --ar 9:16 --style raw --s 250',
    title: '现代都市少女',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🏙️',
    tags: ['现代', '都市', '青春']
  },
  {
    id: 'cd-5',
    prompt: '[角色描述]，动漫反派角色设计，眼神犀利深邃，气质冷冽危险，暗色服装，锋利线条，神秘感十足，强烈存在感，黑暗美学，动漫风格 --ar 9:16 --style raw --s 350',
    title: '反派角色设计',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '😈',
    tags: ['反派', '黑暗', '冷冽']
  },
  {
    id: 'cd-6',
    prompt: '[角色描述]，动漫角色表情九宫格，喜·怒·哀·惧·惊·思·疲·嗔·平静，同一角色不同表情，白色背景，表情设计参考，精细线条 --ar 1:1 --style raw',
    title: '九种表情设计',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '😊',
    tags: ['表情', '九宫格', '情绪']
  },
  {
    id: 'cd-7',
    prompt: '请为以下角色生成 LoRA 训练数据集描述词：[角色基本设定]。输出格式：①统一外貌锁定词（发色/发型/五官特征/身材/肤色）②20组多场景触发词（自然光/室内/户外/不同情绪/不同服装）③负面描述词（避免特征漂移）',
    title: 'LoRA 训练数据集生成',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🤖',
    tags: ['LoRA', '训练', '一致性']
  },
  {
    id: 'cd-8',
    prompt: '[角色描述]，动漫角色动态姿势，[姿势描述：奔跑/跳跃/回眸/倚墙/坐姿/战斗蓄力]，姿势自然流畅，重心稳定，符合人体结构，动感十足 --ar 9:16 --style raw --s 280',
    title: '动态姿势设计',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🏃',
    tags: ['姿势', '动态', '动感']
  },
  // ── 场景营造 ──────────────────────────────────
  {
    id: 'sc-1',
    prompt: '[城市名/虚构城市]，赛博朋克动漫城市夜景，霓虹灯倒影在雨后街道，高耸入云的摩天大楼，飞行汽车尾迹，密集人群，蒸汽雾气，电影级构图，8K --ar 16:9 --style raw --s 300',
    title: '赛博朋克城市夜景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🌃',
    tags: ['赛博朋克', '城市', '夜景']
  },
  {
    id: 'sc-2',
    prompt: '[朝代/架空王朝]，东方古风城市全景，飞檐翘角，朱墙金瓦，青石板街，集市热闹，烟雨朦胧，航拍俯视构图，动漫风格，史诗级画质 --ar 16:9 --style raw --s 350',
    title: '古风城市全景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🏯',
    tags: ['古风', '古城', '史诗']
  },
  {
    id: 'sc-3',
    prompt: '[自然场景：山川/海洋/森林/草原]，动漫自然风光，宏大壮阔，光线丰富，体积云，远近透视层次分明，季节氛围明确，8K 超高清 --ar 21:9 --style raw --s 300',
    title: '宏大自然风光',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🏔️',
    tags: ['自然', '宏大', '风光']
  },
  {
    id: 'sc-4',
    prompt: '[室内场景：咖啡馆/图书馆/卧室/工作室]，动漫室内场景，温暖灯光，精心陈设，生活感细节丰富，窗外光线漫射，氛围舒适治愈 --ar 16:9 --style raw --s 250',
    title: '治愈系室内场景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🏠',
    tags: ['室内', '治愈', '温暖']
  },
]

// 分类列表
const categories = [
  { name: '全部', icon: '📚' },
  { name: '东方美学', icon: '🌸' },
  { name: '角色设计', icon: '👤' },
  { name: '场景营造', icon: '🏙️' },
  { name: '剧本创作', icon: '📝' },
  { name: '镜头语言', icon: '🎬' },
  { name: '风格模仿', icon: '🎨' },
  { name: '画面生成', icon: '🖼️' },
  { name: '视频动画', icon: '🎞️' },
  { name: '世界观构建', icon: '🌍' },
  { name: '情绪氛围', icon: '💫' },
  { name: '配音配乐', icon: '🎵' },
  { name: '工作流', icon: '⚙️' },
]

function PromptLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')

  // 筛选 Prompt
  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const matchesCategory = selectedCategory === '全部' || prompt.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        prompt.prompt.includes(searchQuery) ||
        prompt.title.includes(searchQuery) ||
        prompt.tags.some(tag => tag.includes(searchQuery))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-[#6B5FA0] via-[#8B7AB8] to-[#C2649C] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="mr-3">✨</span>
            AI 动漫 Prompt 库
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            精选 8 大模块，{prompts.length} 个高质量 Prompt，一键复制，即拿即用
          </p>

          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索 Prompt、标签、关键词..."
                className="w-full px-6 py-4 rounded-2xl text-gray-800 bg-white shadow-2xl
                  focus:outline-none focus:ring-4 focus:ring-blue-300
                  placeholder-gray-400 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300
                flex items-center gap-2
                ${selectedCategory === category.name
                  ? 'bg-gradient-to-r from-[#8B7AB8] to-[#C2649C] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              {category.name !== '全部' && (
                <span className="text-xs opacity-75">
                  ({prompts.filter(p => p.category === category.name).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            当前显示 <span className="font-bold text-blue-600">{filteredPrompts.length}</span> 个 Prompt
            {searchQuery && (
              <span className="ml-2">
                搜索 "<span className="font-bold text-purple-600">{searchQuery}</span>" 的结果
              </span>
            )}
          </p>
        </div>

        {/* Prompt 卡片列表 */}
        <div className="space-y-6">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt, index) => (
              <div
                key={prompt.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PromptCard
                  prompt={prompt.prompt}
                  title={prompt.title}
                  category={prompt.category}
                  icon={prompt.icon}
                  maxWidth={800}
                  fontSize={15}
                />
                {/* 标签和来源 */}
                <div className="flex items-center justify-between mt-3 px-4">
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <span>📚</span>
                    {prompt.module}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">未找到匹配的 Prompt</h3>
              <p className="text-gray-500">
                尝试其他关键词或选择其他分类
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('全部')
                }}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                清除筛选
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 自定义 CSS 动画 */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default PromptLibrary
