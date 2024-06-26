import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import RequireAuth from "./RequireAuth";
import { homePath, loginPath } from "./routes-paths";
import { authRolesArray } from "../../api/constants/roles";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../../home/pages/HomePage";

const Router = createBrowserRouter([
  {
    path: homePath,
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: loginPath,
        element: <div>Login Path</div>,
      },
      {
        element: <RequireAuth roles={authRolesArray} />,
        children: [
          {
            path: homePath,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

export default Router;

// <div>Login Path</div>
