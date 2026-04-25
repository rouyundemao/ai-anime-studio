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
        // 品牌色系 · 薄雾紫 (primary)
        primary: {
          50:  '#F5F3FC',
          100: '#EBE7F9',
          200: '#D5CDF3',
          300: '#BBAEEA',
          400: '#A494DF',
          500: '#8B7AB8',
          600: '#6B5FA0',
          700: '#504782',
          800: '#3A3161',
          900: '#281F47',
        },
        // 品牌色系 · 桃色 (secondary)
        secondary: {
          50:  '#FDF2F8',
          100: '#FAE3F2',
          200: '#F6C7E6',
          300: '#EF9FD0',
          400: '#E276B8',
          500: '#C2649C',
          600: '#A44B82',
          700: '#843669',
          800: '#63264E',
          900: '#441A36',
        },
        // 品牌色系 · 朱砂红 (accent)
        accent: {
          50:  '#FDF3F1',
          100: '#FBE4E0',
          200: '#F6C6BD',
          300: '#EFA193',
          400: '#E37763',
          500: '#C23B22',
          600: '#A82C16',
          700: '#8A2010',
          800: '#67180B',
          900: '#491108',
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
