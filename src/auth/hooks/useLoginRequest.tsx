import useAxios from "../../api/hooks/useAxios";
import { loginResponseMapper } from "../../common/services/mapper";
import { LoginRequestDto } from "../dtos/login-request-dto";
import { LoginResponseDto } from "../dtos/login-response-dto";
import { LoginResponse } from "../models/login-response";

const useLoginRequest = () => {
  const { post } = useAxios();

  const loginRequest = async (
    form: LoginRequestDto
  ): Promise<LoginResponse> => {
    const responseDto: LoginResponseDto = await post("auth/login", form);
    return loginResponseMapper(responseDto);
  };

  return loginRequest;
};

export default useLoginRequest;
