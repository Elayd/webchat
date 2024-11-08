import "./index.css";

import {
  browserTracingIntegration,
  init,
  reactRouterV6BrowserTracingIntegration,
  replayIntegration,
} from "@sentry/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createRoutesFromChildren,
  matchRoutes,
  RouterProvider,
  useLocation,
  useNavigationType,
} from "react-router-dom";

import { router } from "@/router";

import {AuthWrapper} from "./AuthWrapper/AuthWrapper.tsx";

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
