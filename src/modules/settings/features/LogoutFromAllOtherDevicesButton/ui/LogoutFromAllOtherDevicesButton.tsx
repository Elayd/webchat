import { memo } from "react";

import { Button } from "@/common/ui/Button/Button.tsx";

interface LogoutFromAllOtherDevicesButtonProps {
  handleLogout: () => void;
}
export const LogoutFromAllOtherDevicesButton = memo(
  (props: LogoutFromAllOtherDevicesButtonProps) => {
    const { handleLogout } = props;
    return (
      <Button size="sm" onClick={handleLogout}>
        Logout from all other devices
      </Button>
    );
  }
);
