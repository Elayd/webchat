import useUserStore, {
  getUserInfoSelector,
  isLoadingGetUserInfoSelector,
} from "@/common/store/UserSlice/user.ts";
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
