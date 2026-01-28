import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../../pages/Profile/ProfilePage";
import { TestsPage } from "../../pages/Tests/TestsPage";
import { TestPage } from "../../pages/Test/TestPage";
import { ProtectedRoute } from "./ProtectedRoute";
import type { AuthUser } from "../../shared/types/auth";
import { auth, profile, test, tests } from "../../shared/config/routes";
import { AuthPage } from "../../pages/Auth/AuthPage";

export type HomeProps = {
  user: AuthUser | null;
};

export const AppRouter = ({ user }: HomeProps) => {
  return (
    <Routes>
      <Route
        index
        element={
          user ? (
            <Navigate to={tests} replace />
          ) : (
            <Navigate to={auth} replace />
          )
        }
      />
      <Route path={auth} element={<AuthPage />} />
      <Route element={<ProtectedRoute user={user} redirectPath={auth} />}>
        <Route path={tests} element={<TestsPage />} />
        <Route path={profile} element={<ProfilePage />} />
        <Route path={`${test}/:id`} element={<TestPage />} />
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};
