// PublicRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = ({ path, ...props }) => {
  // Replace the following line with your actual authentication logic
  const isAuthenticated = false;

  return !isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default PublicRoute;
