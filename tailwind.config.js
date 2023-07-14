/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        danger: '#eb445a',
      },
    },
  },
  plugins: [],
};
