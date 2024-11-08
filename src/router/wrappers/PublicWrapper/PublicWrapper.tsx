import { Navigate, Outlet } from "react-router-dom";

import useUserStore, { isAuthSelector } from "@/common/store/UserSlice/user.ts";

export const PublicWrapper = () => {
  const isAuth = useUserStore(isAuthSelector);
  return isAuth ? <Navigate to="/chat" /> : <Outlet />;
};
