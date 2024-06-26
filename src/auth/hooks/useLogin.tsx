import { JWTPayload } from "../../api/constants/jwt-payload";
import useStorage from "../../common/hooks/useStorage";
import { jwtDecode } from "jwt-decode";

const useTokenStore = () => {
  const { setToken, setUsername } = useStorage();

  const setTokenState = (newToken: string) => {
    const { name } = jwtDecode<JWTPayload>(newToken);
    setToken(newToken);
    setUsername(name);
  };

  return { setToken: setTokenState };
};

export default useTokenStore;
