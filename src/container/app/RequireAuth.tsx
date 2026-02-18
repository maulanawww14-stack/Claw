import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserStore } from './userStore';

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isLoggedIn } = useUserStore();
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect ke profile (login) tapi simpan lokasi asal agar bisa balik lagi setelah login
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
