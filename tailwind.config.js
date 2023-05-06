/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      fontFamily: {
        "metropolis": ["Metropolis", "sans-serif"]
      },
      extend: {
          colors: {
              "white": "#F9F5EB",
              "grey": "#E4DCCF",
              "red": "#EA5455",
              "blue": "#002B5B"
          }
      },
    },
    plugins: [],
  }
  