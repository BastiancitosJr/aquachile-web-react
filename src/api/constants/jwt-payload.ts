export interface JWTPayload {
  iss: string;

  iat: number;

  exp: number;

  nbf: number;

  jti: string;

  sub: string;

  prv: string;

  role: string;

  role_id: string;
}
