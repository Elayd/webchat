import { Navigate, Outlet } from "react-router-dom";

import useUserStore, {
  userInfoSelector,
} from "@/common/store/UserSlice/user.ts";

export const PrivateWrapper = () => {
  const user = useUserStore(userInfoSelector);

  return user ? <Outlet /> : <Navigate to="/auth" />;
};
