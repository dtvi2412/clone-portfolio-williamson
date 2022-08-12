/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#303030',
        secondary: '#ACACBE',
        'green-cyan': '#1abc9c',
      },
      keyframes: {
        'open-nav': {
          '0%': {
            height: 0,
          },
          '100%': {
            height: '205px',
          },
        },
        'close-nav': {
          '0%': {
            height: '205px',
          },
          '100%': {
            height: 0,
          },
        },
      },
      animation: {
        'open-nav': 'open-nav 0.25s ease-in-out',
        'close-nav': 'close-nav 0.25s ease-in-out',
      },
    },
  },
  plugins: [],
};
