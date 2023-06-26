import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { userContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();

  if (loading) {
    return <div>loading...</div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
