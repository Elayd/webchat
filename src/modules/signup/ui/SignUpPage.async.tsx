import { Spinner } from "@/common/ui/Spinner/Spinner.tsx";
import { lazy, Suspense } from "react";

const SignUpPage = lazy(() => import("./SignUpPage.tsx"));

export const SignUpPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <SignUpPage />
  </Suspense>
);
