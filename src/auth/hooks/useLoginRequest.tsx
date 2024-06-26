import useAxios from "../../api/hooks/useAxios";
import { LoginRequestDto } from "../dtos/login-request-dto";

const useLoginRequest = () => {
  const { post } = useAxios();

  const loginRequest = (form: LoginRequestDto) => post("auth/login", form);

  return loginRequest;
};

export default useLoginRequest;
