import { logoutAllOtherDevicesLogout } from "../api/api.ts";
import {Button} from "@/common/ui/Button/Button.tsx";

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
