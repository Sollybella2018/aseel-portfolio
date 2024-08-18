/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {daisyui: {
    themes: [valentine],
  },
    extend: {},
  },
  plugins: [require('daisyui'),],
}

