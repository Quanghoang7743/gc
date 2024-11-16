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
        'slow-blink': 'blink 2s ease-in-out infinite',
        // Adjust the speed here
      },

      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.1' },
        },
      },

      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }



    },
  },
  plugins: [nextui() ,require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

