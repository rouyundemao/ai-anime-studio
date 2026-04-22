import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

// 模块定义
const modules = [
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
    description: '建立顶级动漫美学体系，理解东方美学与西方美学的完美融合'
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
    description: '电影级剧本结构设计，人物弧光打造，情感节奏把控'
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
    description: '顶级五官美学体系，发型服装设计，风格统一性控制'
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
    description: '地理生态设定，文明文化创造，历史神话体系'
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
    description: '电影级画面构建，三层光影设计，细节精度控制'
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
    description: '物理真实感动画，情感动画表现，艺术化运动表达'
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
    description: '水墨与数字融合，手绘与AI结合，电影级后期制作'
  }
]

// 获取模块信息
export const getModule = (id) => {
  return modules.find(m => m.id === id)
}

export const getAllModules = () => {
  return modules.sort((a, b) => a.order - b.order)
}

// 当前模块的上下文导航
export const getCurrentModuleNavigation = (currentId) => {
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

// 顶部导航栏
export function TopNavigation() {
  return (
    <div className="bg-gradient-to-r from-primary-700 via-accent-600 to-secondary-700 text-white p-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl">🎨</div>
          <h1 className="text-3xl font-bold">AI 动漫顶级艺术创作体系</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            🏠 主页
          </Link>
          <Link to="/tutorials" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            📚 教程目录
          </Link>
          <Link to="/module-1" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            🎯 模块 1：顶级艺术理念
          </Link>
          <Link to="/module-2" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            📖 模块 2：故事创作艺术
          </Link>
          <Link to="/module-3" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            👤 模块 3：角色设计体系
          </Link>
          <Link to="/module-4" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            🌍 模块 4：世界构建方法
          </Link>
          <Link to="/module-5" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            🖼️ 模块 5：顶级画面生成
          </Link>
          <Link to="/module-6" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            🎬 模块 6：顶级动画生成
          </Link>
          <Link to="/module-7" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            ✨ 模块 7：混合媒体艺术
          </Link>
        </div>
      </div>
    </div>
  )
}

// 模块导航栏
export function ModuleNavigation({ currentId }) {
  const nav = getCurrentModuleNavigation(currentId)
  if (!nav) return null

  return (
    <div className="bg-white border-b border-gray-200 p-6 mb-6 rounded-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6">
          {/* 上一模块 */}
          {nav.prerequisite && (
            <Link to={nav.prerequisite.path} className="flex-1 min-w-[200px] bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors">
              <div className="text-green-700 font-bold mb-1">📚 上一模块</div>
              <div className="text-green-900 font-semibold">{nav.prerequisite.title}</div>
              <div className="text-green-600 text-sm mt-1">{nav.prerequisite.subtitle}</div>
            </Link>
          )}

          {/* 当前模块 */}
          <div className="flex-1 min-w-[200px] bg-gradient-to-r from-primary-500 to-accent-500 p-4 rounded-lg text-white shadow-md">
            <div className="text-white/80 font-bold mb-1">🎯 当前模块</div>
            <div className="text-white font-bold text-lg">{nav.current.title}</div>
            <div className="text-white/90 text-sm mt-1">{nav.current.subtitle}</div>
            <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded text-sm">
              ⏳ {nav.current.duration}
            </div>
          </div>

          {/* 下一模块 */}
          {nav.next && (
            <Link to={nav.next.path} className="flex-1 min-w-[200px] bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-blue-700 font-bold mb-1">🚀 下一模块</div>
              <div className="text-blue-900 font-semibold">{nav.next.title}</div>
              <div className="text-blue-600 text-sm mt-1">{nav.next.subtitle}</div>
            </Link>
          )}
        </div>

        {/* 相关模块 */}
        {nav.related.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-gray-600 font-semibold mb-3">🔗 相关模块</div>
            <div className="flex flex-wrap gap-3">
              {nav.related.map((related, index) => (
                <Link 
                  key={related.id} 
                  to={related.path} 
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// 面包屑导航
export function Breadcrumbs({ currentId }) {
  const nav = getCurrentModuleNavigation(currentId)
  if (!nav) return null

  const Crumb = (module, index, last) => (
    <Fragment key={module.id}>
      {index > 0 && <span className="text-gray-400 mx-2">/</span>}
      <Link 
        to={module.path} 
        className={`${last ? 'text-primary-600 font-bold' : 'text-gray-600 hover:text-primary-600'}`}
      >
        {module.title}
      </Link>
    </Fragment>
  )

  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link to="/" className="text-gray-600 hover:text-primary-600">🏠 首页</Link>
        </li>
        <li>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        <li>
          <Link to="/tutorials" className="text-gray-600 hover:text-primary-600">📚 教程</Link>
        </li>
        <li>
          <span className="text-gray-400 mx-2">/</span>
        </li>
        {nav.prerequisite && (
          <>
            <li>{nav.prerequisite.title}</li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
          </>
        )}
        <li>{nav.current.title}</li>
      </ol>
    </nav>
  )
}