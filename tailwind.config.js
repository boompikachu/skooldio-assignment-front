module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "Prompt",
      },
      colors: {
        grapefruit: "#ff5a5a",
        warmgray: "#9b9b9b",
        greenishteal: "#2ecc71",
        mint: "#48b6a3",
        body: "#5f5f5f",
        body2: "#4a4a4a",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
