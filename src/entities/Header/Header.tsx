import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { Button } from "../Components/Button/button";
import { profile } from "../../shared/config/routes";
import type { AuthUser } from "../../shared/types/auth";

type HeaderProps = {
  user: AuthUser | null;
};

export const Header = ({ user }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoText}>Тесты с hh</span>
      </div>
      <nav className={styles.nav}>
        {/* <NavLink
          className={({ isActive }) =>
            [styles.navLink, isActive && styles.navLink_active].join(" ")
          }
          to="/auth"
        >
          Авторизация
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            [styles.navLink, isActive && styles.navLink_active].join(" ")
          }
          to="/tests"
        >
          Тесты
        </NavLink>

        <Button type="profile" onClick={() => navigate(profile)}>
          {user ? user.login : "Профиль"}
        </Button>
      </nav>
    </header>
  );
};
