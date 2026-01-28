import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "blue" }
          }
          to="/auth"
        >
          Авторизация
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "blue" }
          }
          to="/tests"
        >
          Тесты
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "blue" }
          }
          to="/profile"
        >
          Профиль
        </NavLink>
      </nav>
    </header>
  );
};
