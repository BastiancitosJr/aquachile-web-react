import { useNavigate } from "react-router-dom";
import { JWTPayload } from "../../api/constants/jwt-payload";
import useStorage from "../../common/hooks/useStorage";
import { jwtDecode } from "jwt-decode";
import { homePath } from "../../common/router/routes-paths";

const useSuccessLogin = () => {
  const { setAuthentication } = useStorage();
  const navigate = useNavigate();

  const setTokenState = (newToken: string) => {
    const { role, role_id } = jwtDecode<JWTPayload>(newToken);
    setAuthentication(newToken, role, role_id);
    navigate(homePath);
  };

  return { setToken: setTokenState };
};

export default useSuccessLogin;
