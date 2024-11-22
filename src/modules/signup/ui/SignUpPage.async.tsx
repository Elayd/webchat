import { lazy, Suspense } from "react";

import SignUpPageFallback from "./SignUpPageFallback.tsx";

const SignUpPage = lazy(() => import("./SignUpPage.tsx"));

export const SignUpPageAsync = () => (
  <Suspense fallback={<SignUpPageFallback />}>
    <SignUpPage />
  </Suspense>
);
