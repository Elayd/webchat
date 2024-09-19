import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthCheck } from "./privateCheck/query";

type AccessWrapperProps = {
  isPrivate?: boolean;
};

export const AccessWrapper: React.FC<AccessWrapperProps> = ({
  isPrivate = false,
}) => {
  const { isSuccess, isLoading } = useAuthCheck();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isPrivate) {
    return isSuccess ? <Outlet /> : <Navigate to="/auth" />;
  } else {
    return isSuccess ? <Navigate to="/chat" /> : <Outlet />;
  }
};
