/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        revertSpin:{
          '0%':{transform: 'rotate(360deg)'},
          '100%':{transform: 'rotate(0deg)'}
        }
      },
      
    },
  },
  plugins: [],
}
