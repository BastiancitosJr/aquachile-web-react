import { JWTPayload } from "../../api/constants/jwt-payload";
import useStorage from "../../common/hooks/useStorage";
import { jwtDecode } from "jwt-decode";

const useSuccessLogin = () => {
  const { setAuthentication } = useStorage();

  const setTokenState = (newToken: string) => {
    const { role, role_id } = jwtDecode<JWTPayload>(newToken);
    setAuthentication(newToken, role, role_id);
  };

  return { setToken: setTokenState };
};

export default useSuccessLogin;
