import { useState } from "react";
import { RegisterForm } from "./Register";
import type { AuthUser } from "../../shared/types/auth";
import { LoginForm } from "./Login";
import { RestoreForm } from "./Restore";

export type AuthMode = "register" | "login" | "restore";
type AuthPageProps = {
  onAuth: (authUser: AuthUser) => void;
};

const modeTitle: Record<AuthMode, string> = {
  register: "Регистрация",
  login: "Вход",
  restore: "Восстановление пароля",
};

export const AuthPage = ({ onAuth }: AuthPageProps) => {
  const [mode, setMode] = useState<AuthMode>("register");

  const onSuccess = (): void => setMode("login");
  return (
    <>
      <h1>{modeTitle[mode]}</h1>
      {mode === "register" && <RegisterForm onAuth={onAuth} />}
      {mode === "login" && <LoginForm onAuth={onAuth} />}
      {mode === "restore" && <RestoreForm onSuccess={onSuccess} />}
      <div>
        {mode === "register" && (
          <>
            <button type="button" onClick={() => setMode("login")}>
              Уже есть аккаунт? Войти
            </button>
            <button type="button" onClick={() => setMode("restore")}>
              Забыли пароль?
            </button>
          </>
        )}
        {mode === "login" && (
          <>
            <button type="button" onClick={() => setMode("register")}>
              Нет аккаунта? Регистрация
            </button>
            <button type="button" onClick={() => setMode("restore")}>
              Забыли пароль?
            </button>
          </>
        )}
        {mode === "restore" && (
          <>
            <button type="button" onClick={() => setMode("register")}>
              Нет аккаунта? Регистрация
            </button>
            <button type="button" onClick={() => setMode("login")}>
              Уже есть аккаунт? Войти
            </button>
          </>
        )}
      </div>
    </>
  );
};
