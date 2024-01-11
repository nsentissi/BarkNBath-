import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';



const ADMIN_EMAIL = 'client@gmail.com'


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();


  if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
    return <Navigate to="/" />;
  }

  return children;
};


export default ProtectedRoute;