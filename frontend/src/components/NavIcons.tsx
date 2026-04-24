import React from 'react'

interface NavIconProps {
  type: 'home' | 'tutorials' | 'prompts' | 'resources' | 'tools' | 'workflow' | 'palette' | 'book' | 'user' | 'globe' | 'image' | 'film' | 'sparkles' | 'rocket' | 'target' | 'diamond'
  size?: number
  className?: string
}

/**
 * 轻语绘梦导航图标集
 * 使用品牌色系：薄雾紫 #8B7AB8 × 朱砂红 #C23B22
 */
export function NavIcon({ type, size = 20, className = '' }: NavIconProps) {
  const gradientId = `nav-gradient-${type}`
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B7AB8" />
          <stop offset="50%" stopColor="#C2649C" />
          <stop offset="100%" stopColor="#C23B22" />
        </linearGradient>
      </defs>
      
      {type === 'home' && (
        <>
          <path
            d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z"
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          <path
            d="M9 21V15H15V21"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="9" r="1.5" fill={`url(#${gradientId})`} />
        </>
      )}
      
      {type === 'tutorials' && (
        <>
          <rect x="4" y="3" width="14" height="18" rx="2" fill={`url(#${gradientId})`} opacity="0.15" />
          <rect x="4" y="3" width="14" height="18" rx="2" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <line x1="8" y1="7" x2="14" y2="7" stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="11" x2="14" y2="11" stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="15" x2="12" y2="15" stroke={`url(#${gradientId})`} strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M18 7L20 9V19C20 19.5523 19.5523 20 19 20H18"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      
      {type === 'prompts' && (
        <>
          <path
            d="M12 2L14.5 7.5L20 9L15.5 13L16.5 19L12 16L7.5 19L8.5 13L4 9L9.5 7.5L12 2Z"
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          <circle cx="12" cy="12" r="3" fill="white" opacity="0.3" />
          <circle cx="18" cy="6" r="1.5" fill={`url(#${gradientId})`} opacity="0.6" />
          <circle cx="6" cy="18" r="1" fill={`url(#${gradientId})`} opacity="0.5" />
        </>
      )}
      
      {type === 'resources' && (
        <>
          <path
            d="M20 7L12 3L4 7V17L12 21L20 17V7Z"
            fill={`url(#${gradientId})`}
            opacity="0.15"
          />
          <path
            d="M20 7L12 3L4 7V17L12 21L20 17V7Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 7L12 11L20 7"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 3V11"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="15" r="2" fill={`url(#${gradientId})`} />
        </>
      )}
      
      {type === 'tools' && (
        <>
          <path
            d="M14.5 5.5L18.5 9.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 21L7.5 16.5"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 18L11 13L15 17L10 22L6 18Z"
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          <circle cx="16" cy="8" r="4" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <circle cx="16" cy="8" r="1.5" fill={`url(#${gradientId})`} />
        </>
      )}
      
      {type === 'workflow' && (
        <>
          <path
            d="M4 18V6"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 18V10"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 18V14"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="4" cy="6" r="2" fill={`url(#${gradientId})`} opacity="0.9" />
          <circle cx="12" cy="10" r="2" fill={`url(#${gradientId})`} opacity="0.7" />
          <circle cx="20" cy="14" r="2" fill={`url(#${gradientId})`} opacity="0.5" />
          <path
            d="M6 6H10"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
          <path
            d="M14 10H18"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
        </>
      )}
      
      {type === 'palette' && (
        <>
          <path
            d="M12 3C13.5 3 15 3.5 16.5 4.5C19.5 6.5 21 10 20 13.5C19 17 15.5 19 12 19C10.5 19 9 18.5 7.5 17.5C4.5 15.5 3 12 4 8.5C5 5 8.5 3 12 3Z"
            fill={`url(#${gradientId})`}
            opacity="0.15"
          />
          <path
            d="M12 3C13.5 3 15 3.5 16.5 4.5C19.5 6.5 21 10 20 13.5C19 17 15.5 19 12 19C10.5 19 9 18.5 7.5 17.5C4.5 15.5 3 12 4 8.5C5 5 8.5 3 12 3Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <circle cx="8.5" cy="8" r="1.2" fill={`url(#${gradientId})`} />
          <circle cx="10.5" cy="6.5" r="1" fill={`url(#${gradientId})`} opacity="0.8" />
          <circle cx="14" cy="7" r="1" fill={`url(#${gradientId})`} opacity="0.7" />
          <circle cx="16" cy="10" r="1.2" fill={`url(#${gradientId})`} opacity="0.9" />
          <circle cx="14.5" cy="13" r="1" fill={`url(#${gradientId})`} />
          <path
            d="M12 15C12.8 15 13.5 14.5 13.5 13.5C13.5 12.5 12.8 12 12 12C11.2 12 10.5 12.5 10.5 13.5C10.5 14.5 11.2 15 12 15Z"
            fill={`url(#${gradientId})`}
          />
        </>
      )}
      
      {type === 'book' && (
        <>
          <path
            d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
            fill={`url(#${gradientId})`}
            opacity="0.1"
          />
          <path
            d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <path
            d="M8 8H16"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 12H16"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 16H14"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 4V20"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16.5" cy="16.5" r="2" fill={`url(#${gradientId})`} />
        </>
      )}
      
      {type === 'user' && (
        <>
          <circle
            cx="12"
            cy="8"
            r="4"
            fill={`url(#${gradientId})`}
            opacity="0.15"
          />
          <circle
            cx="12"
            cy="8"
            r="4"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <path
            d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="8" r="2" fill={`url(#${gradientId})`} opacity="0.5" />
        </>
      )}
      
      {type === 'globe' && (
        <>
          <circle
            cx="12"
            cy="12"
            r="8"
            fill={`url(#${gradientId})`}
            opacity="0.1"
          />
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="3"
            ry="8"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M4 12H20"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 8H18"
            stroke={`url(#${gradientId})`}
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M6 16H18"
            stroke={`url(#${gradientId})`}
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="12" cy="12" r="1.5" fill={`url(#${gradientId})`} />
        </>
      )}
      
      {type === 'image' && (
        <>
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="2"
            fill={`url(#${gradientId})`}
            opacity="0.1"
          />
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="2"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <circle cx="8.5" cy="9.5" r="1.5" fill={`url(#${gradientId})`} />
          <path
            d="M4 15L8 12L11 15L14 11L20 16V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V15Z"
            fill={`url(#${gradientId})`}
            opacity="0.3"
          />
          <path
            d="M4 15L8 12L11 15L14 11L20 16"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      
      {type === 'film' && (
        <>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            fill={`url(#${gradientId})`}
            opacity="0.1"
          />
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <path
            d="M7 4V20"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <path
            d="M17 4V20"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="2.5" fill={`url(#${gradientId})`} opacity="0.5" />
          <path
            d="M10 12L13 10V14L10 12Z"
            fill={`url(#${gradientId})`}
          />
        </>
      )}
      
      {type === 'sparkles' && (
        <>
          <path
            d="M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2Z"
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          <path
            d="M18 14L18.8 16.2L21 17L18.8 17.8L18 20L17.2 17.8L15 17L17.2 16.2L18 14Z"
            fill={`url(#${gradientId})`}
            opacity="0.6"
          />
          <path
            d="M6 15L6.6 16.5L8 17L6.6 17.5L6 19L5.4 17.5L4 17L5.4 16.5L6 15Z"
            fill={`url(#${gradientId})`}
            opacity="0.5"
          />
          <circle cx="16" cy="5" r="1" fill={`url(#${gradientId})`} opacity="0.4" />
          <circle cx="7" cy="11" r="0.8" fill={`url(#${gradientId})`} opacity="0.3" />
        </>
      )}
      
      {type === 'rocket' && (
        <>
          <path
            d="M12 2C12 2 7 7 7 13C7 16.5 9 19 12 22C15 19 17 16.5 17 13C17 7 12 2 12 2Z"
            fill={`url(#${gradientId})`}
            opacity="0.15"
          />
          <path
            d="M12 2C12 2 7 7 7 13C7 16.5 9 19 12 22C15 19 17 16.5 17 13C17 7 12 2 12 2Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <circle cx="12" cy="10" r="2.5" fill={`url(#${gradientId})`} opacity="0.3" />
          <circle cx="12" cy="10" r="1.5" fill={`url(#${gradientId})`} />
          <path
            d="M7 13L5 16L7 17"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 13L19 16L17 17"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15V18"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
      
      {type === 'target' && (
        <>
          <circle
            cx="12"
            cy="12"
            r="9"
            fill={`url(#${gradientId})`}
            opacity="0.08"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill={`url(#${gradientId})`}
            opacity="0.4"
          />
          <circle cx="12" cy="12" r="1.5" fill={`url(#${gradientId})`} />
          <path
            d="M12 3V6"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 18V21"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 12H6"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 12H21"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
      
      {type === 'diamond' && (
        <>
          <path
            d="M12 2L20 10L12 22L4 10L12 2Z"
            fill={`url(#${gradientId})`}
            opacity="0.1"
          />
          <path
            d="M12 2L20 10L12 22L4 10L12 2Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 10L12 14L20 10"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14V22"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="8" r="2" fill={`url(#${gradientId})`} opacity="0.5" />
        </>
      )}
    </svg>
  )
}
