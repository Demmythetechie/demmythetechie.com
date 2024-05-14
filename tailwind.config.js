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
        },
        title : {
          '0%' : { marginLeft: '-30px', opacit: '0' },
          '100%' : {marginLeft: '0px', opacity: '1'}
        },
        line : {
          '0%' : { width: '0px' },
          '100%' : { width: '200px'}
        },
        bg : {
          '0%' : { marginLeft: '500px', opacity: '0'},
          '100%' : { marginLeft: '0px', opacity: '1'}
        },
        underline : {
          '0%' : { width: '0%' },
          '100%' : {width: '12%'}
        }
      },
      animationDelay: {
        '2000': '2s',
        '1500': '1500ms'
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require("tailwindcss-animate"),
  ],
}

