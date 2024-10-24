import { createBrowserRouter, Navigate } from "react-router-dom";

import { PrivateWrapper } from "./ui/PrivateWrapper";
import { AuthPage } from "@/pages/AuthPage/ui/Auth";
import { Chat } from "@/pages/ChatPage/ui/Chat";
import { OAuthPageCallback } from "@/pages/OAuthCallbackPage/ui/OAuthPageCallback";
import { RegistrationPage } from "@/pages/RegistrationPage/ui/RegistrationPage";
import { Settings } from "@/pages/SettingsPage/ui/Settings";
import { PublicWrapper } from "./ui/PublicWrapper";
import { ErrorBoundaryLayout } from "./ui/ErrorBoundary/ErrorBoundaryWrapper";

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
