/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.2rem',
      xl: '1.75rem',
      '2xl': '2.563rem',
      '3xl': '1.953rem',
      '4xl': '3.5rem'
    }
  },
  plugins: []
}
