import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const ProtectedRoute = () => {
  const { currentUser, isLoading } = useAuth();

  return (
    <>
      {!isLoading && (
        <> {currentUser ? <Outlet /> : <Navigate to="/login" />} </>
      )}
    </>
  );
};

export default ProtectedRoute;
