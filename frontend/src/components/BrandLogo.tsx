import React from 'react'

interface BrandLogoProps {
  size?: number
  showText?: boolean
  className?: string
  textClassName?: string
  variant?: 'default' | 'mono-light' | 'mono-dark'
}

/**
 * 轻语绘梦 · QingyuDreams 品牌 Logo
 *
 * 设计语言：
 *  - 月牙：象征"轻语"，灵感如夜色低语
 *  - 笔触弧线：象征"绘梦"，AI 之笔勾勒梦境
 *  - 星点：象征灵感火花，落于笔尖
 *  - 渐变：薄雾紫 → 朱砂红 → 月白，融合东方水墨与现代科技感
 */
function BrandLogo({
  size = 40,
  showText = true,
  className = '',
  textClassName = '',
  variant = 'default'
}: BrandLogoProps) {
  const gradientId = React.useId()
  const accentId = React.useId()

  const isLight = variant === 'mono-light'
  const isDark = variant === 'mono-dark'

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="轻语绘梦 Logo"
        role="img"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#FFFFFF' : isDark ? '#1C1C1C' : '#8B7AB8'} />
            <stop offset="55%" stopColor={isLight ? '#FFFFFF' : isDark ? '#1C1C1C' : '#C2649C'} />
            <stop offset="100%" stopColor={isLight ? '#FFFFFF' : isDark ? '#1C1C1C' : '#C23B22'} />
          </linearGradient>
          <linearGradient id={accentId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#FFFFFF' : isDark ? '#1C1C1C' : '#FBBF24'} />
            <stop offset="100%" stopColor={isLight ? '#FFFFFF' : isDark ? '#1C1C1C' : '#F59E0B'} />
          </linearGradient>
        </defs>

        {/* 圆形背景：月夜 */}
        <circle cx="32" cy="32" r="30" fill={`url(#${gradientId})`} opacity="0.12" />
        <circle cx="32" cy="32" r="30" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.4" />

        {/* 月牙：轻语 */}
        <path
          d="M 22 16 A 18 18 0 1 0 22 48 A 14 14 0 1 1 22 16 Z"
          fill={`url(#${gradientId})`}
          opacity="0.95"
        />

        {/* 笔触弧线：绘梦（一笔挥就的飘逸笔锋） */}
        <path
          d="M 16 50 Q 30 38 44 30 T 56 14"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* 笔锋收尾的小三角，模拟毛笔出锋 */}
        <path
          d="M 54 14 L 58 12 L 56 18 Z"
          fill={`url(#${gradientId})`}
        />

        {/* 灵感星点 */}
        <circle cx="46" cy="22" r="2.4" fill={`url(#${accentId})`} />
        <circle cx="40" cy="44" r="1.4" fill={`url(#${accentId})`} opacity="0.85" />
        <circle cx="52" cy="34" r="1.0" fill={`url(#${accentId})`} opacity="0.7" />
      </svg>

      {showText && (
        <span
          className={
            textClassName ||
            'text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#8B7AB8] via-[#C2649C] to-[#C23B22] bg-clip-text text-transparent tracking-wide'
          }
        >
          轻语绘梦
        </span>
      )}
    </div>
  )
}

export default BrandLogo
