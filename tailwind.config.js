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
    extend: {
      animation: {
        'slow-blink': 'blink 3s ease-in-out infinite',
        // Adjust the speed here
      },

      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [nextui() ,require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

