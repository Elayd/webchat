import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router";
import "./App.css";
import AuthWrapper from "./pages/AuthWrapper/AuthWrapper";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </QueryClientProvider>
  );
}

export default App;
