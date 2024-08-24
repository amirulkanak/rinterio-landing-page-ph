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
        'clr-gray-1': '#E9E9E9',
        'clr-gray-4': '#737373',
        'clr-gray-5': '#494949',
        'clr-gray-6': '#212121',
        'clr-gray-7': '#1C1C1C',
        'clr-off-white': '#F4F4F4',
      },
      backgroundImage: {
        'header-bg':
          'linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
        'connect-bg':
          'linear-gradient(0deg, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 50%), url("../images/contact-bg.jpg")',
      },
      // Grid template rows
      gridTemplateRows: {
        '4-h-14.2': '14.2rem 14.2rem 12.58rem 14.2rem',
        '2-h-14.2': '14.2rem 14.2rem',
        '2-h-22.3': '22.3125rem 22.3125rem',
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
