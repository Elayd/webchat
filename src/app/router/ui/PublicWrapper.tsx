import useAuthStore, { isAuthSelector } from "@/app/store/AuthSlice/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PublicWrapper = () => {
  const isAuth = useAuthStore(isAuthSelector);
  return isAuth ? <Navigate to="/chat" /> : <Outlet />;
};
