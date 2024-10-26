import { Spinner } from "@/shared/ui/Spinner/Spinner";
import { lazy, Suspense } from "react";

const AuthPage = lazy(() => import("./Auth"));

export const AuthPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <AuthPage />
  </Suspense>
);
