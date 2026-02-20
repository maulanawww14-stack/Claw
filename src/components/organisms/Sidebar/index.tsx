import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileCode, 
  UserCircle, 
  LogOut,
  Settings2,
  Terminal
} from 'lucide-react';
import { useUserStore } from '../../../container/app/userStore';
import authService from '../../../services/authService';

const Sidebar: React.FC = () => {
  const { user, clearAuth } = useUserStore();

  const handleLogout = async () => {
    await authService.logout();
    clearAuth();
  };

  const navItems = [
    { label: 'DASHBOARD', path: '/dashboard', icon: LayoutDashboard },
    { label: 'EXAMPLE_PAGE', path: '/example', icon: FileCode },
    { label: 'USER_PROFILE', path: '/profile', icon: UserCircle },
    { label: 'SYS_SETTINGS', path: '/settings', icon: Settings2 },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 border-r-4 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex flex-col font-mono z-40">
      {/* Sidebar Header */}
      <div className="p-6 border-b-4 border-slate-900 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ff5f00] flex items-center justify-center text-white font-black rounded-sm shadow-[2px_2px_0_0_#000]">
            CL
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black dark:text-white uppercase tracking-tighter">CLAW_OS</span>
            <span className="text-[10px] text-slate-500 font-bold tracking-widest">UTILITY_CORE</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="text-[10px] font-black text-slate-400 mb-4 px-2 tracking-[0.2em]">{'>>'} NAV_PROTOCOLS</div>
        
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 border-2 transition-all group
              ${isActive 
                ? 'bg-[#ff5f00] text-white border-slate-900 shadow-[4px_4px_0_0_#000]' 
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900'}
            `}
          >
            <item.icon size={18} strokeWidth={2.5} />
            <span className="text-xs font-black tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer (User Info) */}
      <div className="p-4 border-t-4 border-slate-900 dark:border-slate-800 bg-slate-200 dark:bg-slate-900">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-slate-900 dark:bg-slate-800 border-2 border-slate-400 flex items-center justify-center text-[10px] font-black text-white">
            {user?.username?.[0] || 'A'}
          </div>
          <div className="flex flex-col truncate">
            <span className="text-[10px] font-black dark:text-white truncate uppercase">{user?.username}</span>
            <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Online</span>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 border-2 border-red-600/30 text-red-600 dark:text-red-500 text-[10px] font-black uppercase hover:bg-red-600 hover:text-white transition-all"
        >
          <LogOut size={12} />
          Eject_Session
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
