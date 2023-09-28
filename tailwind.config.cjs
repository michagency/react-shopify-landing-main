/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0D1214",
          200: "#E0CEC6",
          300: "#0D1214"
        },
        black: {
          100: "#0D1214",
          200: "#424C4A",
          300: "#57605E",
          400: "#000",
          500: "#212326"
        },
        secondary: {
          200: "#E0CEC6"
        },
        tertiary: {
          200: "#E0CEC6",
          300: "#FBF7EC"
        }
      },
      fontFamily: {
        "head": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["DM Sans", "sans-serif"]
      },
      opacity: {
        "15": ".15"
      }
    },
  },
  plugins: [],
}
