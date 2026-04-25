import React, { useState, useEffect } from 'react'

interface Section {
  id: string
  title: string
  icon?: string
}

interface TableOfContentsProps {
  sections: Section[]
  moduleName: string
  currentModuleId?: string
}

export const TableOfContents = ({ sections, moduleName }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [readProgress, setReadProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      // 阅读进度
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setReadProgress(docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0)

      // 当前章节
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' })
      setIsMobileOpen(false)
    }
  }

  const activeIndex = sections.findIndex(s => s.id === activeSection)

  return (
    <>
      {/* 移动端目录 */}
      <div className="md:hidden bg-white border border-gray-200 rounded-xl shadow-sm mb-4 overflow-hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#8B7AB8] font-bold text-sm">§</span>
            <span className="font-semibold text-gray-800 text-sm">{moduleName} · 目录</span>
          </div>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isMobileOpen && (
          <div className="px-3 pb-3 space-y-0.5 max-h-[60vh] overflow-y-auto border-t border-gray-100">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#8B7AB8]/12 text-[#6B5FA0]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {section.icon && <span className="opacity-70">{section.icon}</span>}
                    <span className="truncate">{section.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* 桌面端固定目录 */}
      <nav className="hidden md:block sticky top-4">
        {/* 阅读进度条 */}
        <div className="h-0.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${readProgress}%`,
              background: 'linear-gradient(90deg, #8B7AB8, #C2649C, #C23B22)'
            }}
          />
        </div>

        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
          }}
        >
          {/* 标题区 */}
          <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2">
            <span className="text-[#8B7AB8] font-black text-base leading-none">§</span>
            <div>
              <div className="text-[11px] text-gray-400 font-medium tracking-wider uppercase leading-none mb-0.5">本章目录</div>
              <div className="text-xs font-bold text-gray-700 leading-none">{moduleName}</div>
            </div>
            {activeIndex >= 0 && (
              <span className="ml-auto text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-full">
                {activeIndex + 1}/{sections.length}
              </span>
            )}
          </div>

          {/* 目录列表 */}
          <ul className="py-1.5">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-all duration-150 flex items-center gap-2 group ${
                      isActive
                        ? 'text-[#6B5FA0] bg-[#8B7AB8]/08'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50/80'
                    }`}
                  >
                    {/* 左侧活跃指示条 */}
                    <span
                      className="flex-shrink-0 w-0.5 h-3.5 rounded-full transition-all duration-200"
                      style={{
                        background: isActive
                          ? 'linear-gradient(180deg, #8B7AB8, #C23B22)'
                          : 'transparent',
                        opacity: isActive ? 1 : 0
                      }}
                    />

                    {section.icon && (
                      <span className={`text-xs transition-opacity duration-150 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'}`}>
                        {section.icon}
                      </span>
                    )}

                    <span className={`truncate leading-relaxed ${isActive ? 'font-semibold' : ''}`}>
                      {section.title}
                    </span>

                    <span className={`ml-auto text-[10px] text-gray-300 font-normal flex-shrink-0 transition-opacity duration-150 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* 回到顶部 */}
          <div className="px-3 pb-3 pt-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full py-1.5 text-[11px] text-gray-400 hover:text-[#8B7AB8] font-medium rounded-lg hover:bg-[#8B7AB8]/06 transition-all duration-150 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>回到顶部</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export const SectionProgress = ({ sections, currentSectionId }: { sections: Section[]; currentSectionId: string }) => {
  const currentIndex = sections.findIndex(s => s.id === currentSectionId)
  const progress = currentIndex >= 0 ? ((currentIndex + 1) / sections.length) * 100 : 0

  return (
    <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
      <span>进度</span>
      <div className="w-16 bg-gray-100 rounded-full h-1">
        <div
          className="h-1 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #8B7AB8, #C23B22)'
          }}
        />
      </div>
      <span>{currentIndex + 1}/{sections.length}</span>
    </div>
  )
}
