/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        tab: '834px',
        pc: '1170px',
      },
      // Custom font family
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-gray-4': '#737373',
        'clr-gray-5': '#494949',
        'clr-gray-6': '#212121',
        'clr-off-white': '#F4F4F4',
      },
      backgroundImage: {
        'hero-bg':
          'linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [require('daisyui')],

  // Config for daisyUI
  daisyui: {
    themes: ['light'], // only 'light' theme available
    prefix: 'da-', // change prefix for all classes
  },
};
