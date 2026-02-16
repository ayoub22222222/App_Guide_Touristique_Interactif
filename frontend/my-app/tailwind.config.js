/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inria Serif", "serif"],
        sans: ["Nunito", "sans-serif"]
      },
      colors: {
        primary: "#F5F5F5",
        secondary: "#FF9100",
        dark: "#151414",
        card: "#D9D9D9"
      }
    },
  },
  plugins: [],
}

