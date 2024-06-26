import useAxios from "../../api/hooks/useAxios";
import { AuthDto } from "../dtos/auth-dto";

const useLoginRequest = () => {
  const { post } = useAxios();

  const loginRequest = (form: AuthDto) => post("auth/login", form);

  return loginRequest;
};

export default useLoginRequest;
