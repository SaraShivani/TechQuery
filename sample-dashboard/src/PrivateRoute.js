// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, ...props }) => {
  // Replace the following line with your actual authentication logic
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
