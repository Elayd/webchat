import { createRoot } from "react-dom/client";
import "@/shared/styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRoutesFromChildren,
  matchRoutes,
  RouterProvider,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { router } from "./router/index.tsx";
import { AuthWrapper } from "./AuthWrapper.tsx";

import {
  init,
  browserTracingIntegration,
  replayIntegration,
  reactRouterV6BrowserTracingIntegration,
} from "@sentry/react";
import { useEffect } from "react";

init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  enabled: process.env.NODE_ENV === "production",
  integrations: [
    browserTracingIntegration(),
    replayIntegration({ maskAllText: true, blockAllMedia: true }),
    reactRouterV6BrowserTracingIntegration({
      useEffect: useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </QueryClientProvider>
);
