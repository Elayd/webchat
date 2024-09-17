import { Navigate, Outlet } from "react-router-dom";
import { useAuthCheck } from "./privateCheck/query";

export const PublicRouteWrapper = () => {
  const { isSuccess } = useAuthCheck();

  if (isSuccess) {
    return <Navigate to="/chat" />;
  }

  return <Outlet />;
};
