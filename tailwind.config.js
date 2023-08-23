/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"red",
        myshadow :"inset 0px 0px 20px 20px rgba(0, 255, 255, 0.4)",
      }
    },
  },
  plugins: [],
}

