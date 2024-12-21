/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#373643',
        'orange': {
          100: '#FF914D',
          200: '#F97216',
        }
      },
    },
  },
  plugins: [],
}
