/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2c7a7b',
        'secondary': '#ffc700',
      },
    },
  },
  plugins: [],
}