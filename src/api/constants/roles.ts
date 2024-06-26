export const ADMIN = 1;
export const ADMINISTRATIVE = 2;
export const SHIFT_MANAGER = 3;
export const OPERATOR = 4;
export const LINE = 5;

export const authRolesArray = [
  ADMIN,
  ADMINISTRATIVE,
  SHIFT_MANAGER,
  OPERATOR,
  LINE,
];

export type Role =
  | typeof ADMIN
  | typeof ADMINISTRATIVE
  | typeof SHIFT_MANAGER
  | typeof OPERATOR
  | typeof LINE;
