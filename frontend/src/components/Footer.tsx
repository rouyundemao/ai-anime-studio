import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1f1a2e] to-gray-900 text-white mt-16">
      {/* 顶部装饰线：品牌渐变 */}
      <div className="h-1 bg-gradient-to-r from-[#8B7AB8] via-[#C2649C] to-[#C23B22]" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌信息 */}
          <div className="md:col-span-1">
            <BrandLogo
              size={36}
              textClassName="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent"
            />
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              专业 AI 动漫制作全流程知识平台。
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mt-2">
              让灵感低语，让 AI 绘梦。
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">v2.0</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">2026 行业标准</span>
            </div>
          </div>

          {/* 学习路径 */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#8B7AB8] to-[#C23B22] rounded" />
              学习路径
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-3">
              <Link to="/module-1" className="text-gray-400 hover:text-white text-sm transition-colors">🎨 艺术理念</Link>
              <Link to="/module-2" className="text-gray-400 hover:text-white text-sm transition-colors">📖 故事创作</Link>
              <Link to="/module-3" className="text-gray-400 hover:text-white text-sm transition-colors">👤 角色设计</Link>
              <Link to="/module-4" className="text-gray-400 hover:text-white text-sm transition-colors">🌍 世界构建</Link>
              <Link to="/module-5" className="text-gray-400 hover:text-white text-sm transition-colors">🖼️ 画面生成</Link>
              <Link to="/module-6" className="text-gray-400 hover:text-white text-sm transition-colors">🎬 动画生成</Link>
              <Link to="/module-7" className="text-gray-400 hover:text-white text-sm transition-colors">✨ 混合媒体</Link>
              <Link to="/module-8" className="text-gray-400 hover:text-white text-sm transition-colors">🚀 发布运营</Link>
            </div>
          </div>

          {/* 资源链接 */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#8B7AB8] to-[#C23B22] rounded" />
              资源中心
            </h3>
            <div className="space-y-2">
              <Link to="/tutorials" className="block text-gray-400 hover:text-white text-sm transition-colors">📚 课程体系</Link>
              <Link to="/prompt-library" className="block text-gray-400 hover:text-white text-sm transition-colors">✨ Prompt 库（250+）</Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white text-sm transition-colors">📦 资源中心</Link>
              <Link to="/tools" className="block text-gray-400 hover:text-white text-sm transition-colors">🛠️ 工具评测</Link>
              <Link to="/workflow" className="block text-gray-400 hover:text-white text-sm transition-colors">📊 生产流程</Link>
            </div>
          </div>

          {/* 适用人群 */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#8B7AB8] to-[#C23B22] rounded" />
              适用人群
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>· 独立动画 / 短片创作者</li>
              <li>· 内容创业 / IP 孵化团队</li>
              <li>· 漫剧 / 微短剧 / MV 制作</li>
              <li>· 角色设计师 / 概念插画师</li>
              <li>· AIGC 工程师 / Prompt 工程师</li>
              <li>· 院校师生 / 自学进阶者</li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} 轻语绘梦 · QingyuDreams. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              东方美学 × 现代数字艺术 · 专业级 AI 动漫制作平台
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
