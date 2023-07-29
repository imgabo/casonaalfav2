/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'header-hero' : "url('./assets/img/bg-header.jpg')"
      },
      colors: {
        
        'primary' : '#61C3B4',
        'zomp':'#35a994ff',
        'pine-green' :'#0b735fff',
        'secondary' : '#063C30'
      }
    },
  },
  plugins: [],
}

