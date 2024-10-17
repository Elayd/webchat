import useAuthStore, {
  checkAuthSelector,
  isLoadingCheckAuthSelector,
} from "@/store/auth";
import { ReactNode, useEffect } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const isLoading = useAuthStore(isLoadingCheckAuthSelector);
  const checkAuth = useAuthStore(checkAuthSelector);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) return <div>Loading...</div>;

  return children;
}
