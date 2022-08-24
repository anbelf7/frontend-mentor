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
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
        'soft-red': 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        'very-pale-orange': 'hsl(33, 100%, 98%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-labeled-groups')(['custom', '1' /* RENAME ME! */]),
  ],
};
