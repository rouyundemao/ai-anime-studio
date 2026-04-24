import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'
import BrandLogo from './BrandLogo'

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/tutorials', label: '课程体系', icon: '📚' },
  { path: '/prompt-library', label: 'Prompt 库', icon: '✨' },
  { path: '/resources', label: '资源中心', icon: '📦' },
  { path: '/tools', label: '工具评测', icon: '🛠️' },
  { path: '/workflow', label: '生产流程', icon: '📊' },
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
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="px-4 md:px-8 py-3 md:py-4">
        <nav className="flex items-center justify-between max-w-[1800px] mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="轻语绘梦 首页"
          >
            <BrandLogo size={40} />
            <span className="hidden sm:inline ml-2 text-xs text-gray-400 dark:text-gray-500 font-medium tracking-widest uppercase">
              QingyuDreams
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
            
            {/* 搜索栏 */}
            <div className="ml-2">
              <SearchBar />
            </div>
            
            {/* 主题切换按钮 */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="菜单"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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