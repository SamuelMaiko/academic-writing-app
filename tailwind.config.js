import { nextui } from "@nextui-org/react";
// const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    
    extend: {
      colors: {
        'primary':'#800020',
        'secondary': '#ffffff',
        'chocolate': '#333333',
        'hover':'#666666',
        'btlinks':'#799c79',
        "tcolor":'#333333',
        "bgcolor":"#f5f5f5",
        'textLinks':'#0374b5'
        
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

