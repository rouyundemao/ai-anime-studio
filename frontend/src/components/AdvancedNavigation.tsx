import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ModuleProgressButton from './ModuleProgressButton'
import { NavIcon } from './NavIcons'
export { TableOfContents, SectionProgress } from './TableOfContents'

export interface Module {
  id: string
  title: string
  subtitle: string
  path: string
  order: number
  prerequisite: string | null
  next: string | null
  related: string[]
  duration: string
  color: string
  icon: 'palette' | 'book' | 'user' | 'globe' | 'image' | 'film' | 'sparkles' | 'rocket'
}

const modules: Module[] = [
  {
    id: 'module1',
    title: 'Module 1',
    subtitle: '艺术理念',
    path: '/module-1',
    order: 1,
    prerequisite: null,
    next: 'module2',
    related: ['module2', 'module3', 'module4', 'module5', 'module6', 'module7'],
    duration: '深度研习',
    color: 'from-blue-500 to-purple-500',
    icon: 'palette'
  },
  {
    id: 'module2',
    title: 'Module 2',
    subtitle: '故事创作艺术',
    path: '/module-2',
    order: 2,
    prerequisite: 'module1',
    next: 'module3',
    related: ['module1', 'module3', 'module4'],
    duration: '深度创作',
    color: 'from-green-500 to-teal-500',
    icon: 'book'
  },
  {
    id: 'module3',
    title: 'Module 3',
    subtitle: '角色设计体系',
    path: '/module-3',
    order: 3,
    prerequisite: 'module1',
    next: 'module4',
    related: ['module1', 'module2', 'module4'],
    duration: '精细打磨',
    color: 'from-pink-500 to-rose-500',
    icon: 'user'
  },
  {
    id: 'module4',
    title: 'Module 4',
    subtitle: '世界构建方法',
    path: '/module-4',
    order: 4,
    prerequisite: 'module1',
    next: 'module5',
    related: ['module1', 'module2', 'module3'],
    duration: '宏大构建',
    color: 'from-amber-500 to-orange-500',
    icon: 'globe'
  },
  {
    id: 'module5',
    title: 'Module 5',
    subtitle: '画面生成',
    path: '/module-5',
    order: 5,
    prerequisite: 'module4',
    next: 'module6',
    related: ['module1', 'module3', 'module4'],
    duration: '极致追求',
    color: 'from-cyan-500 to-blue-500',
    icon: 'image'
  },
  {
    id: 'module6',
    title: 'Module 6',
    subtitle: '动画生成',
    path: '/module-6',
    order: 6,
    prerequisite: 'module5',
    next: 'module7',
    related: ['module1', 'module3', 'module5'],
    duration: '精细调控',
    color: 'from-violet-500 to-purple-500',
    icon: 'film'
  },
  {
    id: 'module7',
    title: 'Module 7',
    subtitle: '混合媒体艺术',
    path: '/module-7',
    order: 7,
    prerequisite: 'module6',
    next: 'module8',
    related: ['module1', 'module2', 'module3', 'module4', 'module5', 'module6'],
    duration: '艺术探索',
    color: 'from-fuchsia-500 to-pink-500',
    icon: 'sparkles'
  },
  {
    id: 'module8',
    title: 'Module 8',
    subtitle: '完整的 AI 动漫制作流程',
    path: '/module-8',
    order: 8,
    prerequisite: 'module7',
    next: null,
    related: ['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7'],
    duration: '全流程实战',
    color: 'from-amber-500 to-orange-500',
    icon: 'rocket'
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

  const isCompleted = (moduleId: string) => {
    return completedModules.includes(moduleId)
  }

  return { completedModules, markComplete, isCompleted }
}

// 侧边导航组件
interface SideNavigationProps {
  currentId: string
}

export const SideNavigation = ({ currentId }: SideNavigationProps) => {
  const { isCompleted } = useModuleProgress()
  const currentModule = getModule(currentId)

  if (!currentModule) return null

  return (
    <nav
      className="hidden xl:block sticky top-4 rounded-2xl overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
      }}
    >
      {/* 标题 */}
      <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-2">
        <span className="text-[#8B7AB8] font-black text-sm">≡</span>
        <div>
          <div className="text-[10px] text-gray-400 tracking-wider uppercase font-medium leading-none mb-0.5">全部模块</div>
          <div className="text-xs font-bold text-gray-600 leading-none">轻语绘梦 · 课程体系</div>
        </div>
      </div>

      {/* 模块列表 */}
      <ul className="py-1.5">
        {getAllModules().map((module) => {
          const isActive = module.id === currentId
          const isThisCompleted = isCompleted(module.id)

          return (
            <li key={module.id}>
              <Link
                to={module.path}
                className={`flex items-center gap-2.5 px-4 py-2 transition-all duration-150 group ${
                  isActive
                    ? 'bg-[#8B7AB8]/10 text-[#6B5FA0]'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                {/* 左侧活跃条 */}
                <span
                  className="flex-shrink-0 w-0.5 h-5 rounded-full transition-all duration-200"
                  style={{
                    background: isActive ? 'linear-gradient(180deg, #8B7AB8, #C23B22)' : 'transparent'
                  }}
                />

                <span className={`flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'}`}>
                  <NavIcon type={module.icon} size={20} />
                </span>

                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-semibold leading-tight ${isActive ? 'text-[#6B5FA0]' : ''}`}>
                    {module.title}
                  </div>
                  <div className={`text-[10px] truncate leading-tight mt-0.5 ${isActive ? 'text-[#8B7AB8]/70' : 'text-gray-400'}`}>
                    {module.subtitle}
                  </div>
                </div>

                {isThisCompleted ? (
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                    style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                  >✓</span>
                ) : isActive ? (
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8B7AB8]" />
                ) : null}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// 移动端导航栏
export const MobileNavigation = () => {
  const location = useLocation()
  
  // 移动端导航项
  const mobileNavItems = [
    { path: '/', label: '首页', icon: 'home' as const },
    { path: '/tutorials', label: '教程', icon: 'tutorials' as const },
    { path: '/prompt-library', label: 'Prompt', icon: 'sparkles' as const },
    { path: '/resources', label: '资源', icon: 'resources' as const },
    { path: '/tools', label: '工具', icon: 'tools' as const },
    { path: '/workflow', label: '工作流', icon: 'workflow' as const }
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 safe-area-bottom">
      <div className="flex overflow-x-auto hide-scrollbar px-1 py-1.5">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex-shrink-0 flex flex-col items-center px-2 py-1.5 rounded-lg transition-all duration-200 min-w-[56px] ${
                isActive
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <NavIcon type={item.icon} size={20} />
              <span className="text-[9px] font-semibold truncate max-w-full">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

// 面包屑导航
interface BreadcrumbProps {
  currentModule?: Module
}

export const Breadcrumb = ({ currentModule }: BreadcrumbProps) => {
  const location = useLocation()

  if (location.pathname === '/') return null

  return (
    <nav className="flex items-center gap-2 text-sm md:text-base overflow-x-auto hide-scrollbar">
      <Link
        to="/"
        className="text-gray-600 hover:text-primary-600 transition-colors whitespace-nowrap flex items-center gap-1"
      >
        <NavIcon type="home" size={16} /> 首页
      </Link>
      {currentModule && (
        <>
          <span className="text-gray-400">›</span>
          <span className="text-primary-600 font-medium whitespace-nowrap">
            {currentModule.subtitle}
          </span>
        </>
      )}
    </nav>
  )
}

// 上下页导航
interface PageNavigationProps {
  currentModuleId: string
}

export const PageNavigation = ({ currentModuleId }: PageNavigationProps) => {
  const nav = getCurrentModuleNavigation(currentModuleId)

  if (!nav || (!nav.prev && !nav.next)) return null

  return (
    <div className="flex justify-between items-center gap-4 mt-8 pt-8 border-t border-gray-200">
      {nav.prev ? (
        <Link
          to={nav.prev.path}
          className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl transition-all duration-200 border border-gray-200 hover:border-primary-300 hover:shadow-md flex-1"
        >
          <span className="text-xl">←</span>
          <div className="text-left">
            <div className="text-xs text-gray-500">上一章</div>
            <div className="text-sm font-semibold whitespace-nowrap">{nav.prev.subtitle}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nav.next ? (
        <Link
          to={nav.next.path}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex-1 justify-end"
        >
          <div className="text-right">
            <div className="text-xs opacity-90">下一章</div>
            <div className="text-sm font-semibold whitespace-nowrap">{nav.next.subtitle}</div>
          </div>
          <span className="text-xl">→</span>
        </Link>
      ) : (
        <div className="flex-1 text-center text-gray-500 text-sm">
          🎉 已完成全部模块
        </div>
      )}
    </div>
  )
}

// 模块进度显示
export const ModuleProgress = ({ currentModuleId }: { currentModuleId: string }) => {
  const { completedModules } = useModuleProgress()
  const progress = (completedModules.length / modules.length) * 100

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">学习进度</span>
        <span className="text-sm font-bold text-primary-600">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-2">
        已完成 {completedModules.length} / {modules.length} 个模块
      </div>
    </div>
  )
}

export { modules }
export { useModuleProgress }

// 顶部导航栏（面包屑）
interface TopNavigationProps {
  currentModule?: Module
}

export const TopNavigation = ({ currentModule }: TopNavigationProps) => {
  const location = useLocation()

  if (location.pathname === '/') return null

  return (
    <nav className="flex items-center gap-2 text-sm md:text-base overflow-x-auto hide-scrollbar mb-6">
      <Link
        to="/"
        className="text-gray-600 hover:text-primary-600 transition-colors whitespace-nowrap flex items-center gap-1"
      >
        <NavIcon type="home" size={16} /> 首页
      </Link>
      {currentModule && (
        <>
          <span className="text-gray-400">›</span>
          <span className="text-primary-600 font-medium whitespace-nowrap">
            {currentModule.subtitle}
          </span>
        </>
      )}
    </nav>
  )
}

// 模块页脚
interface ModuleFooterProps {
  currentId: string
}

export const ModuleFooter = ({ currentId }: ModuleFooterProps) => {
  const nav = getCurrentModuleNavigation(currentId)

  if (!nav || (!nav.prev && !nav.next)) return null

  // 获取模块信息
  const moduleInfo = modules.find(m => m.id === currentId)
  const moduleId = currentId.replace('module', 'module-') // module1 -> module-1
  const moduleName = moduleInfo?.subtitle || ''

  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors">
      {/* 进度按钮 */}
      {moduleId && moduleName && (
        <div className="mb-6 flex justify-center">
          <ModuleProgressButton moduleId={moduleId} moduleName={moduleName} />
        </div>
      )}
      
      {/* 导航按钮 */}
      <div className="flex justify-between items-center gap-4">
        {nav.prev ? (
          <Link
            to={nav.prev.path}
            className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-primary-300 hover:shadow-md flex-1"
          >
            <span className="text-xl">←</span>
            <div className="text-left">
              <div className="text-xs text-gray-500 dark:text-gray-400">上一章</div>
              <div className="text-sm font-semibold whitespace-nowrap">{nav.prev.subtitle}</div>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nav.next ? (
          <Link
            to={nav.next.path}
            className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex-1 justify-end"
          >
            <div className="text-right">
              <div className="text-xs opacity-90">下一章</div>
              <div className="text-sm font-semibold whitespace-nowrap">{nav.next.subtitle}</div>
            </div>
            <span className="text-xl">→</span>
          </Link>
        ) : (
          <div className="flex-1 text-center text-gray-500 dark:text-gray-400 text-sm">
            🎉 已完成全部模块
          </div>
        )}
      </div>
    </div>
  )
}