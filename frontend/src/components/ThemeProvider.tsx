import React, { useEffect } from 'react'
import { useThemeStore } from '../stores/themeStore'

interface ThemeProviderProps {
  children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const { updateIsDark } = useThemeStore()
  
  useEffect(() => {
    // 页面加载时初始化主题
    updateIsDark()
    
    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const state = useThemeStore.getState()
      if (state.theme === 'system') {
        state.updateIsDark()
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [updateIsDark])
  
  return <>{children}</>
}

export default ThemeProvider