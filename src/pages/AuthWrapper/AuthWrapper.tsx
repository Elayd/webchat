import useAuthStore, {
  setAuthSelector,
  setIsLoadingCheckAuthSelector,
} from "@/store/auth";
import { useEffect } from "react";
import { useAuthCheck } from "./privateCheck/query";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const setAuth = useAuthStore(setAuthSelector);
  const setIsLoding = useAuthStore(setIsLoadingCheckAuthSelector);

  const { isSuccess, isLoading } = useAuthCheck();

  useEffect(() => {
    setIsLoding(isLoading);
    if (!isLoading) {
      if (isSuccess) {
        setAuth(true);
        setIsLoding(false);
      } else {
        setIsLoding(false);
      }
    }
  }, [isLoading, isSuccess, setAuth, setIsLoding]);

  return isLoading ? <div>Loading...</div> : children;
}
