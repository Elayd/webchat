import { Navigate, Outlet } from "react-router-dom";
import useUserStore, {isAuthSelector} from "@/common/store/UserSlice/user.ts";

export const PrivateWrapper = () => {
  const isAuth = useUserStore(isAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
};
