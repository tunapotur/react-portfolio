/** @type {import('tailwindcss').Config} */
const heropatterns = require('tailwindcss-hero-patterns/src/patterns');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    heroPatterns: { circuitboard: heropatterns.circuitboard },
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        open_sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
