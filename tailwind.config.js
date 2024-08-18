/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rampart: ['Montserrat', 'sans-serif'],
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
      backdropFilter: {
        enabled: true,
      },
    },
  },
  plugins: [],
}
