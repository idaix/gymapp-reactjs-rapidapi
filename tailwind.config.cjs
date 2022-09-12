/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#AADF3B",
        }
      },
      fontFamily: {
        'titleFont': 'Kaushan Script'
      } 
    },
  },
  plugins: [],
}
