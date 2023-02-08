/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      outlineWidth: {
        1: '1px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
