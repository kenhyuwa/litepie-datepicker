const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'litepie-primary': colors.indigo,
        'litepie-secondary': colors.coolGray
      }
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled'],
    }
  },
  plugins: []
};
//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
