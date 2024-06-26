import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./common/router/Router.tsx";
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      enterprise:
        "border border-transparent bg-aqcl-500 text-white focus:ring-4 focus:ring-aqcl-400 enabled:hover:bg-aqcl-700",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite theme={{ theme: customTheme }}>
      <RouterProvider router={Router} />
    </Flowbite>
  </React.StrictMode>
);
