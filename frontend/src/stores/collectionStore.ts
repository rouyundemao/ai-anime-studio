import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CollectionItem {
  id: string
  title: string
  content: string
  type: 'prompt' | 'template'
  module?: string
  tags?: string[]
  collectedAt: string
}

interface CollectionState {
  items: CollectionItem[]
  total: number
  
  // 操作
  addItem: (item: Omit<CollectionItem, 'id' | 'collectedAt'>, externalId?: string) => void
  removeItem: (id: string) => void
  isCollected: (id: string) => boolean
  clearAll: () => void
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      
      addItem: (item, externalId) => {
        const { items } = get()
        const finalId = externalId || `col_${Date.now()}`
        const newItem: CollectionItem = {
          ...item,
          id: finalId,
          collectedAt: new Date().toISOString(),
        }
        
        // 避免重复
        if (items.some(i => i.id === finalId)) return
        
        set({ items: [newItem, ...items], total: items.length + 1 })
      },
      
      removeItem: (id: string) => {
        const { items } = get()
        const updatedItems = items.filter(i => i.id !== id)
        set({ items: updatedItems, total: updatedItems.length })
      },
      
      isCollected: (id: string) => {
        const { items } = get()
        return items.some(i => i.id === id)
      },
      
      clearAll: () => {
        set({ items: [], total: 0 })
      },
    }),
    {
      name: 'ai-anime-collections',
    }
  )
)