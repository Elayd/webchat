import { Spinner } from "@/shared/ui/Spinner/Spinner";
import { lazy, Suspense } from "react";

const SettingsPage = lazy(() => import("./SettingsPage"));

export const SettingsPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <SettingsPage />
  </Suspense>
);
