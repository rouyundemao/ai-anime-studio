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

export const TableOfContents = ({ sections, moduleName, currentModuleId }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // 检测当前可见的章节
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

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
    handleScroll() // 初始检查

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // 考虑固定导航栏的高度
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
      setIsMobileOpen(false)
    }
  }

  return (
    <>
      {/* 移动端标题栏 */}
      <div className="md:hidden bg-white border border-gray-200 rounded-xl p-3 mb-4 shadow-sm">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <span className="font-semibold text-gray-800 text-sm">{moduleName} 目录</span>
          </div>
          <span className={`transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* 移动端展开的目录 */}
        {isMobileOpen && (
          <div className="mt-3 space-y-1 max-h-[60vh] overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  {section.icon && <span className="text-base">{section.icon}</span>}
                  <span className="truncate">{section.title}</span>
                  {activeSection === section.id && <span className="ml-auto">●</span>}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 桌面端固定目录 */}
      <nav className="hidden md:block bg-white border border-gray-200 rounded-2xl p-4 shadow-sm sticky top-4">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <span className="text-xl">📖</span>
          <h3 className="text-sm font-bold text-gray-800">{moduleName}</h3>
        </div>

        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id

            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {section.icon && <span className="text-base">{section.icon}</span>}
                    <span className="truncate">{section.title}</span>
                    {isActive && <span className="ml-auto text-xs">●</span>}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* 快速回到顶部 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full mt-4 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>⬆️</span>
          <span>回到顶部</span>
        </button>
      </nav>
    </>
  )
}

// 章节进度指示器
export const SectionProgress = ({ sections, currentSectionId }: { sections: Section[]; currentSectionId: string }) => {
  const currentIndex = sections.findIndex(s => s.id === currentSectionId)
  const progress = currentIndex >= 0 ? ((currentIndex + 1) / sections.length) * 100 : 0

  return (
    <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
      <span>阅读进度</span>
      <div className="w-20 bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-gradient-to-r from-primary-500 to-accent-500 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span>{currentIndex + 1}/{sections.length}</span>
    </div>
  )
}