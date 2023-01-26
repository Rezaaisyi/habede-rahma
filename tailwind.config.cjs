/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        kreme:"#E4E0DD",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        pastelblue: "#8BD4E7",
        pasteldblue: "#0F7E9B",
        pastelgreen: "#A2EAE0",
        pastelpink: "#F9ACBB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};