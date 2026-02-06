import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { RestoreFormValues } from "../../shared/types/auth";
import { restorePassword } from "../../features/auth/api/authApi";
import { mapAuthError } from "../../features/auth/lib/mapAuthError";
import { validateRestore } from "../../features/auth/lib/validation";
import style from "./style.module.css";
import { Button } from "../../entities/Components/Button/button";

type FieldErrors = Partial<Record<keyof RestoreFormValues, string>>;
type FormError = string | null;

const initialValues: RestoreFormValues = {
  login: "",
  newPassword: "",
};

type RestoreFormProps = {
  onSuccess: () => void;
};

export const RestoreForm = ({ onSuccess }: RestoreFormProps) => {
  const [values, setValues] = useState<RestoreFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<FormError>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onChange =
    (field: keyof RestoreFormValues) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setFieldErrors((prev) => ({ ...prev, [field]: "" }));
      setFormError(null);
    };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateRestore(values);
    const hasErrors = Object.values(errors).some(Boolean);

    if (hasErrors) {
      setFieldErrors(errors);
      return;
    }

    try {
      restorePassword(values.login, values.newPassword);
      setSuccessMessage("Пароль успешно изменен. Войдите с новыми данными.");
    } catch (err) {
      setFormError(mapAuthError(err));
    }
  };

  return (
    <>
      {successMessage ? (
        <div>
          <p>{successMessage}</p>
          <button type="button" onClick={onSuccess}>
            Войти
          </button>
        </div>
      ) : (
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
              placeholder="Введите логин"
              value={values.login}
              onChange={onChange("login")}
              autoComplete="username"
            />
            {fieldErrors.login && (
              <div className={style.error}>{fieldErrors.login}</div>
            )}
          </div>

          <div className={style.inputBlock}>
            <label className={style.label} htmlFor="newPassword">
              Новый пароль
            </label>
            <input
              className={style.input}
              id="newPassword"
              type="password"
              placeholder="Придумайте новый пароль"
              value={values.newPassword}
              onChange={onChange("newPassword")}
              autoComplete="new-password"
            />
            {fieldErrors.newPassword && (
              <div className={style.error}>{fieldErrors.newPassword}</div>
            )}
          </div>

          <Button type="login" buttonType="submit">
            Восстановить пароль
          </Button>
        </form>
      )}
    </>
  );
};
