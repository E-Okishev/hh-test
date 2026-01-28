import { Navigate, Outlet } from "react-router-dom";
import type { AuthUser } from "../../shared/types/auth";

type ProtectedRouteProps = {
  user: AuthUser | null;
  redirectPath?: string;
};

export const ProtectedRoute = ({
  user,
  redirectPath = "/",
}: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
