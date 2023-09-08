/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        ...colors,
        'primary' : '#0984DD',
        'secondary' : '#D8EEFD',
        'third' : '#28A0F6'
      },
  },
  plugins: [],
}
