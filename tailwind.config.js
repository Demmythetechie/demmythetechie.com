/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch_Bold: ['ChakraPetch-Bold'],
        ChakraPetch_BoldItalic: ['ChakraPetch-BoldItalic'],
        ChakraPetch_Italic: ['ChakraPetch-Italic'],
        ChakraPetch_Light: ['ChakraPetch-Light'],
        ChakraPetch_LightItalic: ['ChakraPetch-LightItalic'],
        ChakraPetch_Medium: ['ChakraPetch-Medium'],
        ChakraPetch_MediumItalic: ['ChakraPetch-MediumItalic'],
        ChakraPetch_Regular: ['ChakraPetch-Regular'],
        ChakraPetch_SemiBold: ['ChakraPetch-SemiBold'],
        ChakraPetch_SemiBoldItalic: ['ChakraPetch-SemiBoldItalic'],
      }
    },
  },
  plugins: [],
}

