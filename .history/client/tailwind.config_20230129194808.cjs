/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'hide': {
        '0%, 100%': {visibility: 'hidden', width: 0px, height: 0px, transition: 'all 5000ms ease-in-out'},
        }
      }
    },
  },
  plugins: [],
};
