import { lazy, Suspense } from "react";

const RegistrationPage = lazy(() => import("./RegistrationPage"));

export const RegistrationPageAsync = () => (
  <Suspense fallback={"...."}>
    <RegistrationPage />
  </Suspense>
);
