import { lazy, Suspense } from "react";

const AuthPage = lazy(() => import("./Auth"));

export const AuthPageAsync = () => (
  <Suspense fallback={"...."}>
    <AuthPage />
  </Suspense>
);
