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
              "blue": "#002B5B",
              "lightblue": "#3F72AF"
          }
      },
    },
    safelist: [
        "top-[14.6rem]",
        "top-[16.6rem]",
        "top-[18.1rem]",
        "top-[18.3rem]",
        "w-[6rem]",
        "w-[7.5rem]",
        "w-[8rem]"
    ],
    plugins: [],
  }
  