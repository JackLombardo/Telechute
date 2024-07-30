import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  // Redirect to sign-in page if not authenticated
  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return Element;
};

export default PrivateRoute;
