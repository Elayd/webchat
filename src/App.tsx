import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router";
import "./App.css";
import useCsrfStore from "./csrf/store/csrf";
import { getCsrfToken } from "./csrf/api";
import { useEffect } from "react";

export const queryClient = new QueryClient();

function App() {
  const setCSRF = useCsrfStore((store) => store.setCsrfToken);

  const pushCsrfToken = async () => {
    const csrf = await getCsrfToken();
    setCSRF(csrf);
  };

  useEffect(() => {
    pushCsrfToken();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
