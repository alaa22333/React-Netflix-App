/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      main:'#E50914',secondary:'white',black:'black',neutral:''
    }},
    

    },
    variants:{
      extend:{lineClamp:['hover']}
      

    }
  ,
  plugins: [ require('tailwind-scrollbar-hide') ,require('@tailwindcss/line-clamp')],
}