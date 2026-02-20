import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../container/app/userStore';
import { Button, ThemeToggle } from '../../atoms';
import authService from '../../../services/authService';

const Navbar: React.FC = () => {
  const { user, isLoggedIn, clearAuth } = useUserStore();

  const handleLogout = async () => {
    await authService.logout();
    clearAuth();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 border-b-4 bg-slate-100 dark:bg-slate-950 border-slate-900 dark:border-slate-800 font-mono transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-slate-900 dark:bg-[#ff5f00] flex items-center justify-center text-white font-black text-xs">
            CL
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase">
              Claw_OS
            </span>
            <span className="text-[8px] font-bold text-[#ff5f00]">VER_2026.2.19</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden space-x-4 text-[10px] font-black md:flex mr-4 uppercase tracking-widest">
            <Link to="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">{'>>'} Home</Link>
            <Link to="/dashboard" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">{'>>'} Dash</Link>
            <Link to="/profile" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">{'>>'} User</Link>
          </div>
          
          <div className="flex items-center gap-2 border-l-2 border-slate-300 dark:border-slate-800 pl-4">
            <ThemeToggle />
            
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase">{user?.username}</span>
                  </div>
                  <Button variant="secondary" size="sm" onClick={handleLogout} className="!px-2 !py-1 !text-[10px]">Eject</Button>
                </div>
              ) : (
                <Link to="/profile">
                  <Button variant="primary" size="sm" className="!px-3 !py-1 !text-[10px]">Auth_System</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
