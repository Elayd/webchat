import { lazy, Suspense } from "react";

import { Spinner } from "@/common/ui/Spinner/Spinner.tsx";

const SignUpPage = lazy(() => import("./SignUpPage.tsx"));

export const SignUpPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <SignUpPage />
  </Suspense>
);
