import { Button } from "@/shared/ui/Button/Button";
import useUserStore, { setAuthSelector } from "@/app/store/UserSlice/user";
import { logoutApi } from "../model/api/api";

export function LogoutButton() {
  const setAuth = useUserStore(setAuthSelector);
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
