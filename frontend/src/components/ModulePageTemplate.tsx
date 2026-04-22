import React, { ReactNode } from 'react'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter } from '../components/AdvancedNavigation'

interface ModulePageProps {
  moduleId: string
  moduleNumber: number
  moduleTitle: string
  moduleSubtitle: string
  moduleIcon: string
  moduleColor: string
  sections: Array<{ id: string; title: string; icon?: string }>
  children: ReactNode
}

/**
 * 统一的模块页面模板组件
 * 提供顶级导航架构：顶部导航、侧边栏、目录导航、底部导航
 */
export function ModulePage({
  moduleId,
  moduleNumber,
  moduleTitle,
  moduleSubtitle,
  moduleIcon,
  moduleColor,
  sections,
  children
}: ModulePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 - 带进度条 */}
      <TopNavigation />
      
      {/* 左侧边栏 - 快速导航 + 键盘快捷键 */}
      <SideNavigation currentId={moduleId} />
      
      {/* 右侧目录 - 页面内章节导航 */}
      <TableOfContents sections={sections} moduleName={moduleTitle} />
      
      {/* 主内容区 */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* 模块标题头 */}
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className={`inline-block bg-gradient-to-r ${moduleColor} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
              {moduleIcon} 模块 {moduleNumber}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {moduleTitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {moduleSubtitle}
            </p>
            <div className="flex items-center gap-6 mt-6 text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                ⏳ 专业级内容
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                📚 一步一步教程
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                🎯 顶级艺术标准
              </span>
            </div>
          </header>

          {/* 内容主体 */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </article>
        
        {/* 底部导航 - 上下模块跳转 + 相关模块推荐 */}
        <ModuleFooter currentId={moduleId} />
      </div>
    </div>
  )
}

/**
 * 使用示例:
 * 
 * function Module1() {
 *   const sections = [
 *     { id: 'core-concept', title: '核心理念', icon: '🎯' },
 *     { id: 'eastern-aesthetics', title: '东方美学体系', icon: '🌸' },
 *     // ... 更多章节
 *   ]
 * 
 *   return (
 *     <ModulePage
 *       moduleId="module1"
 *       moduleNumber={1}
 *       moduleTitle="顶级艺术理念"
 *       moduleSubtitle="东方美学与西方美学融合"
 *       moduleIcon="🎨"
 *       moduleColor="from-primary-500 to-primary-700"
 *       sections={sections}
 *     >
 *       {/* 模块内容 *}/}
 *     </ModulePage>
 *   )
 * }
 */