import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  isDark: boolean
  updateIsDark: () => void
}

// 获取系统偏好
const getSystemPreference = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// 获取实际主题状态
const getActualTheme = (theme: Theme): boolean => {
  if (theme === 'system') return getSystemPreference()
  return theme === 'dark'
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      isDark: false,
      
      setTheme: (theme: Theme) => {
        const isDark = getActualTheme(theme)
        set({ theme, isDark })
        
        // 更新 DOM class
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('dark', isDark)
        }
      },
      
      toggleTheme: () => {
        const currentTheme = get().theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        get().setTheme(newTheme)
      },
      
      updateIsDark: () => {
        const { theme } = get()
        const isDark = getActualTheme(theme)
        set({ isDark })
        
        // 更新 DOM class
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('dark', isDark)
        }
      },
    }),
    {
      name: 'ai-anime-theme',
      onRehydrateStorage: () => (state) => {
        // 初始化时应用主题
        if (state) {
          state.updateIsDark()
        }
      },
    }
  )
)

// 监听系统主题变化
if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const state = useThemeStore.getState()
    if (state.theme === 'system') {
      state.updateIsDark()
    }
  })
}