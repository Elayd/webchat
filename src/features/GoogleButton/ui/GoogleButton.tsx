import { Button } from "@/shared/ui/Button/button";
import { useCallback } from "react";

export function GoogleButton() {
  const handleGoogleOAuth = useCallback(() => {
    window.location.assign(import.meta.env.VITE_GOOGLE_URL);
  }, []);

  return (
    <Button
      type="button"
      size="lg"
      className="mt-4 bg-gray-800 border-b border-solid border-gray-500 w-full"
      onClick={handleGoogleOAuth}
    >
      LOGIN BY GOOGLE
    </Button>
  );
}
