/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
            "metropolis": ["Metropolis", "serif"]
        },
        colors: {
            "white": "#FFFFFC",
            "grey": "#F1F2F6",
            "red": "#E63946",
            "blue": "#002B5B",
            "lightblue": "#3F72AF"
        }
      },
    },
    safelist: [
        "h-[6rem]",
        "h-[7.5rem]",
        "h-[8rem]",
        "bottom-[0.6rem]",
        "bottom-[0.75rem]",
        "bottom-[0.8rem]"
    ],
    plugins: [],
  }
  