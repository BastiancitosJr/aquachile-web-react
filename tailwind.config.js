const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        aqcl: {
          100: "#e1e6eb",
          200: "#c3ccd6",
          300: "#a4b3c2",
          400: "#8699ad",
          500: "#10253F",
          600: "#4a5e76",
          700: "#344158",
          800: "#232c3b",
          900: "#12171d",
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
