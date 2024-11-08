import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateWrapper } from "./wrappers/PrivateWrapper/PrivateWrapper.tsx";
import { PublicWrapper } from "./wrappers/PublicWrapper/PublicWrapper.tsx";
import { ErrorBoundaryLayout } from "./wrappers/ErrorBoundary/ErrorBoundaryWrapper.tsx";
import { wrapCreateBrowserRouter } from "@sentry/react";
import {ChatPage} from "@/modules/chat";
import {SettingsPage} from "@/modules/settings";
import {SignUpPage} from "@/modules/signup";
import {OAuthPageCallbackPage} from "@/modules/googleOAuth";
import {SignInPage} from "@/modules/signin";


const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);

export const router = sentryCreateBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        element: <PrivateWrapper />,
        children: [
          {
            path: "/chat",
            element: <ChatPage />,
            children: [
              {
                path: ":id",
                element: <div className="text-white">Test</div>,
              },
            ],
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
        ],
      },
      {
        element: <PublicWrapper />,
        children: [
          {
            path: "/registration",
            element: <SignUpPage />,
          },
          {
            path: "/auth",
            element: <SignInPage />,
          },
        ],
      },
      {
        path: "/auth/callback",
        element: <OAuthPageCallbackPage />,
      },
    ],
  },

  { path: "*", element: <Navigate to="/chat" /> },
]);
