import { useState } from "react";
import "./App.css";
import { AppRouter } from "./app/router/AppRouter";
import { Header } from "./entities/Header/header";
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

  const onAuth = (authUser: AuthUser) => {
    setUser(authUser);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_USER);

    setUser(null);
  };

  return (
    <>
      {user && <button onClick={handleLogout}>Sign Out</button>}
      <Header />
      <AppRouter user={user} onAuth={onAuth} />
    </>
  );
}

export default App;
