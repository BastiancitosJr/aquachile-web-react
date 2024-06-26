import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./common/router/Router.tsx";
import { Flowbite } from "flowbite-react";
import { appCustomTheme } from "./common/theme/app-custom-theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite theme={{ theme: appCustomTheme }}>
      <RouterProvider router={Router} />
    </Flowbite>
  </React.StrictMode>
);
