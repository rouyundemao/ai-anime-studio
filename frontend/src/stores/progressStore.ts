import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ModuleProgress {
  moduleId: string
  moduleName: string
  status: 'not-started' | 'in-progress' | 'completed'
  lastAccessed?: string
  progress: number // 0-100
}

interface LearningProgressState {
  modules: Record<string, ModuleProgress>
  totalProgress: number
  completedModules: number
  inProgressModules: number
  
  // 操作
  updateModuleProgress: (moduleId: string, moduleName: string, progress: number) => void
  completeModule: (moduleId: string, moduleName: string) => void
  resetModule: (moduleId: string) => void
  resetAll: () => void
  getModuleStatus: (moduleId: string) => ModuleProgress | undefined
}

// 模块列表
const MODULES = [
  { id: 'module-1', name: '创意构思与策划' },
  { id: 'module-2', name: '故事创作艺术' },
  { id: 'module-3', name: '角色设计体系' },
  { id: 'module-4', name: '世界构建方法' },
  { id: 'module-5', name: '顶级画面生成' },
  { id: 'module-6', name: '顶级动画生成' },
  { id: 'module-7', name: '混合媒体艺术' },
  { id: 'module-8', name: '六步标准化工作流' },
]

export const useLearningProgressStore = create<LearningProgressState>()(
  persist(
    (set, get) => ({
      modules: {},
      totalProgress: 0,
      completedModules: 0,
      inProgressModules: 0,
      
      updateModuleProgress: (moduleId: string, moduleName: string, progress: number) => {
        const { modules } = get()
        const now = new Date().toISOString()
        
        const updatedModules = {
          ...modules,
          [moduleId]: {
            moduleId,
            moduleName,
            status: progress > 0 ? (progress >= 100 ? 'completed' : 'in-progress') as 'not-started' | 'in-progress' | 'completed' : 'not-started' as 'not-started' | 'in-progress' | 'completed',
            lastAccessed: now,
            progress: Math.min(100, Math.max(0, progress)),
          } as ModuleProgress,
        }
        
        // 计算总进度
        const totalProgress = Object.values(updatedModules).reduce((sum, m) => sum + m.progress, 0) / MODULES.length
        
        // 计算已完成和进行中的模块数
        const completedModules = Object.values(updatedModules).filter(m => m.progress >= 100).length
        const inProgressModules = Object.values(updatedModules).filter(m => m.progress > 0 && m.progress < 100).length
        
        set({
          modules: updatedModules,
          totalProgress,
          completedModules,
          inProgressModules,
        })
      },
      
      completeModule: (moduleId: string, moduleName: string) => {
        get().updateModuleProgress(moduleId, moduleName, 100)
      },
      
      resetModule: (moduleId: string) => {
        const { modules } = get()
        const updatedModules = { ...modules }
        delete updatedModules[moduleId]
        
        // 重新计算
        const totalProgress = Object.values(updatedModules).reduce((sum, m) => sum + m.progress, 0) / MODULES.length
        const completedModules = Object.values(updatedModules).filter(m => m.progress >= 100).length
        const inProgressModules = Object.values(updatedModules).filter(m => m.progress > 0 && m.progress < 100).length
        
        set({
          modules: updatedModules,
          totalProgress,
          completedModules,
          inProgressModules,
        })
      },
      
      resetAll: () => {
        set({
          modules: {},
          totalProgress: 0,
          completedModules: 0,
          inProgressModules: 0,
        })
      },
      
      getModuleStatus: (moduleId: string) => {
        const { modules } = get()
        return modules[moduleId]
      },
    }),
    {
      name: 'ai-anime-progress',
    }
  )
)