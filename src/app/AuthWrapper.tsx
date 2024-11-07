import useUserStore, {
  getUserInfoSelector,
  isLoadingGetUserInfoSelector,
} from "./store/UserSlice/user";
import { useEffect } from "react";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const isLoading = useUserStore(isLoadingGetUserInfoSelector);
  const getUserInfo = useUserStore(getUserInfoSelector);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  if (isLoading) return <div>Loading...</div>;

  return children;
}
