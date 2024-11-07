import { nextui } from '@nextui-org/react';
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [nextui() ,require("tw-elements/plugin.cjs")],
  darkMode: "class"
}