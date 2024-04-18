/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:'jit',
  theme: {
    extend: {
      colors: {
        primary:'#E7E7E7',
        ethereum: '#3C3C3D',
        tether:'#00ADEF'
      },
      fontFamily:{
        custom:['Poppins', 'sans-Serif']
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const gradients = {
       '.border-gradient-black-red':{
        'border-image' :'linear-gradient(90deg, black, red)', 'border-image-slice' : '1'
       }
      };
      addUtilities(gradients,['responsive', 'hover']);
    }
  ],
}

