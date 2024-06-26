import { JWTPayload } from "../../api/constants/jwt-payload";
import useStorage from "../../common/hooks/useStorage";
import { jwtDecode } from "jwt-decode";

const useTokenStore = () => {
  const { setToken, setUsername } = useStorage();

  const setTokenState = (newToken: string) => {
    const { username } = jwtDecode<JWTPayload>(newToken);
    setToken(newToken);
    setUsername(username);
  };

  return { setToken: setTokenState };
};

export default useTokenStore;
