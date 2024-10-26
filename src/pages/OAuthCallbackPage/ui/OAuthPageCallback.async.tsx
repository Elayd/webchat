import { Spinner } from "@/shared/ui/Spinner/Spinner";
import { lazy, Suspense } from "react";

const OAuthPageCallbackPage = lazy(() => import("./OAuthPageCallback"));

export const OAuthPageCallbackPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <OAuthPageCallbackPage />
  </Suspense>
);
