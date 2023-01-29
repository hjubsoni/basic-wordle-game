/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        hide: {'100%': { visibility: 'hidden', width: '0px', height: '0px' }},
        
      }
      animation: {
        'hide-element': 'hide 5000ms ease-in-out',
      }
    },
  },
  plugins: [],
};
