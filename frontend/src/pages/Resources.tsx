import React from 'react'
import { Link } from 'react-router-dom'
import { useHashScroll } from '../hooks/useHashScroll'
import BrandLogo from '../components/BrandLogo'
import { NavIcon } from '../components/NavIcons'

// 资源分类数据
type ResourceIcon = 'tools' | 'image' | 'headphone' | 'palette' | 'pencil' | 'book' | 'target'
const resourceCategories: { id: string; title: string; icon: ResourceIcon; color: string; description: string; count: number; items: string[] }[] = [
  {
    id: 'ai-tools',
    title: 'AI 工具资源',
    icon: 'tools',
    color: 'from-blue-500 to-blue-700',
    description: '顶级 AI 创作工具完整指南',
    count: 7,
    items: ['即梦 AI', '可灵 AI', '海螺 AI', 'Seedance 2.0', '通义万相', 'Midjourney', 'Stable Diffusion']
  },
  {
    id: 'materials',
    title: '高质量素材库',
    icon: 'image',
    color: 'from-purple-500 to-purple-700',
    description: '精选动漫创作素材资源',
    count: 4,
    items: ['场景素材', '人物素材', '道具素材', '特效素材']
  },
  {
    id: 'audio',
    title: '音频资源库',
    icon: 'headphone',
    color: 'from-green-500 to-green-700',
    description: '专业音频制作资源集合',
    count: 4,
    items: ['背景音乐', '音效库', '配音素材', '音乐创作工具']
  },
  {
    id: 'design',
    title: '设计资源库',
    icon: 'palette',
    color: 'from-pink-500 to-pink-700',
    description: '专业设计资源与指南',
    count: 4,
    items: ['配色方案', '字体库', '模板库', '排版指南']
  },
  {
    id: 'prompts',
    title: '提示词库',
    icon: 'pencil',
    color: 'from-yellow-500 to-yellow-700',
    description: '顶级提示词模板集合',
    count: 4,
    items: ['人物提示词', '场景提示词', '风格提示词', '情感提示词']
  },
  {
    id: 'documents',
    title: '技术文档库',
    icon: 'book',
    color: 'from-indigo-500 to-indigo-700',
    description: '专业技术文档与手册',
    count: 4,
    items: ['AI 工具手册', '视频制作文档', '音频处理文档', '编程技术文档']
  },
  {
    id: 'learning',
    title: '学习资料库',
    icon: 'target',
    color: 'from-red-500 to-red-700',
    description: '系统化学习资料集合',
    count: 4,
    items: ['艺术史资料', '电影语言资料', '动漫创作资料', 'AI 技术资料']
  }
]

function Resources() {
  useHashScroll()
  
  return (
    <div className="space-y-12">
      {/* 页头 */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7AB8]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C23B22]/10 rounded-full blur-3xl" />

        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#8B7AB8]/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BrandLogo size={22} showText={false} />
            <span className="text-gray-700">资源中心 · Resources</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            专业创作资源库
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            把做好一部 AI 动漫需要的一切，按分类整理好放在这里。<br className="hidden md:block" />
            <span className="text-gray-500">每条资源都附带使用指南、参数配置、成品案例。</span>
          </p>
        </div>
      </section>

      {/* 资源分类网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resourceCategories.map(category => (
          <Link
            key={category.id}
            to={`/resources/${category.id}`}
            data-hash={category.id}
            className="card overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          >
            {/* 头部 */}
            <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <NavIcon type={category.icon} size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm opacity-90">{category.description}</p>
            </div>
            
            {/* 内容 */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {category.count} 个资源
                </span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
              
              {/* 子项目列表 */}
              <div className="space-y-2">
                {category.items.slice(0, 3).map(item => (
                  <div key={item} className="flex items-center text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    {item}
                  </div>
                ))}
                {category.items.length > 3 && (
                  <div className="text-gray-500 text-sm">
                    +{category.items.length - 3} 更多
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 使用方式 */}
      <section className="bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB] rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-gray-800 flex items-center justify-center gap-2"><NavIcon type="sparkles" size={24} /> 如何高效使用资源中心</h2>
        <p className="text-center text-gray-500 mb-8">三步把资源变成你的生产力</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B7AB8] to-[#5B4B89] flex items-center justify-center text-2xl text-white mb-4">1</div>
            <h3 className="font-bold mb-2 text-gray-800">先定场景</h3>
            <p className="text-gray-600 text-sm leading-relaxed">从你要做的内容（角色设计 / 场景出图 / 视频片段）出发，再进入对应分类</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C2649C] to-[#8B3A6E] flex items-center justify-center text-2xl text-white mb-4">2</div>
            <h3 className="font-bold mb-2 text-gray-800">复制即用</h3>
            <p className="text-gray-600 text-sm leading-relaxed">所有 Prompt / 参数 / 命令都支持一键复制，到工具里直接粘贴即可</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C23B22] to-[#8A1F0E] flex items-center justify-center text-2xl text-white mb-4">3</div>
            <h3 className="font-bold mb-2 text-gray-800">记录变体</h3>
            <p className="text-gray-600 text-sm leading-relaxed">把生效的修改版本存进自己的 Notion / Prompt 库，沉淀属于你的创作资产</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources