/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0.9375rem 1.875rem #0c1727, -0.9375rem 1.875rem #0c1727;',
      },
    },
  },
  plugins: [],
};
