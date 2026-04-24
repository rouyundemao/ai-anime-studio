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
  // 模块 1: 艺术理念
  {
    id: 'm1-1',
    prompt: '[动漫主体与场景描述]，东方水墨画留白艺术，计白当黑，大面积留白，留足想象空间，极简构图，意境悠远，动漫风格，电影级画质，8K 超高清 --ar 16:9 --style raw --s 250',
    title: '基础留白 Prompt',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🎨',
    tags: ['留白', '水墨', '东方美学']
  },
  {
    id: 'm1-2',
    prompt: '[核心情节与情绪]，动漫场景，情景交融，虚实相生，通过环境氛围烘托人物情绪，不着一字尽得风流，东方美学意境，电影级光影，氛围感拉满 --ar 16:9 --style raw',
    title: '意境营造 Prompt',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌸',
    tags: ['意境', '氛围', '情景交融']
  },
  {
    id: 'm1-3',
    prompt: '[动漫主体与场景描述]，构图遵循黄金分割与黄金螺旋法则，主体位于黄金分割点，画面平衡有张力，电影级构图，动漫风格，8K 超高清 --ar 16:9 --style raw --s 250',
    title: '黄金分割构图',
    category: '西方美学',
    module: '模块 1: 艺术理念',
    icon: '📐',
    tags: ['构图', '黄金分割', '电影级']
  },
  {
    id: 'm1-4',
    prompt: '[动漫主体与场景描述]，三分法构图，主体位于画面三分之一处，留白区域恰到好处，画面平衡有张力，电影级构图，动漫风格，8K 超高清 --ar 16:9 --style raw',
    title: '三分法构图',
    category: '西方美学',
    module: '模块 1: 艺术理念',
    icon: '📏',
    tags: ['构图', '三分法', '平衡']
  },
  {
    id: 'm1-5',
    prompt: '[电影级场景]，电影级意境表达，空灵淡定的氛围感，留白艺术，动态模糊，景深控制 --ar 16:9 --style raw --s 300',
    title: '电影感意境',
    category: '电影美学',
    module: '模块 1: 艺术理念',
    icon: '🎬',
    tags: ['电影感', '景深', '氛围']
  },
  {
    id: 'm1-6',
    prompt: '[场景描述]，东方美学意境，情景交融，虚实相生，通过朦胧雾气、柔和光线、空白区域营造氛围，让人产生无限遐想 --ar 16:9 --style raw --s 250',
    title: '朦胧雾气意境',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌫️',
    tags: ['雾气', '朦胧', '意境']
  },
  // 模块 2: 故事创作
  {
    id: 'm2-1',
    prompt: '帮我按照好莱坞救猫咪 15 节拍表，创作一个 [题材类型] 动漫短片的完整剧本框架，明确标注每个节拍的核心事件、时长占比、情绪峰值，同时设计完整的主角人物弧光 --ar 16:9',
    title: '三一律剧本框架',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '📝',
    tags: ['剧本', '三一律', '节拍表']
  },
  {
    id: 'm2-2',
    prompt: '基于以上剧本框架，在每个关键节点设置一个悬念，采用"倒金字塔"结构，将最重要的信息放在最后揭晓，全程保持观众的好奇心和紧张感',
    title: '悬念设置 Prompt',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '🔍',
    tags: ['悬念', '倒金字塔', '紧张感']
  },
  {
    id: 'm2-3',
    prompt: '优化以上剧本的起承转合结构，确保每个环节节奏紧凑，情感递进自然。起:引入冲突(30 秒),承:发展矛盾 (60 秒),转:高潮爆发 (45 秒),合:情感释放 (15 秒)',
    title: '起承转合结构',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '📊',
    tags: ['起承转合', '节奏', '情感']
  },
  // 模块 5: 画面生成
  {
    id: 'm5-1',
    prompt: '[动漫主体与场景描述]，动漫场景，情景交融，虚实相生，通过环境氛围烘托人物情绪，不着一字尽得风流，东方美学意境，电影级光影，氛围感拉满 --ar 16:9 --style raw',
    title: '场景氛围 Prompt',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '🖼️',
    tags: ['场景', '氛围', '光影']
  },
  {
    id: 'm5-2',
    prompt: '[角色描述]，动漫角色设计，完美精致五官，五官比例协调，皮肤白皙细腻有光泽，自然清透妆容，柳叶眉，明亮大眼睛，乌黑柔顺长发自然垂落 --ar 16:9 --style raw --s 250',
    title: '角色设计 Prompt',
    category: '角色设计',
    module: '模块 5: 画面生成',
    icon: '👤',
    tags: ['角色', '设计', '五官']
  },
  {
    id: 'm5-3',
    prompt: '[动漫主体与场景描述]，费波那契螺旋构图，黄金螺旋引导线，主体位于螺旋中心点，画面平衡且富有张力，电影级构图，动漫风格，8K 超高清 --ar 16:9 --style raw',
    title: '费波那契构图',
    category: '构图设计',
    module: '模块 5: 画面生成',
    icon: '🌀',
    tags: ['构图', '费波那契', '螺旋']
  },
  // 模块 6: 动画生成
  {
    id: 'm6-1',
    prompt: '为 [核心情节] 设计一组蒙太奇动漫分镜，共 6-8 个镜头，通过镜头组接实现叙事与情绪表达，标注每个镜头的画面内容、时长、声画对位设计，符合电影级蒙太奇语言',
    title: '蒙太奇分镜设计',
    category: '动画制作',
    module: '模块 6: 动画生成',
    icon: '🎞️',
    tags: ['蒙太奇', '分镜', '动画']
  },
  {
    id: 'm6-2',
    prompt: '分析以上蒙太奇分镜，确保镜头组接符合电影语言逻辑:时间连续性、空间一致性、情绪递进性。每个镜头的时长与情绪强度成反比，紧张场景用短镜头，抒情场景用长镜头',
    title: '镜头组接逻辑',
    category: '动画制作',
    module: '模块 6: 动画生成',
    icon: '🎬',
    tags: ['镜头', '组接', '逻辑']
  },
  {
    id: 'm6-3',
    prompt: '为以上蒙太奇分镜设计声画对位关系，包括背景音乐、音效、人声的安排。音乐节奏与画面节奏同步，音效增强画面真实感，人声推动情节发展',
    title: '声画对位设计',
    category: '动画制作',
    module: '模块 6: 动画生成',
    icon: '🎵',
    tags: ['声画', '对位', '音乐']
  },
  // 模块 7: 混合媒体
  {
    id: 'm7-1',
    prompt: '[动漫主体与场景描述]，混合媒体艺术风格，将传统水墨画与现代数字艺术融合，虚实结合，层次丰富，色彩对比强烈，视觉冲击力强，电影级画质，8K 超高清 --ar 16:9',
    title: '混合媒体风格',
    category: '混合媒体',
    module: '模块 7: 混合媒体',
    icon: '🎭',
    tags: ['混合媒体', '水墨', '数字艺术']
  },
  // 模块 8: 工作流
  {
    id: 'm8-1',
    prompt: '为 [题材类型] 动漫短片设计完整工作流，包括:1.艺术理念确立 2.故事创作 3.角色设计 4.场景构建 5.画面生成 6.动画制作 7.后期合成，每个环节标注工具、参数、输出格式',
    title: '完整工作流设计',
    category: '工作流',
    module: '模块 8: 工作流',
    icon: '⚙️',
    tags: ['工作流', '流程', '完整']
  }
]

// 分类列表
const categories = [
  { name: '全部', icon: '📚' },
  { name: '东方美学', icon: '🌸' },
  { name: '西方美学', icon: '🏛️' },
  { name: '剧本创作', icon: '📝' },
  { name: '画面生成', icon: '🖼️' },
  { name: '角色设计', icon: '👤' },
  { name: '构图设计', icon: '📐' },
  { name: '动画制作', icon: '🎞️' },
  { name: '混合媒体', icon: '🎭' },
  { name: '工作流', icon: '⚙️' },
  { name: '电影美学', icon: '🎬' }
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
