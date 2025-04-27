/** @type {import('tailwindcss').Config} */
import { designTokens } from "./src/designToken.js"; // Import the design tokens

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
      },

      colors: {
        ...designTokens.colors,
      },

      fontSize: {
        //  ...designTokens.fontSize,
      },

      spacing: {
        ...designTokens.spacing,
      },
      borderRadius: {
        ...designTokens.borderRadius,
      },
      fontWeight: {
        ...designTokens.fontWeight,
      },
    },
  },
  plugins: [],
};
