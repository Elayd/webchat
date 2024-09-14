import { createBrowserRouter } from "react-router-dom";
import { Chat } from "../pages/Chat";
import { Settings } from "../pages/Settings";
export const router = createBrowserRouter([
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
  {
    path: "/registration",
    element: <div>Registration</div>,
  },
  {
    path: "/auth",
    element: <div>Auth Page</div>,
  },
]);
