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
      },
    },
  },
  plugins: [],
}

