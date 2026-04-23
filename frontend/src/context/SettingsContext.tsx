import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface AppSettings {
  theme: 'light' | 'dark'
  fontSize: 'small' | 'medium' | 'large'
  compactMode: boolean
}

export const defaultSettings: AppSettings = {
  theme: 'light',
  fontSize: 'medium',
  compactMode: false,
}

interface SettingsContextType {
  settings: AppSettings
  updateSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void
  resetSettings: () => void
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
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    
    // 紧凑模式
    if (settings.compactMode) {
      document.documentElement.setAttribute('data-compact', 'true')
    } else {
      document.documentElement.removeAttribute('data-compact')
    }
  }, [settings])

  const updateSetting = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    localStorage.removeItem('anime-studio-settings')
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
