import React from 'react'
import { Link } from 'react-router-dom'
import { useHashScroll } from '../hooks/useHashScroll'

// 资源分类数据
const resourceCategories = [
  {
    id: 'ai-tools',
    title: 'AI 工具资源',
    icon: '🤖',
    color: 'from-blue-500 to-blue-700',
    description: '顶级 AI 创作工具完整指南',
    count: 7,
    items: ['即梦 AI', '可灵 AI', '海螺 AI', 'Seedance 2.0', '通义万相', 'Midjourney', 'Stable Diffusion']
  },
  {
    id: 'materials',
    title: '高质量素材库',
    icon: '🖼️',
    color: 'from-purple-500 to-purple-700',
    description: '精选动漫创作素材资源',
    count: 4,
    items: ['场景素材', '人物素材', '道具素材', '特效素材']
  },
  {
    id: 'audio',
    title: '音频资源库',
    icon: '🎵',
    color: 'from-green-500 to-green-700',
    description: '专业音频制作资源集合',
    count: 4,
    items: ['背景音乐', '音效库', '配音素材', '音乐创作工具']
  },
  {
    id: 'design',
    title: '设计资源库',
    icon: '🎨',
    color: 'from-pink-500 to-pink-700',
    description: '专业设计资源与指南',
    count: 4,
    items: ['配色方案', '字体库', '模板库', '排版指南']
  },
  {
    id: 'prompts',
    title: '提示词库',
    icon: '📝',
    color: 'from-yellow-500 to-yellow-700',
    description: '顶级提示词模板集合',
    count: 4,
    items: ['人物提示词', '场景提示词', '风格提示词', '情感提示词']
  },
  {
    id: 'documents',
    title: '技术文档库',
    icon: '📚',
    color: 'from-indigo-500 to-indigo-700',
    description: '专业技术文档与手册',
    count: 4,
    items: ['AI 工具手册', '视频制作文档', '音频处理文档', '编程技术文档']
  },
  {
    id: 'learning',
    title: '学习资料库',
    icon: '🎓',
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
      {/* 页面标题 */}
      <div className="text-center py-12 bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl">
        <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          📚 专业创作资源库
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          专业创作资源库
        </h1>
        <p className="text-xl text-gray-600 mx-auto">
          七大专业资源分类，每一个都是顶级标准<br />
          <span className="text-gray-500">详细使用指南 + 参数配置 + 案例展示</span>
        </p>
      </div>

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
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
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

      {/* 使用说明 */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">💡 使用方式</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">👆</div>
            <h3 className="font-bold mb-2">点击分类</h3>
            <p className="text-gray-600 text-sm">点击任意资源分类卡片</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="font-bold mb-2">查看详情</h3>
            <p className="text-gray-600 text-sm">查看完整使用指南和案例</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold mb-2">直接使用</h3>
            <p className="text-gray-600 text-sm">根据指南直接应用于创作</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources