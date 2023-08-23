/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  content: [],
  theme: {
    extend: {
      colors :{
        gray33: "#333",
        'overlay' : 'rgba(0, 0, 0, 0.3)',
      },
      spacing:{
        35: "35px",
      },
      
    },
  },
  
  plugins: [],
}