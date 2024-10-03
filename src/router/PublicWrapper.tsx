import useAuthStore, {
  isAuthSelector,
  isLoadingCheckAuthSelector,
} from "@/store/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PublicWrapper = () => {
  const isAuth = useAuthStore(isAuthSelector);
  const isLoading = useAuthStore(isLoadingCheckAuthSelector);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return isAuth ? <Navigate to="/chat" /> : <Outlet />;
};
