/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        summerDreamsSans: ['"Summer-Dreams-Sans"', 'sans-serif'],
        summerWind: ['"Summer-Wind"', 'sans-serif'],
      },
    },
    colors: {
      dark: '#1E1D1D',
      light: '#f6f1ed',
      gray: '#374151',
      accent: '#E52458',
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
