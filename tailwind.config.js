/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eliasOrange: "#D35D13",
        eliasBlue: "#01407F"
      }
    },
  },
  plugins: [],
}

