const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./docs/public/index.html', './docs/src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        'light-blue': colors.lightBlue,
        'litepie-primary': colors.lightBlue,
        'litepie-secondary': colors.coolGray
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
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
//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
