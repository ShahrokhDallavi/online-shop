/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
      },
      fontFamily: {
        'DM Sans': 'DM Sans',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
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
  },
  plugins: [],
}