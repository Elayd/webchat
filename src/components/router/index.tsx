import { createBrowserRouter, Navigate } from "react-router-dom";
import { Chat } from "../pages/chat/Chat";
import { Settings } from "../pages/settings/Settings";
import { AuthPage } from "../pages/auth/Auth";
import { RegistrationPage } from "../pages/registration/RegistrationPage";
import { PrivateRoute } from "./ProtectedRoute";
import { OAuthPageCallback } from "../pages/oauthCallback/OAuthPageCallback";
import { PublicRouteWrapper } from "./PublicRouteWrapper";

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
