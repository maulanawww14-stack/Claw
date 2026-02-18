import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../container/app/userStore';
import { Button, ThemeToggle } from '../../atoms';

const Navbar: React.FC = () => {
  const { username, isLoggedIn, logout } = useUserStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 backdrop-blur-md transition-colors">
      <Link to="/" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase hover:opacity-80 transition-opacity">
        <span className="text-blue-500">My</span>Project
      </Link>
      
      <div className="flex items-center gap-4">
        <div className="hidden space-x-6 text-sm font-bold text-slate-500 dark:text-slate-400 md:flex mr-4">
          <Link to="/" className="transition-colors hover:text-blue-500 dark:hover:text-white">Home</Link>
          <Link to="/dashboard" className="transition-colors hover:text-blue-500 dark:hover:text-white">Dashboard</Link>
          <Link to="/profile" className="transition-colors hover:text-blue-500 dark:hover:text-white">Profile</Link>
        </div>
        
        <ThemeToggle />

        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />
        
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm font-bold text-emerald-500 dark:text-emerald-400">{username}</span>
            <Button variant="secondary" size="sm" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Link to="/profile">
            <Button variant="primary" size="sm">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
