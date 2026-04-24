/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 启用深色模式（class 策略）
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Han Serif CN', 'Noto Serif SC', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            lineHeight: theme('lineHeight.relaxed'),
            h2: {
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
            },
            h3: {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),
            },
            'ul > li': {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
          },
        },
        lg: {
          css: {
            lineHeight: theme('lineHeight.relaxed'),
            '> ul > li': {
              paddingLeft: theme('spacing.3'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
