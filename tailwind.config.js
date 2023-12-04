/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

