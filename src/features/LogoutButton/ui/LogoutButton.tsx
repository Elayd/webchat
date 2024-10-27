import { Button } from "@/shared/ui/Button/Button";
import useAuthStore, { setAuthSelector } from "@/app/store/AuthSlice/auth";
import { logoutApi } from "../model/api/api";

export function LogoutButton() {
  const setAuth = useAuthStore(setAuthSelector);
  const handleLogout = async () => {
    await logoutApi();
    setAuth(false);
  };
  return (
    <Button size="sm" onClick={handleLogout}>
      Logout
    </Button>
  );
}
