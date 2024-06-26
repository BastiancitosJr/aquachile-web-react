import useStorage from "../../common/hooks/useStorage";
import { useNavigate } from "react-router-dom";
import { loginPath } from "../../common/router/routes-paths";

const useLogout = () => {
  const { removeAuthentication } = useStorage();
  const navigate = useNavigate();

  const logout = () => {
    removeAuthentication();
    navigate(loginPath);
  };

  return logout;
};

export default useLogout;
