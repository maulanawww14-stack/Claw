import React, { useState, useEffect } from 'react';
import { useUserStore } from '../../../container/app/userStore';
import { Cpu, HardDrive, Network, Activity, ShieldCheck, Zap } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useUserStore();
  const [stats, setStats] = useState({
    cpu: 12,
    ram: 45,
    network: 24,
    disk: 50,
  });

  // Simulasi Update Real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 15) + 5,
        ram: 45 + (Math.random() > 0.5 ? 1 : -1),
        network: Math.floor(Math.random() * 10) + 20,
        disk: 50
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 font-mono">
      <header className="border-l-8 border-[#ff5f00] pl-6">
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 mb-1 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
          SYSTEM_MONITOR // CLOUD_INSTANCE_ACTIVE
        </div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">COMMAND_CENTER</h1>
        <p className="text-sm text-[#ff5f00] font-bold mt-1 uppercase tracking-widest leading-none">OPERATOR_ID: {user?.username}</p>
      </header>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'CPU_CORE_LOAD', val: stats.cpu, unit: '%', icon: Cpu, color: 'text-blue-500' },
          { label: 'MEMORY_UTILITY', val: stats.ram, unit: '%', icon: Zap, color: 'text-emerald-500' },
          { label: 'NET_LATENCY', val: stats.network, unit: 'MS', icon: Network, color: 'text-[#ff5f00]' },
          { label: 'DISK_CAPACITY', val: stats.disk, unit: '%', icon: HardDrive, color: 'text-slate-400' },
        ].map((item, i) => (
          <div key={i} className="p-6 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 group hover:border-[#ff5f00] transition-colors">
            <div className="flex justify-between items-start mb-4">
               <p className="text-[9px] font-black text-slate-400 tracking-[0.2em]">{item.label}</p>
               <item.icon size={14} className="text-slate-300 dark:text-slate-700 group-hover:text-[#ff5f00]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-slate-900 dark:text-white leading-none tabular-nums">{item.val < 10 ? `0${item.val}` : item.val}</span>
              <span className="text-[10px] font-bold text-slate-400">{item.unit}</span>
            </div>
            <div className="mt-4 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${item.color.replace('text', 'bg')}`}
                  style={{ width: `${item.val}%` }}
                />
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Real-time Logs */}
        <div className="lg:col-span-2 p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Activity size={20} className="text-[#ff5f00]" />
              <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Active_Stream_Logs</h2>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 tracking-widest font-mono">STATUS: OK</span>
          </div>
          
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex items-center gap-4 text-[10px] font-bold py-3 border-b border-dashed border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 font-mono">03:44:0{i}</span>
                <span className="text-[#ff5f00] font-black">[TRACE]</span>
                <span className="text-slate-700 dark:text-slate-300 flex-1 truncate lowercase tracking-tight">{'>>'} Incoming encrypted packet from peer_0x3F{i}... verified.</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Security Module */}
        <div className="space-y-4">
          <div className="p-8 bg-slate-900 dark:bg-[#ff5f00] text-white border-4 border-slate-900">
            <div className="flex items-center gap-3 mb-4">
               <ShieldCheck size={24} />
               <h2 className="text-xl font-black uppercase tracking-tighter">Threat_Shield</h2>
            </div>
            <p className="text-[10px] font-bold opacity-70 mb-8 uppercase tracking-[0.2em]">Quantum_Encryption_Standard_v4</p>
            <div className="flex items-baseline gap-2 mb-2">
               <div className="text-7xl font-black leading-none italic">100</div>
               <div className="text-xl font-black">%</div>
            </div>
            <div className="w-full h-2 bg-white/20 border border-white/30 p-[2px]">
              <div className="w-[100%] h-full bg-white shadow-[0_0_12px_white]" />
            </div>
          </div>
          
          <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-xs font-black uppercase mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-800">Operational_Control</h3>
            <div className="grid grid-cols-1 gap-4">
              <button className="text-left text-[11px] font-black hover:text-[#ff5f00] transition-colors group flex items-center gap-2">
                <span className="opacity-30 group-hover:opacity-100 transition-opacity">{'>>'}</span> REBOOT_VIRTUAL_MACHINE
              </button>
              <button className="text-left text-[11px] font-black hover:text-[#ff5f00] transition-colors group flex items-center gap-2 text-red-600">
                <span className="opacity-30 group-hover:opacity-100 transition-opacity">{'>>'}</span> TERMINATE_ALL_PROCESSES
              </button>
              <button className="text-left text-[11px] font-black hover:text-[#ff5f00] transition-colors group flex items-center gap-2">
                <span className="opacity-30 group-hover:opacity-100 transition-opacity">{'>>'}</span> FLUSH_NETWORK_SOCKETS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
