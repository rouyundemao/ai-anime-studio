import React from 'react'
import { useThemeStore } from '../stores/themeStore'

function ThemeToggle() {
  const { theme, isDark, setTheme } = useThemeStore()
  
  const themeOptions = [
    { value: 'light', icon: '☀️', label: '浅色' },
    { value: 'dark', icon: '🌙', label: '深色' },
    { value: 'system', icon: '💻', label: '跟随系统' },
  ] as const
  
  return (
    <div className="relative inline-flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-colors">
      {themeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`
            inline-flex items-center justify-center
            w-8 h-8 rounded-full
            transition-all duration-200
            ${theme === option.value
              ? 'bg-white dark:bg-gray-600 shadow-md text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }
          `}
          title={option.label}
          aria-label={`切换到${option.label}模式`}
        >
          <span className="text-sm">{option.icon}</span>
        </button>
      ))}
      
      {/* 当前状态指示器 */}
      <div className="absolute -right-2 -top-2 flex items-center gap-1">
        <span className="text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full shadow">
          {isDark ? '深色' : '浅色'}
        </span>
      </div>
    </div>
  )
}

export default ThemeToggle