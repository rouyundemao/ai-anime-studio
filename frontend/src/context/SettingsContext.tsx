import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface AppSettings {
  theme: 'light' | 'dark' | 'anime'
  contentFilter: 'all' | 'tutorials' | 'resources' | 'tools'
  notifications: boolean
  contentFormat: 'mdx' | 'markdown' | 'html'
  fontSize: 'small' | 'medium' | 'large'
  language: 'zh-CN' | 'zh-TW' | 'en'
  autoSave: boolean
  compactMode: boolean
}

export const defaultSettings: AppSettings = {
  theme: 'light',
  contentFilter: 'all',
  notifications: true,
  contentFormat: 'mdx',
  fontSize: 'medium',
  language: 'zh-CN',
  autoSave: true,
  compactMode: false,
}

interface SettingsContextType {
  settings: AppSettings
  updateSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void
  resetSettings: () => void
  exportSettings: () => void
  importSettings: () => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings)

  useEffect(() => {
    const saved = localStorage.getItem('anime-studio-settings')
    if (saved) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(saved) })
      } catch {
        setSettings(defaultSettings)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('anime-studio-settings', JSON.stringify(settings))
    
    // 应用字体大小
    const root = document.documentElement
    root.style.fontSize = settings.fontSize === 'small' ? '14px' : settings.fontSize === 'large' ? '18px' : '16px'
    
    // 应用主题
    if (settings.theme === 'dark') {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('anime-theme')
    } else if (settings.theme === 'anime') {
      document.body.classList.add('anime-theme')
      document.body.classList.remove('dark-theme')
    } else {
      document.body.classList.remove('dark-theme', 'anime-theme')
    }
    
    // 应用紧凑模式
    if (settings.compactMode) {
      document.body.classList.add('compact-mode')
    } else {
      document.body.classList.remove('compact-mode')
    }
  }, [settings])

  const updateSetting = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    localStorage.removeItem('anime-studio-settings')
  }

  const exportSettings = () => {
    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'anime-studio-settings.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importSettings = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (ev) => {
        try {
          const imported = JSON.parse(ev.target?.result as string)
          setSettings({ ...defaultSettings, ...imported })
        } catch {
          alert('导入失败：文件格式不正确')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, resetSettings, exportSettings, importSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
