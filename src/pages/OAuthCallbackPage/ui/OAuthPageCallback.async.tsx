import { lazy, Suspense } from "react";

const OAuthPageCallbackPage = lazy(() => import("./OAuthPageCallback"));

export const OAuthPageCallbackPageAsync = () => (
  <Suspense fallback={"...."}>
    <OAuthPageCallbackPage />
  </Suspense>
);
