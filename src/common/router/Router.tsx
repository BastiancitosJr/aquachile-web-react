import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import RequireAuth from "./RequireAuth";
import { dashboardPath, homePath, loginPath } from "./routes-paths";
import { authRolesArray } from "../../api/constants/roles";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../../home/pages/HomePage";
import LoginPage from "../../auth/pages/LoginPage";

const Router = createBrowserRouter([
  {
    path: homePath,
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: loginPath,
        element: <LoginPage />,
      },
      {
        element: <RequireAuth roles={authRolesArray} />,
        children: [
          {
            path: dashboardPath,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

export default Router;

// <div>Login Path</div>
