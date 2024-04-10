/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Helvetica: ['Helvetica', 'sans-serif'],
        Bodoni: ['Bodoni Moda', 'serif'],
      },
      colors: {
        herBrown: '#84796D',
        lightBeige: '#F9F9F8',
        herBeige: '#F2EBD9',
        herPurple: '#E2D8E8',
        herBlack:'#464646',
      },
    },
  },
  plugins: [],
}

