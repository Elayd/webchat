import { lazy, Suspense } from "react";

const ChatPage = lazy(() => import("./ChatPage"));

export const ChatPageAsync = () => (
  <Suspense fallback={"...."}>
    <ChatPage />
  </Suspense>
);
