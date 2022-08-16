/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        primary: '#303030',
        secondary: '#ACACBE',
        'green-cyan': '#1abc9c',
      },
      keyframes: {
        'open-nav': {
          '0%': {
            height: 0,
            display: 'hidden',
          },
          '100%': {
            height: '205px',
            display: 'block',
          },
        },
        'close-nav': {
          '0%': {
            height: '205px',
            display: 'hidden',
          },
          '100%': {
            height: 0,
            display: 'block',
          },
        },
        'fixed-header': {
          '0%': {
            position: 'fixed',
            right: 0,
            left: 0,
            top: '-100%',
          },
          '100%': {
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
          },
        },
      },
      animation: {
        'open-nav': 'open-nav 0.25s ease-in-out',
        'close-nav': 'close-nav 0.25s ease-in-out',
        'fixed-header': 'fixed-header 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
};
