import useUserStore, { isAuthSelector } from "@/app/store/UserSlice/user";
import { Navigate, Outlet } from "react-router-dom";

export const PublicWrapper = () => {
  const isAuth = useUserStore(isAuthSelector);
  return isAuth ? <Navigate to="/chat" /> : <Outlet />;
};
