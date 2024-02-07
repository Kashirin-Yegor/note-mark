const tailwindcssTypography =  require('@tailwindcss/typography')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssTypography
  ],
}

