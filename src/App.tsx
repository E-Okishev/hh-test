import { useState } from "react";
import "./App.css";
import { AppRouter } from "./app/router/AppRouter";
import { Header } from "./entities/Header/header";
import type { AuthUser } from "./shared/types/auth.ts";
import { Wrapper } from "./entities/Wrapper/index.tsx";
import { getAuthUser } from "./features/auth/api/authApi.ts";
import { AUTH_USER } from "./shared/config/storageKeys.ts";

function App() {
  const [user, setUser] = useState<AuthUser | null>(() => getAuthUser());

  const onAuth = (authUser: AuthUser) => {
    setUser(authUser);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_USER);

    setUser(null);
  };

  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header user={user} />
      <Wrapper>
        {user && <button onClick={handleLogout}>Sign Out</button>}
        <AppRouter user={user} onAuth={onAuth} />
      </Wrapper>
    </div>
  );
}

export default App;
