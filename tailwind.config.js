const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        aqcl: {
          100: "#d1e3eb",
          200: "#a6c8d8",
          300: "#7baccc",
          400: "#4f91bf",
          500: "#10253F",
          600: "#0e2139",
          700: "#0c1c32",
          800: "#0a172b",
          900: "#081223",
        },
        aqclOrange: {
          100: "#ffe0cc",
          200: "#ffc299",
          300: "#ffa366",
          400: "#ff854d",
          500: "#FF6F1E",
          600: "#e6601b",
          700: "#cc5417",
          800: "#b34814",
          900: "#993d10",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
