/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'nunitosans' : ['"Nunito Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

