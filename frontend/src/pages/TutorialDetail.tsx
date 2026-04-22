import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function TutorialDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [tutorial, setTutorial] = useState(null)

  useEffect(() => {
    // 模拟加载内容
    const timer = setTimeout(() => {
      setLoading(false)
      setTutorial({
        id: id,
        title: 'AI 动漫制作全流程实战指南',
        subtitle: '技术与艺术的完美融合',
        duration: '30 分钟',
        category: '核心教程',
        author: 'Sunny'
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">正在加载教程内容...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/tutorials')}
        className="mb-6 flex items-center text-gray-600 hover:text-primary-600"
      >
        ← 返回教程列表
      </button>

      <article className="card p-8 md:p-12">
        <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🎨 艺术驱动 · 技术赋能
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {tutorial.title}
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {tutorial.subtitle}
        </p>

        <div className="flex items-center gap-6 mb-8 text-gray-600 border-b border-gray-200 pb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            📚 {tutorial.category}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            ⏱️ {tutorial.duration}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            ✍️ {tutorial.author}
          </span>
        </div>

        <div className="prose max-w-none prose-headings:text-primary-600 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-primary-600">
          <h2 className="text-3xl font-bold mt-8 mb-6">🎨 核心理念：艺术驱动，技术赋能</h2>
          
          <p>
            AI 动漫创作的本质是<strong>艺术表达</strong>，技术只是实现创意的手段。优秀的 AI 动漫作品需要：
          </p>
          
          <ul className="space-y-3 mb-8">
            <li><strong>艺术性</strong>：故事有情感、画面有美感、节奏有韵律</li>
            <li><strong>技术性</strong>：工具熟练、流程清晰、效率高质</li>
            <li><strong>创新性</strong>：独特风格、个人表达、突破常规</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">💡 记住</h3>
            <p className="text-gray-700">
              <strong>AI 是画笔，你才是艺术家。</strong>
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">🎯 六步全流程详解</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border-l-4 border-primary-500 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">📝 剧本创作</h4>
              <p className="text-sm text-gray-600">讲什么故事？如何打动人心？</p>
            </div>
            <div className="bg-white border-l-4 border-secondary-500 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">👤 角色设计</h4>
              <p className="text-sm text-gray-600">角色长什么样？如何让人记住？</p>
            </div>
            <div className="bg-white border-l-4 border-accent-500 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">🎬 分镜设计</h4>
              <p className="text-sm text-gray-600">故事如何用画面讲述？</p>
            </div>
            <div className="bg-white border-l-4 border-primary-500 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">🖼️ 画面生成</h4>
              <p className="text-sm text-gray-600">如何让静态画面有生命力？</p>
            </div>
            <div className="bg-white border-l-4 border-secondary-500 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">🎵 配音配乐</h4>
              <p className="text-sm text-gray-600">如何用声音塑造灵魂？</p>
            </div>
            <div className="bg-white border-l-4 border-accent-500 p-4 rounded">
              <h4 className="font-bold text-lg mb-2">✂️ 后期剪辑</h4>
              <p className="text-sm text-gray-600">如何让作品完整呈现？</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">📖 教程大纲</h3>
          
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li className="text-lg">
              <strong>剧本创作</strong> - 故事内核、角色塑造、情感曲线、视觉化描写
            </li>
            <li className="text-lg">
              <strong>角色设计</strong> - 角色原型、角色卡制作、风格统一、标志性元素
            </li>
            <li className="text-lg">
              <strong>分镜设计</strong> - 镜头语言、镜头运动、构图法则、视觉节奏
            </li>
            <li className="text-lg">
              <strong>画面生成</strong> - 提示词结构、细节控制、抽卡艺术、画面美感
            </li>
            <li className="text-lg">
              <strong>配音配乐</strong> - 音色选择、情感表达、BGM 选择、音画同步
            </li>
            <li className="text-lg">
              <strong>后期剪辑</strong> - 剪辑节奏、转场技巧、调色艺术、字幕设计
            </li>
          </ol>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">🌟 艺术创作的核心</h3>
            <ul className="space-y-3">
              <li><strong>故事是灵魂</strong> - 再好的技术也无法拯救空洞的故事</li>
              <li><strong>风格是标识</strong> - 找到并坚持你的艺术风格</li>
              <li><strong>创新是生命</strong> - 在传承中创新</li>
              <li><strong>真诚是底色</strong> - 最打动人的永远是真诚</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">🚀 新手进阶路线</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-primary-600">第一阶段：入门（1-2 周）</h4>
              <p className="text-gray-700">目标：完成第一部 1 分钟作品</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-secondary-600">第二阶段：提升（1-2 月）</h4>
              <p className="text-gray-700">目标：完成 3-5 集系列作品</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-accent-600">第三阶段：精进（3-6 月）</h4>
              <p className="text-gray-700">目标：形成个人风格</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-primary-600">第四阶段：创作（6 月+）</h4>
              <p className="text-gray-700">目标：创作有影响力的作品</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">🌈 开始你的创作之旅</h3>
            <p className="text-gray-700 mb-6">
              AI 动漫创作是一场<strong>技术与艺术的对话</strong>。
              技术让你走得更远，艺术让你走得更深。
              不要成为技术的奴隶，要做艺术的主人。
            </p>
            
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-6 rounded-lg text-center">
              <p className="text-xl font-bold">
                用 AI 这支新画笔，画出你心中的世界。
              </p>
              <p className="mt-2 opacity-90">
                重要的不是 AI 能做什么，而是你想表达什么。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            <button 
              onClick={() => navigate('/tutorials')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              返回教程列表
            </button>
            <button className="btn-primary">开始学习</button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default TutorialDetail