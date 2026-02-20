import React from 'react';
import Sidebar from '../../organisms/Sidebar';
import { ThemeToggle } from '../../atoms';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] font-mono transition-colors">
      <Sidebar />
      <div className="pl-64">
        {/* Compact Industrial Utility Header */}
        <header className="sticky top-0 z-30 h-16 border-b-4 border-slate-900 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8">
           <div className="flex items-center gap-4">
             <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              // STATUS: SYSTEM_NORMAL
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
           </div>

           <div className="flex items-center gap-6">
             <div className="text-[10px] font-black text-[#ff5f00] uppercase tracking-[0.3em]">
                OPERATOR_INTERFACE
              </div>
              <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-800" />
              <ThemeToggle />
           </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
