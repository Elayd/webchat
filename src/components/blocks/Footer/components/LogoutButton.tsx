import { Button } from "@/components/shared/button";
import useAuthStore, { setAuthSelector } from "@/store/auth";

export function LogoutButton() {
  const setAuth = useAuthStore(setAuthSelector);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuth(false);
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
