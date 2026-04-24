import React from 'react'

interface NavIconProps {
  type: 'home' | 'tutorials' | 'prompts' | 'resources' | 'tools' | 'workflow'
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
    </svg>
  )
}
