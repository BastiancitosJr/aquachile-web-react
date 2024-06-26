import { Navigate, Outlet, useLocation } from "react-router-dom";
import { homePath, loginPath } from "./routes-paths";
import useUserInformation from "../../auth/hooks/useUserInformation";

interface Props {
  roles?: string[];
}
const RequireAuth = ({ roles }: Props) => {
  const location = useLocation();
  const { token, roleId } = useUserInformation();

  if (!token) {
    return <Navigate to={loginPath} state={{ from: location }} />;
  }
  if (roles && !roles.includes(roleId)) {
    return <Navigate to={homePath} />;
  }

  return <Outlet />;
};

export default RequireAuth;
