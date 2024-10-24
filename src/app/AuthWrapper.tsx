import useAuthStore, {
  checkAuthSelector,
  isLoadingCheckAuthSelector,
} from "./store/AuthSlice/auth";
import { useEffect } from "react";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const isLoading = useAuthStore(isLoadingCheckAuthSelector);
  const checkAuth = useAuthStore(checkAuthSelector);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) return <div>Loading...</div>;

  return children;
}
