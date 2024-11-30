/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eliasOrange: {
          50: '#F6E1C7',
          100: '#F1C37F',
          200: '#E9A539',
          300: '#E57C0D',
          400: '#D65A10',
          500: '#D35D13', // Base color
          600: '#B94F12',
          700: '#9E430F',
          800: '#86340D',
          900: '#6F280A'
        },
        eliasBlue: {
          50: '#E6F2FB',
          100: '#B2D6F7',
          200: '#80BBF2',
          300: '#4D9EED',
          400: '#1A83E8',
          500: '#01407F', // Base color
          600: '#013B6C',
          700: '#012C58',
          800: '#011F44',
          900: '#01132F'
        },
      },
    },
  },
  plugins: [],
}

