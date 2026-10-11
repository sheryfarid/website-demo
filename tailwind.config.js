/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f7',
          100: '#fce7f0',
          200: '#f9cfe1',
          300: '#f5a8c7',
          400: '#ee76a4',
          500: '#e34d86',
          600: '#cf2d68',
          700: '#b21e56',
          800: '#931c49',
          900: '#7b1c41',
        },
        gold: {
          100: '#f4ecd9',
          300: '#dfc290',
          400: '#d4af7a',
          500: '#c9a24b',
          600: '#b08a33',
        },
        ink: {
          900: '#1a1317',
          800: '#241c21',
          700: '#332027',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26, 19, 23, 0.18)',
        glow: '0 8px 30px -8px rgba(207, 45, 104, 0.55)',
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease-out both',
        fadeIn: 'fadeIn 1s ease-out both',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}