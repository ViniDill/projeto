import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../Store/authStore";

interface Props {
  component: React.ComponentType;
  path?: string;
  //   roles: Array<ROLE>
}

export const RegularRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = useAuthStore.getState().token;

  //   if (isAuthenticated && userHasRequiredRole) {
  //     return <RouteComponent />
  //   }

  //   if (isAuthenticated && !userHasRequiredRole) {
  //     return <AccessDenied />
  //   }
  if (!isAuthenticated) {
    return <RouteComponent />;
  }

  return <Navigate to="/dashboard" />;
};
