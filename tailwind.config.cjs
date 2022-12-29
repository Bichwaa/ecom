/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    colors:{
      ...colors,
      purple:"#565ABB",
      blue:"#4DE1C1",
      fog:"#D9D9D933"
    }
  },
  plugins: [],
}