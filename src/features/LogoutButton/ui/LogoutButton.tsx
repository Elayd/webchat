import { Button } from "@/shared/ui/Button/button";
import useAuthStore, { setAuthSelector } from "@/app/store/AuthSlice/auth";

export function LogoutButton() {
  const setAuth = useAuthStore(setAuthSelector);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuth(false);
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
