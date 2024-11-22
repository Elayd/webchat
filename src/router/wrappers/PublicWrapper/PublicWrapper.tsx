import { Navigate, Outlet } from "react-router-dom";

import useUserStore, {
  userInfoSelector,
} from "@/common/store/UserSlice/user.ts";

export const PublicWrapper = () => {
  const user = useUserStore(userInfoSelector);
  return user ? <Navigate to="/chat" /> : <Outlet />;
};
