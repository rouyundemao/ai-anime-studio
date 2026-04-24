import React, { useState } from 'react'
import { useCollectionStore } from '../stores/collectionStore'

interface CollectionButtonProps {
  id: string
  title: string
  content: string
  type?: 'prompt' | 'template'
  module?: string
  tags?: string[]
}

function CollectionButton({ id, title, content, type = 'prompt', module, tags }: CollectionButtonProps) {
  const { isCollected, addItem, removeItem } = useCollectionStore()
  const [showToast, setShowToast] = useState(false)
  const collected = isCollected(id)
  
  const handleToggle = () => {
    if (collected) {
      removeItem(id)
      showToastMessage('已取消收藏')
    } else {
      addItem({ title, content, type, module, tags }, id)
      showToastMessage('已收藏')
    }
  }
  
  const showToastMessage = (message: string) => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }
  
  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={`p-2 rounded-lg transition-all duration-200 ${
          collected
            ? 'text-yellow-500 hover:text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
            : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label={collected ? '取消收藏' : '收藏'}
      >
        <svg
          className="w-5 h-5"
          fill={collected ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>
      
      {/* Toast 提示 */}
      {showToast && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 
          bg-gray-800 dark:bg-gray-600 text-white text-xs rounded-lg shadow-lg
          animate-fade-in whitespace-nowrap">
          {collected ? '已取消收藏' : '已收藏 ⭐'}
        </div>
      )}
    </div>
  )
}

export default CollectionButton