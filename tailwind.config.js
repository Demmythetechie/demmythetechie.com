/** @type {import('tailwindcss').Config} */
import { guages } from './src/storage';
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu_Bold: ['Ubuntu-Bold'],
        Ubuntu_BoldItalic: ['Ubuntu-BoldItalic'],
        Ubuntu_Italic: ['Ubuntu-Italic'],
        Ubuntu_Light: ['Ubuntu-Light'],
        Ubuntu_LightItalic: ['Ubuntu-LightItalic'],
        Ubuntu_Medium: ['Ubuntu-Medium'],
        Ubuntu_MediumItalic: ['Ubuntu-MediumItalic'],
        Ubuntu_Regular: ['Ubuntu-Regular'],
      },
      keyframes: {
        rnd: {
          '0%': { strokeDashoffset: '0'},
          '100%': {strokeDashoffset: '50'},
        },
        para1 : {
          '0%': { marginBottom: '-20px', opacity: '0'},
          '100%': { marginBottom: '0px', opacity: '1'}
        },
        para2 : {
          '0%': { marginBottom: '-30px', opacity: '0'},
          '100%': { marginBottom: '0px', opacity: '1'}
        },
        para3 : {
          '0%': { marginBottom: '-250px', opacity: '0'},
          '100%': { marginBottom: '0px', opacity: '1'}
        }
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require("tailwindcss-animate"),
  ],
}

