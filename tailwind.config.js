/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'header-hero' : "url('./assets/img/bg-header.jpg')",
        'header-normal' : "url('./assets/img/bg-header2.jpg')"
      },
      colors: {
        
        'primary' : '#61C3B4',
        'zomp':'#35a994ff',
        'pine-green' :'#0b735fff',
        'secondary' : '#063C30',
        'header' : '#1EA5B0'
      }
    },
  },
  plugins: [],
}

