import { lazy, Suspense } from "react";

import {Spinner} from "@/common/ui/Spinner/Spinner.tsx";

const ChatPage = lazy(() => import("./ChatPage.tsx"));

export const ChatPageAsync = () => (
  <Suspense fallback={<Spinner className="text-gray-300" size="large" />}>
    <ChatPage />
  </Suspense>
);
