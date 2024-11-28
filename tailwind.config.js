/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    'xs': '460px',
    'sm': '640px',
    // => @media (min-width: 640px) { ... }
    'md': '768px',
    // => @media (min-width: 768px) { ... }
    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '0.5rem',
      sm: '0',
    },
  },
  extend: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        100: "#F0EEED",
        200: "#F2F0F1",
      },
      star: "#FFC633",
    },

    fontFamily: {
      "titr": ["integral-bold", "sans-serif"],
      "titr-m": ["integral-medium", "sans-serif"],
      "satoshi-b": ["satoshi-bold", "sans-serif"],
      "satoshi-l": ["satoshi-light", "sans-serif"],
      "satoshi": ["satoshi-regular", "sans-serif"],
    },
  },
};
export const plugins = [];
