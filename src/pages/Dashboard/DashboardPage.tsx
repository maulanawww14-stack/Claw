import React from 'react';
import { useUserStore } from '../../store/userStore';

const DashboardPage: React.FC = () => {
  const { username } = useUserStore();

  return (
    <div className="max-w-6xl mx-auto pt-10 px-6">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-white uppercase tracking-tight">Dashboard</h1>
        <p className="text-slate-400">Welcome back, {username || 'Commander'}.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-8 border border-slate-800 bg-slate-800/40 rounded-3xl backdrop-blur-xl hover:border-blue-500/50 transition-colors">
            <h2 className="text-xl font-bold mb-4 text-white">Stat Card {i}</h2>
            <div className="text-4xl font-black text-blue-500 mb-2">1,234</div>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Active Sessions</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-10 border border-slate-800 bg-slate-800/20 rounded-3xl">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                <div>
                  <div className="text-white font-bold">Action Performed {i}</div>
                  <div className="text-xs text-slate-500">2 minutes ago</div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase">Success</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
