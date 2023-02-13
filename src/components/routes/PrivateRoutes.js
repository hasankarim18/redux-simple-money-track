import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ isLoggedIn }) {
  const auth = isLoggedIn;

  return auth ? <Outlet /> : <Navigate to="/login"  />;
}

