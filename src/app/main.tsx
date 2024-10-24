import { createRoot } from "react-dom/client";
import "@/shared/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import { AuthWrapper } from "./AuthWrapper.tsx";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </QueryClientProvider>
);
