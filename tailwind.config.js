const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#10253F",
          100: "#11335c",
          200: "#FF6F1E",
          300: "#e0690d",
          400: "#5E8E89",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
