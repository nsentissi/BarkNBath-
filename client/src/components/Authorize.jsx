import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const Authorize = ({ role }) => {
  const { currentUser } = useAuth();

  if (currentUser.role === role) {
    return <Outlet />;
  }

  if (currentUser.role !== role && currentUser.role === "user") {
    return <Navigate to="/dashboard" />;
  }
  if (currentUser.role !== role && currentUser.role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }
};

export default Authorize;
