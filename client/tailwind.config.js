/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],



  theme: {
    extend: {
      fontFamily: {
        chewy: ['Chewy', 'cursive'],
        dosis: ['Dosis', 'sans-serif'],
      },
    },
  },


  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#19759f",

          secondary: "#168aad",

          accent: "#52b69a",

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
