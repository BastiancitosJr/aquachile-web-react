import { CustomFlowbiteTheme } from "flowbite-react";

export const appCustomTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      enterprise:
        "border border-transparent bg-aqcl-500 text-white focus:ring-4 focus:ring-aqcl-400 enabled:hover:bg-aqcl-700",
      enterpriseOrange:
        "border border-transparent bg-aqclOrange-500 text-white focus:ring-4 focus:ring-aqclOrange-400 enabled:hover:bg-aqclOrange-600",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          enterprise:
            "border-aqcl-500 bg-aqcl-50 text-aqcl-900 placeholder-aqcl-700 focus:border-aqcl-500 focus:ring-aqcl-500 dark:border-aqcl-400 dark:bg-aqcl-100 dark:focus:border-aqcl-500 dark:focus:ring-aqcl-500",
        },
      },
    },
  },
  spinner: {
    color: {
      enterprise: "fill-aqcl-500",
      enterpriseOrange: "fill-aqclOrange-500",
    },
    size: {
      "2xl": "w-16 h-16",
      "3xl": "w-32 h-32",
    },
  },
  radio: {
    root: {
      base: "h-4 w-4 border border-gray-300 text-aqclOrange-600 focus:ring-2 focus:ring-aqclOrange-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-aqclOrange-600 dark:focus:ring-aqclOrange-600",
    },
  },
  textarea: {
    colors: {
      enterprise:
        "border-aqcl-500 bg-aqcl-50 text-aqcl-900 placeholder-aqcl-700 focus:border-aqcl-500 focus:ring-aqcl-500 dark:border-aqcl-400 dark:bg-aqcl-100 dark:focus:border-aqcl-500 dark:focus:ring-aqcl-500",
    },
  },
};
