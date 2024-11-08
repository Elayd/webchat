import { lazy, Suspense } from "react";
import {Spinner} from "@/common/ui/Spinner/Spinner.tsx";

const SettingsPage = lazy(() => import("./SettingsPage.tsx"));

export const SettingsPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <SettingsPage />
  </Suspense>
);
