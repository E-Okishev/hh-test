import { useState } from "react";
import { RegisterForm } from "./Register";
import type { AuthUser } from "../../shared/types/auth";
import { LoginForm } from "./Login";
import { RestoreForm } from "./Restore";
import { Button } from "../../entities/Components/Button/button";
import { Title } from "../../entities/Components/Title";
import style from "./style.module.css";

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
    <div className={style.authPage}>
      <div className={style.authForm}>
        <Title level={1}>{modeTitle[mode]}</Title>
        {mode === "register" && <RegisterForm onAuth={onAuth} />}
        {mode === "login" && <LoginForm onAuth={onAuth} />}
        {mode === "restore" && <RestoreForm onSuccess={onSuccess} />}
        <div className={style.linkBlock}>
          {mode === "register" && (
            <>
              <Button onClick={() => setMode("login")} type="link">
                Уже есть аккаунт? Войти
              </Button>

              <Button type="link" onClick={() => setMode("restore")}>
                Забыли пароль?
              </Button>
            </>
          )}
          {mode === "login" && (
            <>
              <Button type="link" onClick={() => setMode("register")}>
                Нет аккаунта? Регистрация
              </Button>
              <Button type="link" onClick={() => setMode("restore")}>
                Забыли пароль?
              </Button>
            </>
          )}
          {mode === "restore" && (
            <>
              <Button type="link" onClick={() => setMode("register")}>
                Нет аккаунта? Регистрация
              </Button>
              <Button type="link" onClick={() => setMode("login")}>
                Уже есть аккаунт? Войти
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
