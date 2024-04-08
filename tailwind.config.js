/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      "black" : "#000000",
      "white" : "#FFFFFF",
      "gray" : {
        100 : "#F0EEED",
        200 : "#F2F0F1"
      },
      "star" : "#FFC633",
    },
    fontFamily : {
      'titr' : ['integral-bold', 'sans-serif'],
      'titr-m' : ['integral-medium', 'sans-serif'],
      'satoshi-b' : ['satoshi-bold', 'sans-serif'],
      'satoshi-l' : ['satoshi-light', 'sans-serif'],
      'satoshi' : ['satoshi-regular', 'sans-serif']
    }
  },
  plugins: [],
}

