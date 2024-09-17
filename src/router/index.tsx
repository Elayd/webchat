import { createBrowserRouter, Navigate } from "react-router-dom";

import { PublicRouteWrapper } from "./PublicRouteWrapper";
import { AuthPage } from "@/components/pages/auth/Auth";
import { Chat } from "@/components/pages/chat/Chat";
import { OAuthPageCallback } from "@/components/pages/oauthCallback/OAuthPageCallback";
import { RegistrationPage } from "@/components/pages/registration/RegistrationPage";
import { Settings } from "lucide-react";
import { PrivateRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/chat",
    element: <PrivateRoute element={<Chat />} />,
    children: [
      {
        path: ":id",
        element: <div className="text-white">Test</div>,
      },
    ],
  },
  {
    path: "/auth/callback",
    element: <OAuthPageCallback />,
  },
  {
    path: "/settings",
    element: <PrivateRoute element={<Settings />} />,
  },
  {
    element: <PublicRouteWrapper />,
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
  { path: "*", element: <Navigate to="/" replace /> },
]);
