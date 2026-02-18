import React from 'react';
import { useUserStore } from '../../store/userStore';
import Button from '../common/Button';

const Navbar: React.FC = () => {
  const { username, isLoggedIn, logout } = useUserStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b bg-slate-900/80 border-slate-800 backdrop-blur-md">
      <div className="text-xl font-black tracking-tighter text-white uppercase">
        <span className="text-blue-500">My</span>Project
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden space-x-6 text-sm font-bold text-slate-400 md:flex">
          <a href="#" className="transition-colors hover:text-white">Home</a>
          <a href="#" className="transition-colors hover:text-white">Dashboard</a>
          <a href="#" className="transition-colors hover:text-white">Services</a>
        </div>
        
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-emerald-400">{username}</span>
            <Button variant="secondary" size="sm" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button variant="primary" size="sm">Get Started</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
