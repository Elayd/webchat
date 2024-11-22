import { lazy, Suspense } from "react";

import SignInPageFallback from "./SignInFallback.tsx";

const SignInPage = lazy(() => import("./SignInPage.tsx"));

export const SignInPageAsync = () => (
  <Suspense fallback={<SignInPageFallback />}>
    <SignInPage />
  </Suspense>
);
