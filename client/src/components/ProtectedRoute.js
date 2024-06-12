import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Element, roles, ...rest }) => {
  const token = localStorage.getItem('token');
  const user = useSelector((state) => state.auth.user);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.length > 0 && (!user || !roles.includes(user.role))) {
    return <Navigate to="/" />;
  }

  return <Element {...rest} />;
};

export default ProtectedRoute;
