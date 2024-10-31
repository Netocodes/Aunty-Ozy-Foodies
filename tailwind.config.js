/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/tw-elements/css/**/*.css",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("./tw-elements/plugin.cjs")],
};
