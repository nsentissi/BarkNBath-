/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#F5C07A",
        
"secondary": "#D17D10",
        
"accent": "#52b69a",
        
"neutral": "#ffc500",
        
"base-100": "#ffffff",
        
"info": "#D4E8B0",
        
"success": "#D4E8B0",
        
"warning": "#ffffff",
        
"error": "#ffffff",
        },
      },
    ],
  }
  ,
  plugins: [require("daisyui")],
};
