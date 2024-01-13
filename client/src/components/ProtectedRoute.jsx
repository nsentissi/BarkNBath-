import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const ADMIN_EMAIL = "client@gmail.com";

const ProtectedRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();


  /*   if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
    return <Navigate to="/" />;
  }
 */
  if (currentUser && currentUser.email === ADMIN_EMAIL) return children;

  return <Navigate to="/" />;
};

export default ProtectedRoute;
