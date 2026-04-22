import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页' },
  { path: '/tutorials', label: '教程' },
  { path: '/resources', label: '资源' },
  { path: '/tools', label: '工具' },
]

function Header() {
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo-icon.png" alt="" className="h-8 md:h-10 w-8 md:w-10 rounded-full" />
            <span className="text-2xl md:text-3xl font-bold text-red-600">AI 幻梦工作室</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/30 scale-105'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
