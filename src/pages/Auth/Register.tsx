import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { RegisterFormValues } from "../../shared/types/auth";
import { register } from "../../features/auth/api/authApi";
import { mapAuthError } from "../../features/auth/lib/mapAuthError";
import type { AuthUser } from "../../shared/types/auth";
import { useNavigate } from "react-router-dom";
import { tests } from "../../shared/config/routes";
import { validate } from "../../features/auth/lib/validation";
import style from "./style.module.css";
import { Button } from "../../entities/Components/Button/button";

type FieldErrors = Partial<Record<keyof RegisterFormValues, string>>;
type FormError = string | null;
type RegisterFormProps = {
  onAuth: (authUser: AuthUser) => void;
};

const initialValues: RegisterFormValues = {
  login: "",
  password: "",
};

export const RegisterForm = ({ onAuth }: RegisterFormProps) => {
  const [values, setValues] = useState<RegisterFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<FormError>(null);

  const navigate = useNavigate();

  const onChange =
    (field: keyof RegisterFormValues) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setFieldErrors((prev) => ({ ...prev, [field]: "" }));
      setFormError(null);
    };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(values);
    const hasErrors = Object.values(errors).some(Boolean);

    if (hasErrors) {
      setFieldErrors(errors);
      return;
    }

    try {
      const authUser = register(values.login, values.password);
      onAuth(authUser);
      navigate(tests);
    } catch (err) {
      setFormError(mapAuthError(err));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className={style.form}>
        {formError && <div className={style.error}>{formError}</div>}

        <div className={style.inputBlock}>
          <label className={style.label} htmlFor="login">
            Логин
          </label>
          <input
            className={style.input}
            id="login"
            type="text"
            placeholder="Придумайте логин"
            value={values.login}
            onChange={onChange("login")}
            autoComplete="username"
          />
          {fieldErrors.login && (
            <div className={style.error}>{fieldErrors.login}</div>
          )}
        </div>

        <div className={style.inputBlock}>
          <label className={style.label} htmlFor="password">
            Пароль
          </label>
          <input
            className={style.input}
            id="password"
            type="password"
            placeholder="Придумайте пароль"
            value={values.password}
            onChange={onChange("password")}
            autoComplete="new-password"
          />
          {fieldErrors.password && (
            <div className={style.error}>{fieldErrors.password}</div>
          )}
        </div>

        <Button type="login" buttonType="submit">
          Зарегистрироваться
        </Button>
      </form>
    </>
  );
};
