import { createBrowserRouter, Navigate } from "react-router-dom";

import { PrivateWrapper } from "./PrivateWrapper";
import { AuthPage } from "@/pages/auth/Auth";
import { Chat } from "@/pages/chat/Chat";
import { OAuthPageCallback } from "@/pages/oauthCallback/OAuthPageCallback";
import { RegistrationPage } from "@/pages/registration/RegistrationPage";
import { Settings } from "@/pages/settings/Settings";
import { PublicWrapper } from "./PublicWrapper";
import { ErrorBoundaryLayout } from "@/pages/ErrorBoundary/ErrorBoundaryWrapper";

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        element: <PrivateWrapper />,
        children: [
          {
            path: "/chat",
            element: <Chat />,
            children: [
              {
                path: ":id",
                element: <div className="text-white">Test</div>,
              },
            ],
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
      {
        element: <PublicWrapper />,
        children: [
          {
            path: "/registration",
            element: <RegistrationPage />,
          },
          {
            path: "/auth",
            element: <AuthPage />,
          },
        ],
      },
      {
        path: "/auth/callback",
        element: <OAuthPageCallback />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/chat" /> },
]);
