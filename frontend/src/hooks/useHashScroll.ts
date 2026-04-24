import { useEffect } from 'react'

/**
 * 自定义钩子：处理 URL hash 滚动到指定元素
 * @param delay 延迟滚动的时间（毫秒），用于等待页面内容加载
 */
export const useHashScroll = (delay: number = 100) => {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location
      if (hash) {
        // 移除 # 符号
        const elementId = hash.substring(1)
        
        // 查找元素
        let element = document.getElementById(elementId)
        
        // 如果没找到，尝试查找带有 data-hash 的元素
        if (!element) {
          element = document.querySelector(`[data-hash="${elementId}"]`) as HTMLElement
        }
        
        // 如果找到了，滚动到该元素
        if (element) {
          // 等待一点时间确保元素已渲染
          setTimeout(() => {
            element?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
            
            // 添加高亮效果
            element.classList.add('highlight')
            setTimeout(() => {
              element?.classList.remove('highlight')
            }, 2000)
          }, delay)
        }
      }
    }

    // 监听路由变化
    const handleRouteChange = () => {
      scrollToHash()
    }

    // 初始加载时滚动
    scrollToHash()

    // 监听 popstate 事件（浏览器前进/后退）
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [delay])
}

// 添加高亮样式
const style = document.createElement('style')
style.textContent = `
  .highlight {
    animation: highlight-pulse 2s ease-in-out;
  }
  
  @keyframes highlight-pulse {
    0% { background-color: transparent; }
    50% { background-color: rgba(59, 130, 246, 0.2); }
    100% { background-color: transparent; }
  }
`
document.head.appendChild(style)