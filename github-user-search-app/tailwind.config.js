/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // for toggling dark mode manually
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
}


