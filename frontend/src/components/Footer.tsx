import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white mt-16">
      {/* 顶部装饰线 */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 品牌信息 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                AI
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI 幻梦工作室
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              专注于 AI 动漫创作全流程教学，从艺术理念到混合媒体，系统化学习，打造专业级作品。
            </p>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">快速导航</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/module-1" className="text-gray-400 hover:text-white text-sm transition-colors">
                🎨 艺术理念
              </Link>
              <Link to="/module-2" className="text-gray-400 hover:text-white text-sm transition-colors">
                📖 故事创作
              </Link>
              <Link to="/module-3" className="text-gray-400 hover:text-white text-sm transition-colors">
                👤 角色设计
              </Link>
              <Link to="/module-4" className="text-gray-400 hover:text-white text-sm transition-colors">
                🌍 世界构建
              </Link>
              <Link to="/module-5" className="text-gray-400 hover:text-white text-sm transition-colors">
                🖼️ 画面生成
              </Link>
              <Link to="/module-6" className="text-gray-400 hover:text-white text-sm transition-colors">
                🎬 动画生成
              </Link>
              <Link to="/module-7" className="text-gray-400 hover:text-white text-sm transition-colors">
                ✨ 混合媒体
              </Link>
              <Link to="/workflow" className="text-gray-400 hover:text-white text-sm transition-colors">
                📊 工作流
              </Link>
            </div>
          </div>

          {/* 资源链接 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">资源中心</h3>
            <div className="space-y-2">
              <Link to="/tutorials" className="block text-gray-400 hover:text-white text-sm transition-colors">
                📚 完整教程体系
              </Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white text-sm transition-colors">
                📦 资源库
              </Link>
              <Link to="/tools" className="block text-gray-400 hover:text-white text-sm transition-colors">
                🛠️ 工具推荐
              </Link>
              <Link to="/settings" className="block text-gray-400 hover:text-white text-sm transition-colors">
                ⚙️ 设置
              </Link>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} AI 幻梦工作室. 用心创作，用 AI 实现梦想。
            </p>
            <p className="text-gray-600 text-xs">
              基于东方美学 × 现代数字艺术 · 专业级 AI 动漫创作平台
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer