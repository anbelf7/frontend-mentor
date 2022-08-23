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
      },
    },
  },
  plugins: [
    require('tailwindcss-labeled-groups')(['custom', '1' /* RENAME ME! */]),
  ],
};
