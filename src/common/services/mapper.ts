import { LoginResponseDto } from "../../auth/dtos/login-response-dto";
import { LoginResponse } from "../../auth/models/login-response";

export const loginResponseMapper = (
  responseDto: LoginResponseDto
): LoginResponse => {
  return {
    accessToken: responseDto.access_token,
    tokenType: responseDto.token_type,
    expiresIn: responseDto.expires_in,
  };
};
