import { Navigate, Outlet, useLocation } from "react-router-dom";
import { homePath } from "./routes-paths";
import useUserInformation from "../../auth/hooks/useUserInformation";

const RequireGuest = () => {
  const location = useLocation();
  const { token, roleId, role } = useUserInformation();

  if (!token || !roleId || !role) {
    return <Outlet />;
  }

  return <Navigate to={homePath} state={{ from: location }} />;
};

export default RequireGuest;
