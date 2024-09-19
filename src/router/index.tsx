import { createBrowserRouter, Navigate } from "react-router-dom";

import { AccessWrapper } from "./AccessWrapper";
import { AuthPage } from "@/pages/auth/Auth";
import { Chat } from "@/pages/chat/Chat";
import { OAuthPageCallback } from "@/pages/oauthCallback/OAuthPageCallback";
import { RegistrationPage } from "@/pages/registration/RegistrationPage";
import { Settings } from "@/pages/settings/Settings";

export const router = createBrowserRouter([
  {
    element: <AccessWrapper isPrivate />,
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
    element: <AccessWrapper />,
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
  { path: "*", element: <Navigate to="/chat" /> },
]);
