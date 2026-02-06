import style from "./button.module.css";

type buttonProps = {
  children: string;
  type: "login" | "profile" | "link";
  buttonType?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  type,
  buttonType = "button",
  disabled,
  onClick,
}: buttonProps) => {
  const baseClass = style.button;
  const dynamicClass =
    type === "login"
      ? style.loginButton
      : type === "link"
        ? style.linkButton
        : style.profileButton;

  return (
    <button
      className={`${baseClass} ${dynamicClass} ${disabled ? style.disabled : ""}`}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
