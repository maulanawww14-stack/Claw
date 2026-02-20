import React from 'react';
import { useUserStore } from '../../../container/app/userStore';

const DashboardPage: React.FC = () => {
  const { user } = useUserStore();

  return (
    <div className="max-w-7xl mx-auto pt-8 px-6 font-mono">
      <header className="mb-12 border-l-8 border-[#ff5f00] pl-6">
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          MODULE_DASHBOARD // ACCESS_GRANTED
        </div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Command_Center</h1>
        <p className="text-sm text-[#ff5f00] font-bold mt-1 uppercase tracking-widest">Operator: {user?.username || 'SYSTEM_ADMIN'}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'CPU_TOTAL_CORES', val: '02', unit: 'CORES' },
          { label: 'VIRTUAL_MEM_SWAP', val: '08', unit: 'GB' },
          { label: 'NETWORK_LATENCY', val: '24', unit: 'MS' },
          { label: 'STORAGE_ALLOCATED', val: '40', unit: 'GB' },
        ].map((item, i) => (
          <div key={i} className="p-6 border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <p className="text-[10px] font-black text-slate-500 mb-4 tracking-[0.2em]">{item.label}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-slate-900 dark:text-white leading-none">{item.val}</span>
              <span className="text-[10px] font-bold text-slate-400">{item.unit}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Active_System_Logs</h2>
            <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">TOTAL: 42</span>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center gap-4 text-[11px] font-bold py-2 border-b border-dotted border-slate-300 dark:border-slate-800">
                <span className="text-slate-400">03:44:0{i}</span>
                <span className="text-[#ff5f00]">[INF]</span>
                <span className="text-slate-700 dark:text-slate-300 flex-1">Initializing data packet stream from source_{i}...</span>
                <span className="text-emerald-600">[OK]</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-8 bg-slate-900 dark:bg-[#ff5f00] text-white border-4 border-slate-900">
            <h2 className="text-xl font-black uppercase tracking-tighter mb-2">Threat_Shield</h2>
            <p className="text-[10px] font-bold opacity-70 mb-6 uppercase">Real-time protection active</p>
            <div className="text-6xl font-black leading-none mb-2">100<span className="text-sm">%</span></div>
            <div className="w-full h-1 bg-white/20">
              <div className="w-[100%] h-full bg-white shadow-[0_0_8px_white]" />
            </div>
          </div>
          
          <div className="p-6 border-2 border-dashed border-slate-400 dark:border-slate-700 text-slate-500">
            <h3 className="text-[10px] font-black uppercase mb-2">Quick_Actions</h3>
            <div className="grid grid-cols-1 gap-2">
              <button className="text-left text-[10px] font-black hover:text-[#ff5f00] transition-colors">{'>>'} RESTART_MODULE</button>
              <button className="text-left text-[10px] font-black hover:text-[#ff5f00] transition-colors">{'>>'} CLEAR_CACHE_X</button>
              <button className="text-left text-[10px] font-black hover:text-[#ff5f00] transition-colors">{'>>'} EXPORT_CSV_REPORT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
