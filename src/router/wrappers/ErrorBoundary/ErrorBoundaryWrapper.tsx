import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import ErrorFallback from "./ErrorBoundary.tsx";

export const ErrorBoundaryLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Outlet />
    </ErrorBoundary>
  );
};
