const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--color-primary) / 1)",
      white: "hsl(var(--color-white) / 1)",
      light: "hsl(var(--color-light) / 1)",
      accentLight: "hsl(var(--color-accentLight) / 1)",
      dark: "hsl(var(--color-dark) / 1)",
      accentDark: "hsl(var(--color-accentDark) / 1)",
    },
  },
  plugins: [],
};
