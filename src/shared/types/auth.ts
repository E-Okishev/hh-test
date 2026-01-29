export type AuthUser = { id: number; login: string };

export type User = {
  id: number;
  login: string;
  password: string;
  createdAt: string;
};

export type LoginFormValues = {
  login: string;
  password: string;
};

export type RegisterFormValues = LoginFormValues;

export type RestoreFormValues = {
  login: string;
  newPassword: string;
};
