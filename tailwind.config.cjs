/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {
          'max': '576px'
        }
      },
      spacing:{
        '25px':'25px'
      }
    },
  },
  plugins: [],
}
