/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./components/**/*.html"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3b82f6',
        'brand-dark': '#0f172a',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}