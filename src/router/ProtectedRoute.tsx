import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthCheck } from "./privateCheck/query";

type PrivateRouteProps = {
  element: JSX.Element;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isSuccess, isLoading } = useAuthCheck();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isSuccess ? element : <Navigate to="/auth" />;
};
