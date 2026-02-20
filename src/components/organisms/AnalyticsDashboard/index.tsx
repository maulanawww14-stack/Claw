import React from 'react';
import { Grid, TextStyle, Icon, Divider } from '../../atoms';
import { StatWidget, Alert } from '../../molecules';

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="space-y-8 font-mono">
      {/* Top Warning Banner if needed */}
      <Alert title="UNUSUAL_NETWORK_PEAK" type="warning">
        Incoming data load at 1.4TB/s from Unknown Node. Traffic redirected to quarantine VPC.
      </Alert>

      {/* Main Grid */}
      <Grid cols={4} gap={4}>
         <StatWidget 
           label="CPU_GLOBAL_LOAD" 
           value="14.2" 
           unit="%" 
           icon="Cpu" 
           trend={{ value: 2.1, isUp: false }} 
           color="text-blue-500" 
         />
         <StatWidget 
           label="MEM_VIRTUAL_ALLOC" 
           value="8.4" 
           unit="GB" 
           icon="Zap" 
           trend={{ value: 0.4, isUp: true }} 
           color="text-emerald-500" 
         />
         <StatWidget 
           label="DISK_IO_READ" 
           value="420" 
           unit="MB/s" 
           icon="HardDrive" 
           color="text-amber-500" 
         />
         <StatWidget 
           label="ACTIVE_PEERS" 
           value="07" 
           unit="NODES" 
           icon="Network" 
           trend={{ value: 1, isUp: true }} 
           color="text-[#ff5f00]" 
         />
      </Grid>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* System Logs Placeholder */}
         <div className="lg:col-span-2 p-10 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex justify-between items-center mb-8 border-b-2 border-slate-200 dark:border-slate-800 pb-4">
               <TextStyle variant="h3" weight="black" className="uppercase tracking-tighter">ANALYTICS_STREAM</TextStyle>
               <TextStyle variant="caption" className="text-emerald-500">LIVE_DATA_FEED [READY]</TextStyle>
            </div>
            
            {/* Visual representation of a chart (Mock) */}
            <div className="h-64 industrial-grid border-2 border-dashed border-slate-300 dark:border-slate-700 relative flex items-center justify-center">
                <TextStyle variant="caption" className="text-slate-400">GRAPH_DATA_RENDERING_PENDING...</TextStyle>
                {/* Random lines or bars can go here */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2 h-32 opacity-20">
                   {[40, 70, 45, 90, 65, 80, 30, 55, 75, 40].map((h, i) => (
                     <div key={i} className="flex-1 bg-[#ff5f00]" style={{ height: `${h}%` }} />
                   ))}
                </div>
            </div>

            <Divider label="OPERATIONAL_RECORDS" dashed className="mt-10 mb-6" />
            
            <div className="space-y-3">
               {[1, 2, 3].map(i => (
                 <div key={i} className="flex justify-between text-[10px] font-bold py-2 border-b border-slate-100 dark:border-slate-800 opacity-60">
                    <span>RECORD_ID_0x782{i}</span>
                    <span className="text-[#ff5f00]">VERIFIED</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Sidebar Stats */}
         <div className="space-y-4">
            <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-slate-900 dark:bg-slate-800 text-white">
                <TextStyle variant="caption" className="text-slate-400 mb-6 block">THREAT_LEVEL_INDEX</TextStyle>
                <div className="text-7xl font-black italic text-red-500 leading-none mb-4">0.02</div>
                <TextStyle variant="caption" className="text-emerald-500">SYSTEM_NOMINAL</TextStyle>
            </div>
            
            <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
               <TextStyle variant="caption" className="mb-6 block uppercase tracking-[0.2em] text-[#ff5f00]">UPTIME_SESSION</TextStyle>
               <div className="text-3xl font-black text-slate-900 dark:text-white tabular-nums mb-4 uppercase tracking-tighter">
                  14:21:44:02
               </div>
               <div className="w-full h-1 bg-slate-100 dark:bg-slate-800">
                  <div className="w-[85%] h-full bg-[#ff5f00]" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
