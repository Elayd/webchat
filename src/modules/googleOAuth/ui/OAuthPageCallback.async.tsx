
import { lazy, Suspense } from "react";
import {Spinner} from "@/common/ui/Spinner/Spinner.tsx";

const OAuthPageCallbackPage = lazy(() => import("./OAuthPageCallback.tsx"));

export const OAuthPageCallbackPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <OAuthPageCallbackPage />
  </Suspense>
);
