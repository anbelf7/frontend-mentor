/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        outfit: ['Outfit', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-labeled-groups')(['custom', '1' /* RENAME ME! */]),
  ],
};
