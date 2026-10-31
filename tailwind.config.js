/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kinetic: {
          dark: '#080E0A',
          surface: '#101912',
          card: '#152219',
          border: '#213326',
          bronze: '#D4A373',
          bronzeHover: '#E6BA8E',
          sage: '#9AA89A',
          light: '#EAEFE9',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
