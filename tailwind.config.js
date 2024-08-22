/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.html",
      "./assets/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-white': '0 4px 6px rgba(255, 255, 255, 0.5)',
        'custom': '0 6px 6px rgba(0, 0, 0, 0.5)',
        'custom-side': '6px 0px 10px rgba(0, 0, 0, 0.5)',
        'custom-less': '0 6px 6px rgba(0, 0, 0, 0.25)',
        'custom-more': '0 6px 6px rgba(0, 0, 0, 0.75)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)'}
      },
    },
  },
  plugins: [],
}

