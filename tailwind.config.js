/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"PT Serif"', 'serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        eliasOrange: {
          50: '#F9E3D0',   
          100: '#F3C29D', 
          200: '#EE9F69',  
          300: '#E87D3A', 
          400: '#E36A27',  
          500: "#E36F1E",  // Base color
          600: '#C35E1B', 
          700: '#A34D17',  
          800: '#843D14', 
          900: '#662F10'        
        },
        eliasBlue: {
          50: '#D0E4F4',
          100: '#A0C7E7',
          200: '#70AAD9',
          300: '#407ECD',
          400: '#1F61B3',
          500: '#003D7E', // base color
          600: '#003569',
          700: '#002B55',
          800: '#002243',
          900: '#001932'
        },
      },
    },
  },
  plugins: [],
}

