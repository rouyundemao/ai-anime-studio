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
      {/* 搜索输入框 */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => useSearchStore.getState().setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="搜索模块、Prompt、工具..."
          className="w-64 md:w-80 px-4 py-2 pl-10 rounded-xl border border-gray-200 dark:border-gray-600 
            bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            transition-all duration-200"
        />
        {/* 搜索图标 */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {/* 快捷键提示 */}
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex px-2 py-0.5 
          text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-600 rounded">
          Ctrl+K
        </kbd>
      </div>

      {/* 搜索结果下拉框 */}
      {isOpen && (query.length > 1 || searchHistory.length > 0) && (
        <div className="absolute top-full mt-2 w-full max-w-md bg-white dark:bg-gray-800 
          rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          
          {/* 搜索历史 */}
          {query.length <= 1 && searchHistory.length > 0 && (
            <div className="p-3 border-b border-gray-200 dark:border-gray-700">
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
              <div className="flex flex-wrap gap-2">
                {searchHistory.slice(0, 5).map((h, i) => (
                  <button
                    key={i}
                    onClick={() => search(h)}
                    className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 
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
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              <div className="animate-spin w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full mx-auto" />
              <span className="mt-2 text-sm">搜索中...</span>
            </div>
          )}

          {!isSearching && results.length > 0 && (
            <div className="max-h-80 overflow-y-auto" data-search-results>
              {results.map((result) => (
                <div
                  key={result.id}
                  onClick={() => {
                    setIsOpen(false)
                    clearResults()
                    navigate(result.path)
                  }}
                  className="block p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    {/* 类型图标 */}
                    <span className="text-lg">
                      {result.type === 'module' ? '📚' : 
                       result.type === 'prompt' ? '✨' : '🛠️'}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {result.title}
                        </span>
                        {result.module && (
                          <span className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900 
                            text-primary-600 dark:text-primary-300 rounded-full">
                            {result.module}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                        {result.content}
                      </p>
                      {result.tags && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-600 
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
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              <span className="text-lg">🔍</span>
              <p className="mt-2">未找到相关结果</p>
              <p className="text-sm">尝试搜索：剧本、角色、光影、动画...</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar