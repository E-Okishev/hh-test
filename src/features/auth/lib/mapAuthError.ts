const errorMessages: Record<string, string> = {
  LOGIN_TAKEN: "Логин занят",
  INVALID_INPUT: "Заполните поля корректно",
  INVALID_CREDENTIALS: "Неверный логин или пароль",
  USER_NOT_FOUND: "Пользователь не найден",
};

export const mapAuthError = (error: unknown): string => {
  if (error instanceof Error) {
    return errorMessages[error.message] || "Неизвестная ошибка";
  }
  return "Неизвестная ошибка";
};
