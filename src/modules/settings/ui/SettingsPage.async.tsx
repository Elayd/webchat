import { lazy, Suspense } from "react";

import SettingsPageFallback from "./SettingsPageFallback.tsx";

const SettingsPage = lazy(() => import("./SettingsPage.tsx"));

export const SettingsPageAsync = () => (
  <Suspense fallback={<SettingsPageFallback />}>
    <SettingsPage />
  </Suspense>
);
