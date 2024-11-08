import { useCallback } from "react";

import {Button} from "@/common/ui/Button/Button.tsx";

export function GoogleButton() {
  const handleGoogleOAuth = useCallback(() => {
    window.location.assign(import.meta.env.VITE_GOOGLE_URL);
  }, []);

  return (
    <Button
      type="button"
      size="lg"
      className="mt-4 rounded-xl"
      onClick={handleGoogleOAuth}
    >
      LOGIN BY GOOGLE
    </Button>
  );
}
