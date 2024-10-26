import { Spinner } from "@/shared/ui/Spinner/Spinner";
import { lazy, Suspense } from "react";

const ChatPage = lazy(() => import("./ChatPage"));

export const ChatPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <ChatPage />
  </Suspense>
);
