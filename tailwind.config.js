/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], //enter the path of the doc, on which
  //the Tailwind CSS styling will be applied.
  theme: {
    screens: {
      sm: "280px",
      md: "380px",
    },
    extend: {},
  },
  plugins: [],
}

