// @type {import('tailwindcss').Config} 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],



  theme: {
  darkMode: 'class',
  
    extend: {
      fontFamily: {
        chewy: ['Chewy', 'cursive'],
        dosis: ['Dosis', 'sans-serif'],
        playful: ['Pacifico', 'cursive'],
      },
    },
  },


  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#19759f",

          secondary: "#168aad",

          accent: "#cc7744",

          neutral: "#ee3e54",

          /* "base-100": "#40CCD4", */

          info: "#F5C07A",

          success: "#fbcd59",

          warning: "#ffffff",

          error: "#ffffff",

        },
      },
    ],
    
  },
  plugins: [require("daisyui")],
};
