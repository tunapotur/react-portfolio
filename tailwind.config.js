/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        open_sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
