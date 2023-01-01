/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(var(--color-primary-50) / <alpha-value>)',
          100: 'hsl(var(--color-primary-100) / <alpha-value>)',
          200: 'hsl(var(--color-primary-200) / <alpha-value>)',
          300: 'hsl(var(--color-primary-300) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          600: 'hsl(var(--color-primary-600) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          800: 'hsl(var(--color-primary-800) / <alpha-value>)',
          900: 'hsl(var(--color-primary-900) / <alpha-value>)',
        },
        grey: {
          50: 'hsl(var(--color-grey-50) / <alpha-value>)',
          100: 'hsl(var(--color-grey-100) / <alpha-value>)',
          200: 'hsl(var(--color-grey-200) / <alpha-value>)',
          300: 'hsl(var(--color-grey-300) / <alpha-value>)',
          400: 'hsl(var(--color-grey-400) / <alpha-value>)',
          500: 'hsl(var(--color-grey-500) / <alpha-value>)',
          600: 'hsl(var(--color-grey-600) / <alpha-value>)',
          700: 'hsl(var(--color-grey-700) / <alpha-value>)',
          800: 'hsl(var(--color-grey-800) / <alpha-value>)',
          900: 'hsl(var(--color-grey-900) / <alpha-value>)',
        },
        'bg-light': 'hsl(var(--color-bg-light) / <alpha-value>)',
        'bg-dark': 'hsl(var(--color-bg-dark) / <alpha-value>)',
        bg: 'hsl(var(--color-bg) / <alpha-value>)',

        'heading-light': 'hsl(var(--color-heading-light) / <alpha-value>)',
        'heading-dark': 'hsl(var(--color-heading-dark) / <alpha-value>)',
        heading: 'hsl(var(--color-heading) / <alpha-value>)',

        'text-light': 'hsl(var(--color-text-light) / <alpha-value>)',
        'text-dark': 'hsl(var(--color-text-dark) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
      },
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        accent: ['Raleway', 'sans-serif'],
      },
      height: {
        vh: 'calc(var(--vh, 1vh) * 100)',
      },
      transitionProperty: {
        'bg-color': 'background-color',
      },
      backgroundImage: {
        'wiggle-wide-3-primary-animated-right': 'url(/images/bg/bg-wiggle-wide-3-primary-animated-right.svg)',
        'wiggle-wide-6-primary-animated-right': 'url(/images/bg/bg-wiggle-wide-6-primary-animated-right.svg)',
        'bg-dark': 'url(/images/bg/bg-dark.svg)',
        'bg-dark-animated': 'url(/images/bg/bg-dark-animated.svg)',
      },
      screens: {
        '2xl': '1366px',
        '3xl': '1536px',
        '4xl': '1792px',
        '5xl': '1920px',
        '6xl': '2560px',
      },
    },
    fontSize: {
      '6xl': '5.96rem', // 95.37px
      '5xl': '4.768rem', // 76.29px
      '4xl': '3.815rem', // 61.04px
      '3xl': '3.052rem', // 48.83px
      '2xl': '2.441rem', // 39.06px
      xl: '1.953rem', // 31.25px
      lg: '1.563rem', // 25.00px
      md: '1.25rem', // 20.00px
      base: '1rem', // 16px
      sm: '0.875rem', // 14px
      xs: '0.75rem', // 12px
    },
  },
  plugins: [],
}
