import useUserStore, { isAuthSelector } from "@/app/store/UserSlice/user";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateWrapper = () => {
  const isAuth = useUserStore(isAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
};
