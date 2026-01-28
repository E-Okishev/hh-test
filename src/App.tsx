import { useState } from "react";
import "./App.css";
import { AppRouter } from "./app/router/AppRouter";
import { Header } from "./entities/Header/Header.tsx";
import type { AuthUser } from "./shared/types/auth.ts";
import { AUTH_USER } from "./shared/config/storageKeys.ts";

const getInitialUser = (): AuthUser | null => {
  const raw = window.localStorage.getItem(AUTH_USER);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
};

function App() {
  const [user, setUser] = useState<AuthUser | null>(() => getInitialUser());

  const handleLogin = () => {
    const userData = { id: "1", name: "robin" };
    window.localStorage.setItem(AUTH_USER, JSON.stringify(userData));
    setUser(userData);
  };
  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_USER);

    setUser(null);
  };

  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      <Header />
      <AppRouter user={user} />
    </>
  );
}

export default App;
