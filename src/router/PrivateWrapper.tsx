import useAuthStore, { isAuthSelector } from "@/store/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateWrapper = () => {
  const isAuth = useAuthStore(isAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
};
