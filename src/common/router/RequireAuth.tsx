import { Navigate, Outlet, useLocation } from "react-router-dom";
import { homePath, loginPath } from "./routes-paths";

interface Props {
  roles?: number[];
}
const RequireAuth = ({ roles }: Props) => {
  const location = useLocation();
  const token = "1";
  const role = 3;

  if (!token) {
    return <Navigate to={loginPath} state={{ from: location }} />;
  }
  if (roles && !roles.includes(role)) {
    return <Navigate to={homePath} />;
  }

  return <Outlet />;
};

export default RequireAuth;
