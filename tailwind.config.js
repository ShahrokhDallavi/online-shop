/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      fontFamily: {
        'DM Sans': 'DM Sans',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primaryColor': '#FF5B00',
      'secondaryColor': '#11212D',
      'white': '#FFFFFF',
      'gray': '#EDEDED',
      'black': '#070707',
      'borderColor': '#CBCBCB',
      'error': '#BA0A08',
      'check': '#00D295',
    },
    extend: {},
  },
  plugins: [],
}