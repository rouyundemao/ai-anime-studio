import React from 'react'
import { useApp } from '../context/AppContext'

// 学习统计面板组件
export function StudyStatsPanel() {
  const { progress } = useApp()
  
  // 计算完成率
  const totalModules = 7
  const completedCount = progress.completedModules.length
  const completionRate = Math.round((completedCount / totalModules) * 100)
  
  // 计算学习时长（小时）
  const studyHours = (progress.studyTime / 60).toFixed(1)
  
  // 获取成就徽章
  const getAchievements = () => {
    const achievements = []
    
    if (completedCount >= 1) achievements.push({ name: '启程', icon: '🚀', color: 'text-green-500' })
    if (completedCount >= 3) achievements.push({ name: '进阶', icon: '📈', color: 'text-blue-500' })
    if (completedCount >= 5) achievements.push({ name: '大师', icon: '👑', color: 'text-purple-500' })
    if (completedCount === 7) achievements.push({ name: '宗师', icon: '🏆', color: 'text-gold-500' })
    
    return achievements
  }

  return (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">📊 学习统计</h3>
      
      {/* 进度条 */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>完成进度</span>
          <span>{completionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
      
      {/* 统计数据 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-primary-600">{completedCount}</div>
          <div className="text-xs text-gray-600">已完成</div>
        </div>
        <div className="bg-white p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-accent-600">{studyHours}h</div>
          <div className="text-xs text-gray-600">学习时长</div>
        </div>
      </div>
      
      {/* 成就徽章 */}
      {getAchievements().length > 0 && (
        <div className="mt-4">
          <div className="text-sm text-gray-600 mb-2">🏅 成就徽章</div>
          <div className="flex flex-wrap gap-2">
            {getAchievements().map((achievement, index) => (
              <span 
                key={index}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${achievement.color} bg-white`}
              >
                <span>{achievement.icon}</span>
                <span>{achievement.name}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}