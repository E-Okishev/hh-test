import type {
  LoginFormValues,
  RestoreFormValues,
} from "./../../../shared/types/auth";
type FieldErrors = Partial<Record<keyof LoginFormValues, string>>;
type FieldErrorsRestore = Partial<Record<keyof RestoreFormValues, string>>;

export const validate = (v: LoginFormValues): FieldErrors => {
  const errors: FieldErrors = {};

  const login = v.login.trim();
  const password = v.password.trim();

  if (!login) errors.login = "Введите логин";

  if (!password) errors.password = "Введите пароль";
  else if (password.length < 6) errors.password = "Минимум 6 символов";

  return errors;
};

export const validateRestore = (v: RestoreFormValues): FieldErrorsRestore => {
  const errors: FieldErrorsRestore = {};

  const login = v.login.trim();
  const newPassword = v.newPassword.trim();
  if (!login) errors.login = "Введите логин";

  if (!newPassword) errors.newPassword = "Введите новый пароль";
  else if (newPassword.length < 6) errors.newPassword = "Минимум 6 символов";

  return errors;
};
