// @type {import('tailwindcss').Config} 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],



  theme: {
  darkMode: 'class',
  
    extend: {
      fontFamily: {
        chewy: ['Chewy', 'cursive'],
        dosis: ['Dosis', 'sans-serif'],
        playful: ['Recursive', 'sans-serif'],
        
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
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

          neutral: "#E97777",

          /* "base-100": "#40CCD4", */

          info: "#F5C07A",

          success: "#fbcd59",

          warning: "#6bae75",

          error: "#ffffff",

        },
      },
    ],
    
  },
  plugins: [require("daisyui")],
};
