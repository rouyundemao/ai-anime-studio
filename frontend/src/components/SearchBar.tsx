import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchStore } from '../stores/searchStore'

function SearchBar() {
  const navigate = useNavigate()
  const { query, results, isSearching, searchHistory, search, clearResults, clearHistory } = useSearchStore()
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // 监听输入变化
  useEffect(() => {
    if (query.length > 1) {
      search(query)
      setIsOpen(true)
    } else {
      clearResults()
    }
  }, [query, search, clearResults])

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        // 检查是否点击的是搜索结果
        const target = e.target as HTMLElement
        if (!target.closest('[data-search-results]')) {
          setIsOpen(false)
        }
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 键盘快捷键 (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
        inputRef.current?.blur()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative">
      {/* 搜索输入框 - 移动端优化 */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => useSearchStore.getState().setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="搜索..."
          className="w-28 sm:w-40 md:w-56 lg:w-72 xl:w-80 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2 pl-7 sm:pl-8 md:pl-10 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-600 
            bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs sm:text-sm md:text-base
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            transition-all duration-200"
        />
        {/* 搜索图标 */}
        <svg
          className="absolute left-1.5 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {/* 快捷键提示 - 仅桌面端显示 */}
        <kbd className="absolute right-1.5 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 hidden lg:inline-flex px-1.5 sm:px-2 py-0.5 
          text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-600 rounded">
          Ctrl+K
        </kbd>
      </div>

      {/* 搜索结果下拉框 - 移动端优化 */}
      {isOpen && (query.length > 1 || searchHistory.length > 0) && (
        <div className="absolute top-full mt-1.5 sm:mt-2 left-0 right-0 sm:left-auto sm:right-0 sm:w-80 md:w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 
          rounded-lg sm:rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          
          {/* 搜索历史 */}
          {query.length <= 1 && searchHistory.length > 0 && (
            <div className="p-2 sm:p-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">搜索历史</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    clearHistory()
                  }}
                  className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  清除
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {searchHistory.slice(0, 5).map((h, i) => (
                  <button
                    key={i}
                    onClick={() => search(h)}
                    className="px-2 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 
                      hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 搜索结果 */}
          {isSearching && (
            <div className="p-3 sm:p-4 text-center text-gray-500 dark:text-gray-400">
              <div className="animate-spin w-5 h-5 sm:w-6 sm:h-6 border-2 border-primary-500 border-t-transparent rounded-full mx-auto" />
              <span className="mt-2 text-xs sm:text-sm">搜索中...</span>
            </div>
          )}

          {!isSearching && results.length > 0 && (
            <div className="max-h-60 sm:max-h-72 md:max-h-80 overflow-y-auto">
              {results.map((result) => (
                <div
                  key={result.id}
                  onClick={() => {
                    setIsOpen(false)
                    clearResults()
                    navigate(result.path)
                  }}
                  className="block p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    {/* 类型图标 */}
                    <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">
                      {result.type === 'module' ? '📚' : 
                       result.type === 'prompt' ? '✨' : 
                       result.type === 'tool' ? '🛠️' :
                       result.type === 'workflow' ? '📊' :
                       result.type === 'resource' ? '📦' : '📖'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base">
                          {result.title}
                        </span>
                        {result.module && (
                          <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-primary-100 dark:bg-primary-900 
                            text-primary-600 dark:text-primary-300 rounded-full flex-shrink-0">
                            {result.module}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 line-clamp-2">
                        {result.content}
                      </p>
                      {result.tags && (
                        <div className="flex flex-wrap gap-1 mt-1.5 sm:mt-2">
                          {result.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 bg-gray-100 dark:bg-gray-600 
                              text-gray-500 dark:text-gray-400 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 无结果 */}
          {!isSearching && query.length > 1 && results.length === 0 && (
            <div className="p-3 sm:p-4 text-center text-gray-500 dark:text-gray-400">
              <span className="text-lg">🔍</span>
              <p className="mt-2 text-xs sm:text-sm">未找到相关结果</p>
              <p className="text-[10px] sm:text-xs mt-1">尝试搜索：剧本、角色、光影、动画...</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar