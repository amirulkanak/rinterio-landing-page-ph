/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  // Config for daisyUI
  daisyui: {
    themes: ['light'], // only 'light' theme available
    prefix: 'da-', // change prefix for all classes
  },
};
