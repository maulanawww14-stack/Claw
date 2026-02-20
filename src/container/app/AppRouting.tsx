import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, DashboardPage, ProfilePage, LoginPage, ExamplePage } from '../pages';
import RequireAuth from './RequireAuth';
import DashboardLayout from '../../components/templates/DashboardLayout';
import PublicLayout from '../../components/templates/PublicLayout';

const AppRouting: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages with Navbar */}
      <Route 
        path="/" 
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        } 
      />
      
      {/* Login Page - Usually no Navbar/Sidebar or specific simple Navbar */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Dashboard Pages - Sidebar ONLY */}
      <Route 
        path="/dashboard" 
        element={
          <RequireAuth>
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          </RequireAuth>
        } 
      />
      
      <Route 
        path="/example" 
        element={
          <RequireAuth>
            <DashboardLayout>
              <ExamplePage />
            </DashboardLayout>
          </RequireAuth>
        } 
      />

      <Route 
        path="/profile" 
        element={
          <RequireAuth>
            <DashboardLayout>
              <ProfilePage />
            </DashboardLayout>
          </RequireAuth>
        } 
      />

      <Route 
        path="/settings" 
        element={
          <RequireAuth>
            <DashboardLayout>
              <div className="p-8 border-4 border-dashed border-slate-400 text-slate-400 font-black uppercase text-center">
                 Settings_Module_Offline
              </div>
            </DashboardLayout>
          </RequireAuth>
        } 
      />
      
      {/* 404 Redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouting;
