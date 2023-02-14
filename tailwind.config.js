/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      textLight: 'var(--color-text-light)',
      textDark: 'var(--color-text-dark)',
      textInputdark: 'var(--color-text-dark)'
    },
    backgroundColor:{
      bgLight: 'var(--color-bg-light)',
      bgDark: 'var(--color-bg-light)',
    },
    extend: {},
  },
  plugins: [],
}
