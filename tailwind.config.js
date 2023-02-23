/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens:{
      sm: '480px',
      tablet: '640px',
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
      bgDark: 'var(--color-bg-dark)',
      bgDarlElt: 'var(--color-element-dark)'
    },
    extend: {
      boxShadow: {
        '3xl': '0px 1px 5px 0px hsl(0, 0%, 52%)',
        '2xl': '0px 1px 5px 0px hsl(207, 26%, 17%)',
        'xl': '-1px 0px 5px 0px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}
