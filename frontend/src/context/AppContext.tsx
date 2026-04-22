import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// 模块进度数据类型
interface ModuleProgress {
  completedModules: string[]
  bookmarks: string[]
  lastVisitedModule: string | null
  studyTime: number // 学习时长（分钟）
}

// 上下文类型
interface AppContextType {
  progress: ModuleProgress
  markModuleComplete: (moduleId: string) => void
  addBookmark: (moduleId: string) => void
  removeBookmark: (moduleId: string) => void
  isBookmarked: (moduleId: string) => boolean
  isCompleted: (moduleId: string) => boolean
  updateStudyTime: (minutes: number) => void
  resetProgress: () => void
}

// 创建上下文
const AppContext = createContext<AppContextType | undefined>(undefined)

// Provider 组件
export function AppProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ModuleProgress>(() => {
    const saved = localStorage.getItem('aiAnimeStudioProgress')
    if (saved) {
      return JSON.parse(saved)
    }
    return {
      completedModules: [],
      bookmarks: [],
      lastVisitedModule: null,
      studyTime: 0
    }
  })

  // 保存到 localStorage
  useEffect(() => {
    localStorage.setItem('aiAnimeStudioProgress', JSON.stringify(progress))
  }, [progress])

  // 标记模块完成
  const markModuleComplete = (moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId]
    }))
  }

  // 添加书签
  const addBookmark = (moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(moduleId)
        ? prev.bookmarks
        : [...prev.bookmarks, moduleId]
    }))
  }

  // 移除书签
  const removeBookmark = (moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.filter(id => id !== moduleId)
    }))
  }

  // 检查是否已收藏
  const isBookmarked = (moduleId: string) => {
    return progress.bookmarks.includes(moduleId)
  }

  // 检查是否已完成
  const isCompleted = (moduleId: string) => {
    return progress.completedModules.includes(moduleId)
  }

  // 更新学习时长
  const updateStudyTime = (minutes: number) => {
    setProgress(prev => ({
      ...prev,
      studyTime: prev.studyTime + minutes
    }))
  }

  // 重置进度
  const resetProgress = () => {
    setProgress({
      completedModules: [],
      bookmarks: [],
      lastVisitedModule: null,
      studyTime: 0
    })
    localStorage.removeItem('aiAnimeStudioProgress')
  }

  const value = {
    progress,
    markModuleComplete,
    addBookmark,
    removeBookmark,
    isBookmarked,
    isCompleted,
    updateStudyTime,
    resetProgress
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Hook 用于访问上下文
export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}