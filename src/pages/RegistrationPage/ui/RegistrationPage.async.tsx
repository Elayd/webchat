import { Spinner } from "@/shared/ui/Spinner/Spinner";
import { lazy, Suspense } from "react";

const RegistrationPage = lazy(() => import("./RegistrationPage"));

export const RegistrationPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <RegistrationPage />
  </Suspense>
);
