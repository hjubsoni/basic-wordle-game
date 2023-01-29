module.exports = {
  plugins: {
    tailwindcss: {
      extend: {
        keyframes: {
          hide: {'100%': { visibility: 'hidden', width: '0px', height: '0px' }},
          
        }
        animation: {
          'hide-element': 'hide 5000ms ease-in-out',
        }
      },
    },
    autoprefixer: {},
  },
}
