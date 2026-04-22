import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

// 模块定义 - 完整的 7 个模块
export const modules = [
  {
    id: 'module1',
    title: '顶级艺术理念',
    subtitle: '东方美学与西方美学融合',
    path: '/module-1',
    order: 1,
    prerequisite: null,
    next: 'module2',
    related: [],
    duration: '深度研习',
    color: 'from-primary-500 to-primary-700',
    icon: '🎨'
  },
  {
    id: 'module2',
    title: '故事创作艺术',
    subtitle: '电影级剧本结构与人物弧光',
    path: '/module-2',
    order: 2,
    prerequisite: 'module1',
    next: 'module3',
    related: ['module1'],
    duration: '深度创作',
    color: 'from-purple-500 to-pink-500',
    icon: '📖'
  },
  {
    id: 'module3',
    title: '角色设计体系',
    subtitle: '顶级五官美学与风格统一',
    path: '/module-3',
    order: 3,
    prerequisite: 'module2',
    next: 'module4',
    related: ['module1', 'module2'],
    duration: '精细打磨',
    color: 'from-blue-500 to-cyan-500',
    icon: '👤'
  },
  {
    id: 'module4',
    title: '世界构建方法',
    subtitle: '地理生态与文明体系',
    path: '/module-4',
    order: 4,
    prerequisite: 'module3',
    next: 'module5',
    related: ['module1', 'module3'],
    duration: '宏大构建',
    color: 'from-green-500 to-emerald-500',
    icon: '🌍'
  },
  {
    id: 'module5',
    title: '顶级画面生成',
    subtitle: '电影级画面与三层光影',
    path: '/module-5',
    order: 5,
    prerequisite: 'module4',
    next: 'module6',
    related: ['module1', 'module3', 'module4'],
    duration: '极致追求',
    color: 'from-red-500 to-orange-500',
    icon: '🖼️'
  },
  {
    id: 'module6',
    title: '顶级动画生成',
    subtitle: '物理真实感与情感表现',
    path: '/module-6',
    order: 6,
    prerequisite: 'module5',
    next: 'module7',
    related: ['module1', 'module5'],
    duration: '精细调控',
    color: 'from-purple-500 to-indigo-500',
    icon: '🎬'
  },
  {
    id: 'module7',
    title: '混合媒体艺术',
    subtitle: '水墨数字融合与电影后期',
    path: '/module-7',
    order: 7,
    prerequisite: 'module6',
    next: 'module8',
    related: ['module1', 'module5', 'module6'],
    duration: '艺术探索',
    color: 'from-cyan-500 to-teal-500',
    icon: '✨'
  },
  {
    id: 'module8',
    title: '六步标准化工作流',
    subtitle: '完整的 AI 动漫制作流程',
    path: '/module-8',
    order: 8,
    prerequisite: 'module7',
    next: null,
    related: ['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7'],
    duration: '全流程实战',
    color: 'from-amber-500 to-orange-500',
    icon: '📊'
  }
]

// 获取模块信息
export const getModule = (id: string) => {
  return modules.find(m => m.id === id)
}

export const getAllModules = () => {
  return modules.sort((a, b) => a.order - b.order)
}

// 获取当前模块的上下文导航
export const getCurrentModuleNavigation = (currentId: string) => {
  const currentModule = getModule(currentId)
  if (!currentModule) return null

  const prevModule = modules.find(m => m.order === currentModule.order - 1)
  const nextModule = modules.find(m => m.order === currentModule.order + 1)
  const prerequisiteModule = currentModule.prerequisite ? getModule(currentModule.prerequisite) : null

  return {
    current: currentModule,
    prev: prevModule,
    next: nextModule,
    prerequisite: prerequisiteModule,
    related: currentModule.related.map(id => getModule(id)).filter(Boolean)
  }
}

// 模块进度追踪
const useModuleProgress = () => {
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    const saved = localStorage.getItem('moduleProgress')
    return saved ? JSON.parse(saved) : []
  })

  const markComplete = (moduleId: string) => {
    const updated = [...completedModules, moduleId]
    setCompletedModules(updated)
    localStorage.setItem('moduleProgress', JSON.stringify(updated))
  }

  const resetProgress = () => {
    setCompletedModules([])
    localStorage.removeItem('moduleProgress')
  }

  const progress = Math.round((completedModules.length / modules.length) * 100)

  return { completedModules, markComplete, resetProgress, progress }
}

