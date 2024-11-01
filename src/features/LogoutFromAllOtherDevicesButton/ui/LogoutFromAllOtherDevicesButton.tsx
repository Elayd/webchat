import { Button } from "@/shared/ui/Button/Button";
import { logoutAllOtherDevicesLogout } from "../model/api/api";

export function LogoutFromAllOtherDevicesButton() {
  const handleAllOtherDevicesLogout = async () => {
    // Сделать квери и показывать сообщение
    await logoutAllOtherDevicesLogout();
  };
  return (
    <Button size="sm" onClick={handleAllOtherDevicesLogout}>
      Logout from all other devices
    </Button>
  );
}
