import useStorage from "../../common/hooks/useStorage";
import { useNavigate } from "react-router-dom";
import { loginPath } from "../../common/router/routes-paths";
import useAxios from "../../api/hooks/useAxios";

interface LogoutResponse {
  success: boolean;
}

const useLogout = () => {
  const { post } = useAxios();
  const { removeAuthentication } = useStorage();
  const navigate = useNavigate();

  const logout = async (): Promise<LogoutResponse> => {
    try {
      await post("auth/logout");
      removeAuthentication();
      navigate(loginPath);
      return { success: true };
    } catch (err) {
      return { success: false };
    }
  };

  return logout;
};

export default useLogout;
