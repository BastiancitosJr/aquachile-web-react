import { CustomFlowbiteTheme } from "flowbite-react";

export const appCustomTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      enterprise:
        "border border-transparent bg-aqcl-500 text-white focus:ring-4 focus:ring-aqcl-400 enabled:hover:bg-aqcl-700",
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
};
