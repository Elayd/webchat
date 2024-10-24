import { createBrowserRouter, Navigate } from "react-router-dom";

import { PrivateWrapper } from "./ui/PrivateWrapper";

import { PublicWrapper } from "./ui/PublicWrapper";
import { ErrorBoundaryLayout } from "./ui/ErrorBoundary/ErrorBoundaryWrapper";
import { AuthPage } from "@/pages/AuthPage";
import { ChatPage } from "@/pages/ChatPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import OAuthPageCallback from "@/pages/OAuthCallbackPage/ui/OAuthPageCallback";

export const router = createBrowserRouter([
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
