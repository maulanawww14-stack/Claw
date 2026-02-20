import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserStore } from './userStore';

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isLoggedIn, token } = useUserStore();
  const location = useLocation();

  // Sekarang kita cek juga keberadaan token untuk keamanan tambahan
  if (!isLoggedIn || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
