import React, { useEffect } from 'react'
import { useLearningProgressStore } from '../stores/progressStore'

interface ModuleProgressButtonProps {
  moduleId: string
  moduleName: string
}

function ModuleProgressButton({ moduleId, moduleName }: ModuleProgressButtonProps) {
  const { getModuleStatus, updateModuleProgress, completeModule, resetModule } = useLearningProgressStore()
  const status = getModuleStatus(moduleId)
  
  // 自动标记为进行中（当用户访问模块时）
  useEffect(() => {
    if (!status || status.status === 'not-started') {
      updateModuleProgress(moduleId, moduleName, 10)
    }
  }, [moduleId, moduleName, status, updateModuleProgress])
  
  const handleComplete = () => {
    completeModule(moduleId, moduleName)
  }
  
  const handleReset = () => {
    resetModule(moduleId)
  }
  
  const progress = status?.progress || 0
  const isCompleted = progress >= 100
  
  return (
    <div className="flex items-center gap-2">
      {/* 进度显示 */}
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {isCompleted ? '已完成' : `进度 ${Math.round(progress)}%`}
        </span>
      </div>
      
      {/* 完成/重置按钮 */}
      {!isCompleted ? (
        <button
          onClick={handleComplete}
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-semibold transition-colors"
        >
          ✓ 标记完成
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold transition-colors"
        >
          ↻ 重置进度
        </button>
      )}
    </div>
  )
}

export default ModuleProgressButton