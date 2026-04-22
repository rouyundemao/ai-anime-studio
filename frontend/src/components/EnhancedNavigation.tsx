import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 模块数据（用于搜索）
const modules = [
  { id: 'module1', title: '顶级艺术理念', subtitle: '东方美学与西方美学融合', path: '/module-1' },
  { id: 'module2', title: '故事创作艺术', subtitle: '电影级剧本结构与人物弧光', path: '/module-2' },
  { id: 'module3', title: '角色设计体系', subtitle: '顶级五官美学与风格统一', path: '/module-3' },
  { id: 'module4', title: '世界构建方法', subtitle: '地理生态与文明体系', path: '/module-4' },
  { id: 'module5', title: '顶级画面生成', subtitle: '电影级画面与三层光影', path: '/module-5' },
  { id: 'module6', title: '顶级动画生成', subtitle: '物理真实感与情感表现', path: '/module-6' },
  { id: 'module7', title: '混合媒体艺术', subtitle: '水墨数字融合与电影后期', path: '/module-7' },
  { id: 'module8', title: '六步标准化工作流', subtitle: '完整的 AI 动漫制作流程', path: '/module-8' }
]

// 顶部搜索栏组件
export function TopSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults([])
      setShowResults(false)
      return
    }

    const query = searchQuery.toLowerCase()
    const results = modules.filter(module => 
      module.title.toLowerCase().includes(query) || 
      module.subtitle.toLowerCase().includes(query)
    )
    setFilteredResults(results)
    setShowResults(true)
  }, [searchQuery])

  const handleSelect = (path: string) => {
    setSearchQuery('')
    setFilteredResults([])
    setShowResults(false)
    window.location.href = path
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="搜索模块、主题或关键词..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white/50 transition-all duration-300"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
          🔍
        </span>
      </div>
      
      {/* 搜索结果下拉 */}
      {showResults && filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
          {filteredResults.map((module) => (
            <button
              key={module.id}
              onClick={() => handleSelect(module.path)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-start gap-3"
            >
              <span className="text-2xl mt-1">{module.id.replace('module', '📷')}</span>
              <div>
                <div className="font-semibold text-gray-800">{module.title}</div>
                <div className="text-sm text-gray-500">{module.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// 顶部导航增强版
export function EnhancedTopNavigation() {
  return (
    <div className="bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-700 text-white shadow-lg sticky top-0 z-50">
      {/* 进度条 */}
      <div className="h-1 bg-white/20">
        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-500" style={{ width: '35%' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-3xl">🎨</div>
            <div>
              <h1 className="text-xl font-bold">AI 动漫顶级艺术创作体系</h1>
              <p className="text-xs text-white/70">艺术驱动，技术赋能</p>
            </div>
          </Link>
          
          {/* 搜索栏 */}
          <div className="hidden md:block">
            <TopSearchBar />
          </div>
          
          {/* 快捷链接 */}
          <div className="flex items-center gap-2">
            <Link to="/tutorials" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm">
              📚 全部模块
            </Link>
            <Link to="/settings" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm">
              ⚙️ 设置
            </Link>
          </div>
        </div>
        
        {/* 移动端搜索栏 */}
        <div className="md:hidden mt-3">
          <TopSearchBar />
        </div>
      </div>
    </div>
  )
}