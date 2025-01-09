/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
