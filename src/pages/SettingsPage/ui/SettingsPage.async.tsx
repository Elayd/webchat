import { lazy, Suspense } from "react";

const SettingsPage = lazy(() => import("./SettingsPage"));

export const SettingsPageAsync = () => (
  <Suspense fallback={"...."}>
    <SettingsPage />
  </Suspense>
);
