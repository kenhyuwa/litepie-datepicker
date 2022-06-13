const path = require('path');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './docs/public/index.html',
    './docs/src/*.{vue,js,ts,jsx,tsx}',
    path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        orange: colors.orange,
        'light-blue': colors.sky,
        'litepie-primary': colors.emerald,
        'litepie-secondary': colors.coolGray
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      opacity: {
        85: '0.85'
      }
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: []
};
