import { lazy, Suspense } from "react";
import {Spinner} from "@/common/ui/Spinner/Spinner.tsx";

const SignInPage = lazy(() => import("./SignIn.tsx"));

export const SignInPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <SignInPage />
  </Suspense>
);
