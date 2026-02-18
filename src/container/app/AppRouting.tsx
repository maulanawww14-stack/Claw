import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../../config/routes';
import RequireAuth from './RequireAuth';

const AppRouting: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.element;
        
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.protected ? (
                <RequireAuth>
                  <Component />
                </RequireAuth>
              ) : (
                <Component />
              )
            }
          />
        );
      })}
      
      {/* 404 Redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouting;
