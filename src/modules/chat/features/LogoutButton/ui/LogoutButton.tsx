import useUserStore, {setAuthSelector} from "@/common/store/UserSlice/user.ts";
import {Button} from "@/common/ui/Button/Button.tsx";

import { logoutApi } from "../api/api.ts";

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
