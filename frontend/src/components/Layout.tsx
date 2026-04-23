import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { MobileNavigation } from './AdvancedNavigation'

function Layout() {
  const location = useLocation()
  const [isModulePage, setIsModulePage] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // 检测是否在模块页面
  useEffect(() => {
    const isModule = location.pathname.includes('/module-')
    setIsModulePage(isModule)
  }, [location.pathname])

  // 滚动到顶部按钮显示逻辑
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1a1a1a] dark:to-[#1a1a1a] flex flex-col">
      <Header />
      
      {/* 主内容区域 - 添加移动端底部导航的空间 */}
      <main className={`flex-1 px-4 py-6 md:py-8 ${isModulePage ? 'pb-24 md:pb-8' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>

      <Footer />

      {/* 移动端底部导航 - 仅在模块页面显示 */}
      {isModulePage && <MobileNavigation />}

      {/* 回到顶部按钮 */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 md:bottom-8 right-4 md:right-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="回到顶部"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}

export default Layout