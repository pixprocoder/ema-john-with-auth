import React, { useContext } from "react";

import { useLocation, Navigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const { user } = useContext(useContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