// 顶部导航栏
export function TopNavigation() {
  const { progress } = useModuleProgress()

  return (
    <div className="bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-700 text-white sticky top-0 z-50 shadow-lg">
      {/* 进度条 */}
      <div className="h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-3xl">🎨</div>
            <div>
              <h1 className="text-xl font-bold">AI 动漫顶级艺术创作体系</h1>
              <p className="text-xs text-white/70">学习进度：{progress}%</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link to="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm">
              🏠 主页
            </Link>
            <Link to="/tutorials" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm">
              📚 全部模块
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// 侧边快速导航 - 简化版（点击导航）
export function SideNavigation({ currentId }: { currentId: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { completedModules, markComplete } = useModuleProgress()
  
  // 根据当前路由自动获取模块 ID
  const getCurrentModuleIdFromPath = () => {
    const path = location.pathname
    const module = modules.find(m => m.path === path)
    return module ? module.id : currentId
  }
  
  const actualCurrentId = getCurrentModuleIdFromPath()
  const nav = getCurrentModuleNavigation(actualCurrentId)

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur rounded-r-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="p-3 border-b border-gray-200 bg-gray-50">
          <div className="text-xs font-bold text-gray-600 text-center">快捷导航</div>
        </div>
        
        {/* 全部模块快速跳转 */}
        <div className="py-2 px-3 border-b border-gray-200 max-h-[50vh] overflow-y-auto">
          <div className="text-xs font-semibold text-gray-600 mb-2">模块直达</div>
          <div className="grid grid-cols-1 gap-1">
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => navigate(module.path)}
                className={`px-2 py-1.5 rounded text-xs text-left transition-colors truncate ${
                  module.id === actualCurrentId
                    ? 'bg-primary-600 text-white font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="mr-1 text-gray-400">{index + 1}.</span>
                {module.title.substring(0, 6)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="py-2">
          {/* 上一个模块 */}
          {nav?.prev ? (
            <button
              onClick={() => navigate(nav.prev.path)}
              className="w-full px-3 py-2 text-left hover:bg-green-50 transition-colors group"
            >
              <div className="text-xs text-green-600 font-semibold">← 上一个</div>
              <div className="text-sm text-gray-700 truncate group-hover:text-green-700">
                {nav.prev.title}
              </div>
            </button>
          ) : (
            <div className="px-3 py-2 text-gray-400 text-sm">已是第一个</div>
          )}

          {/* 下一个模块 */}
          {nav?.next ? (
            <button
              onClick={() => navigate(nav.next.path)}
              className="w-full px-3 py-2 text-left hover:bg-blue-50 transition-colors group"
            >
              <div className="text-xs text-blue-600 font-semibold">下一个 →</div>
              <div className="text-sm text-gray-700 truncate group-hover:text-blue-700">
                {nav.next.title}
              </div>
            </button>
          ) : (
            <div className="px-3 py-2 text-gray-400 text-sm">已是最后一个</div>
          )}
        </div>

        {/* 完成标记 */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => actualCurrentId && markComplete(actualCurrentId)}
            disabled={completedModules.includes(actualCurrentId)}
            className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
              completedModules.includes(actualCurrentId)
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white'
            }`}
          >
            {completedModules.includes(actualCurrentId) ? '✓ 已完成' : '○ 标记完成'}
          </button>
        </div>
      </div>
    </div>
  )
}

// 模块内目录导航 - 显示当前模块名称
export function TableOfContents({ sections, moduleName }: { 
  sections: Array<{id: string, title: string, icon?: string}>
  moduleName: string
}) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs max-h-[70vh] overflow-y-auto">
        <div className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2 sticky top-0 bg-white pb-2 border-b border-gray-100">
          <span>📑</span> 
          <span className="truncate">{moduleName} · 目录</span>
        </div>
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                activeSection === section.id
                  ? 'bg-primary-100 text-primary-700 font-semibold border-l-2 border-primary-500'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={section.title}
            >
              <span className="mr-2">{section.icon || '•'}</span>
              <span className="truncate">{section.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// 底部导航栏
export function ModuleFooter({ currentId }: { currentId: string }) {
  const navigate = useNavigate()
  const nav = getCurrentModuleNavigation(currentId)

  if (!nav) return null

  return (
    <footer className="mt-16 pt-8 border-t-2 border-gray-200">
      <div className="flex justify-between items-center gap-4">
        {nav.prev ? (
          <button
            onClick={() => navigate(nav.prev.path)}
            className="flex-1 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-primary-400 text-gray-700 hover:text-primary-600 font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-left group"
          >
            <div className="text-xs text-gray-500 mb-1">← 上一模块</div>
            <div className="font-bold group-hover:text-primary-600">{nav.prev.title}</div>
            <div className="text-xs text-gray-500">{nav.prev.subtitle}</div>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        <Link
          to="/tutorials"
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg"
        >
          📚 模块列表
        </Link>

        {nav.next ? (
          <button
            onClick={() => navigate(nav.next.path)}
            className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-right group"
          >
            <div className="text-xs text-white/70 mb-1">下一模块 →</div>
            <div className="font-bold">{nav.next.title}</div>
            <div className="text-xs text-white/70">{nav.next.subtitle}</div>
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {/* 相关模块 */}
      {nav.related.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-gray-600 font-semibold mb-4 text-center">🔗 相关模块推荐</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nav.related.map((related) => (
              <Link
                key={related.id}
                to={related.path}
                className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors group"
              >
                <div className="text-2xl mb-2">{related.icon}</div>
                <div className="font-bold text-gray-800 group-hover:text-primary-600">{related.title}</div>
                <div className="text-sm text-gray-500">{related.subtitle}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 快捷键提示 */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <div className="text-sm font-semibold text-gray-600 mb-3">⌨️ 专业快捷键</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-500">
          <div className="bg-gray-50 p-2 rounded">
            <span className="bg-gray-200 px-2 py-1 rounded mr-2">Alt + ←</span>
            上一模块
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <span className="bg-gray-200 px-2 py-1 rounded mr-2">Alt + →</span>
            下一模块
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <span className="bg-gray-200 px-2 py-1 rounded mr-2">Alt + 1-7</span>
            直达模块
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <span className="bg-gray-200 px-2 py-1 rounded mr-2">Alt + C</span>
            标记完成
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <span className="bg-gray-200 px-2 py-1 rounded mr-2">Alt + M</span>
            模块列表
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <span className="bg-gray-200 px-2 py-1 rounded mr-2">Alt + H</span>
            返回首页
          </div>
        </div>
      </div>
    </footer>
  )
}