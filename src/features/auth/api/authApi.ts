import { AUTH_USER, USERS_DB } from "./../../../shared/config/storageKeys";
import type { AuthUser, User } from "../../../shared/types/auth";

const getNextUserId = (users: User[]): number => {
  if (users.length === 0) return 1;

  const maxId = users.reduce(
    (max, u) => (u.id > max ? u.id : max),
    users[0].id,
  );
  return maxId + 1;
};

const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_DB, JSON.stringify(users));
};

const getUsers = (): User[] => {
  const raw = localStorage.getItem(USERS_DB);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as User[];
  } catch {
    localStorage.removeItem(USERS_DB);
    return [];
  }
};

export const getAuthUser = (): AuthUser | null => {
  const raw = localStorage.getItem(AUTH_USER);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    localStorage.removeItem(AUTH_USER);
    return null;
  }
};

export const setAuthUser = (user: AuthUser): void => {
  localStorage.setItem(AUTH_USER, JSON.stringify(user));
};

export const clearAuthUser = (): void => {
  localStorage.removeItem(AUTH_USER);
};

export const register = (login: string, password: string): AuthUser => {
  const clearLogin = login.trim();
  const clearPassword = password.trim();
  if (clearLogin === "" || clearPassword === "") {
    throw new Error("INVALID_INPUT");
  } else {
    const users = getUsers();
    const exists = users.find((user) => user.login === clearLogin);
    if (exists) {
      throw new Error("LOGIN_TAKEN");
    } else {
      const newUser: User = {
        id: getNextUserId(users),
        login: clearLogin,
        password: clearPassword,
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      saveUsers(users);
      const authUser: AuthUser = { id: newUser.id, login: newUser.login };
      setAuthUser(authUser);
      return authUser;
    }
  }
};

export const login = (login: string, password: string): AuthUser => {
  const clearLogin = login.trim();
  const clearPassword = password.trim();
  const users = getUsers();
  const user = users.find(
    (u) => u.login === clearLogin && u.password === clearPassword,
  );
  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }
  const authUser: AuthUser = { id: user.id, login: user.login };
  setAuthUser(authUser);
  return authUser;
};

export const restorePassword = (login: string, newPassword: string): void => {
  const clearLogin = login.trim();
  const clearNewPassword = newPassword.trim();

  if (clearNewPassword === "") {
    throw new Error("INVALID_INPUT");
  }
  const users = getUsers();
  const user = users.find((u) => u.login === clearLogin);
  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }
  user.password = clearNewPassword;
  saveUsers(users);
};
