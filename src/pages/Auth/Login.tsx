import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { LoginFormValues } from "../../shared/types/auth";
import { login } from "../../features/auth/api/authApi";
import { mapAuthError } from "../../features/auth/lib/mapAuthError";
import type { AuthUser } from "../../shared/types/auth";
import { useNavigate } from "react-router-dom";
import { tests } from "../../shared/config/routes";
import { validate } from "../../features/auth/lib/validation";

type FieldErrors = Partial<Record<keyof LoginFormValues, string>>;
type FormError = string | null;
type LoginFormProps = {
  onAuth: (authUser: AuthUser) => void;
};

const initialValues: LoginFormValues = {
  login: "",
  password: "",
};

export const LoginForm = ({ onAuth }: LoginFormProps) => {
  const [values, setValues] = useState<LoginFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<FormError>(null);

  const navigate = useNavigate();

  const onChange =
    (field: keyof LoginFormValues) => (e: ChangeEvent<HTMLInputElement>) => {
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
      const authUser = login(values.login, values.password);
      onAuth(authUser);
      navigate(tests);
    } catch (err) {
      setFormError(mapAuthError(err));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {formError && <div>{formError}</div>}

        <div>
          <label htmlFor="login">Логин</label>
          <input
            id="login"
            type="text"
            placeholder="Введите логин"
            value={values.login}
            onChange={onChange("login")}
            autoComplete="username"
          />
          {fieldErrors.login && <div>{fieldErrors.login}</div>}
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            value={values.password}
            onChange={onChange("password")}
            autoComplete="current-password"
          />
          {fieldErrors.password && <div>{fieldErrors.password}</div>}
        </div>

        <button type="submit">Войти</button>
      </form>
    </>
  );
};
