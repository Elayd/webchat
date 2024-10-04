import useAuthStore from "@/store/auth";
import { ReactNode, useEffect } from "react";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { isLoading, checkAuth, isInit } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isInit || isLoading) return <div>Loading...</div>;

  return children;
}
