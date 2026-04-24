import React from 'react'
import { useLearningProgressStore } from '../stores/progressStore'

function ProgressIndicator() {
  const { totalProgress, completedModules, inProgressModules } = useLearningProgressStore()
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">学习进度</h3>
        <span className="text-2xl font-bold text-primary-500">{Math.round(totalProgress)}%</span>
      </div>
      
      {/* 进度条 */}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
          style={{ width: `${totalProgress}%` }}
        />
      </div>
      
      {/* 统计信息 */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
          <div className="text-xl font-bold text-green-500">{completedModules}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">已完成</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
          <div className="text-xl font-bold text-yellow-500">{inProgressModules}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">进行中</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
          <div className="text-xl font-bold text-gray-400">{8 - completedModules - inProgressModules}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">未开始</div>
        </div>
      </div>
      
      {/* 进度徽章 */}
      {completedModules >= 1 && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">成就：</span>
          {completedModules >= 1 && (
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
              🌱 初学者
            </span>
          )}
          {completedModules >= 4 && (
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
              🚀 进阶者
            </span>
          )}
          {completedModules >= 8 && (
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold">
              🏆 大师
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default ProgressIndicator