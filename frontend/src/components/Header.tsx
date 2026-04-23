import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/tutorials', label: '教程', icon: '📚' },
  { path: '/resources', label: '资源', icon: '📦' },
  { path: '/tools', label: '工具', icon: '🛠️' },
  { path: '/workflow', label: '工作流', icon: '📊' },
]

function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4 md:px-8 py-3 md:py-4">
        <nav className="flex items-center justify-between max-w-[1800px] mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm md:text-base">
              AI
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              AI 幻梦工作室
            </span>
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 lg:px-4 py-2 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30 scale-105'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <span className="flex items-center gap-1 lg:gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              </Link>
            ))}
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="菜单"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>

        {/* 移动端菜单 */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-primary-500 to-accent-500 shadow-md'
                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
                {isActive(item.path) && <span className="ml-auto">●</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header