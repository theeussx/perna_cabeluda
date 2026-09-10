/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        coal: "#0F0E0C",
        panel: "#15140F",
        bone: "#D6C7A1",
        paper: "#EFE9D8",
        stone: "#A39C86",
        blood: "#8A1E16",
        bloodsoft: "#C4503F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Libre Baskerville"', "Georgia", "serif"],
        display: ['"Libre Baskerville"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
