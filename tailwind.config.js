/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#FAF8F5',
          100: '#F5ECE1',
          200: '#EADBC8',
          300: '#DAC3A9',
          400: '#C7A783',
          500: '#B38B5D',
          600: '#9E7246',
          700: '#805933',
          800: '#634324',
          900: '#4D3319',
        }
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
