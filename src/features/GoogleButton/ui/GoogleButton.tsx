import { Button } from "@/shared/ui/Button/Button";
import { useCallback } from "react";

export function GoogleButton() {
  const handleGoogleOAuth = useCallback(() => {
    window.location.assign(import.meta.env.VITE_GOOGLE_URL);
  }, []);

  return (
    <Button
      type="button"
      size="lg"
      className="mt-4  w-full rounded-xl"
      onClick={handleGoogleOAuth}
    >
      LOGIN BY GOOGLE
    </Button>
  );
}
