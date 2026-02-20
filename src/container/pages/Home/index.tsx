import React from 'react';
import { Button } from '../../../components/atoms';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center font-mono overflow-hidden">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 industrial-grid pointer-events-none" />
      
      <div className="relative z-10 space-y-12">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 text-[10px] font-black tracking-[0.3em] mb-4">
            SYSTEM_INITIALIZED // STATUS: READY
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            Claw<span className="text-[#ff5f00]">_</span>Project
          </h1>
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">
            Automated Architecture // Advanced Utility System
          </div>
        </div>

        <div className="max-w-2xl mx-auto p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[12px_12px_0_0_#ff5f00]">
          <p className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            // [LOG]: This interface is optimized for industrial-grade frontend performance. 
            All modules are loaded. Routing protocol established. 
            Security score: 100/100.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/dashboard')} size="lg">{'>>'} Open_Command_Center</Button>
            <Button variant="secondary" size="lg">Documentation_v2</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-50">
          {['TS_5.9', 'React_19', 'Vite_7', 'Zustand'].map((tech) => (
            <div key={tech} className="border-2 border-dashed border-slate-400 dark:border-slate-700 py-2 text-[10px] font-black uppercase">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-slate-300 dark:border-slate-800" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-slate-300 dark:border-slate-800" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-slate-300 dark:border-slate-800" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-slate-300 dark:border-slate-800" />
    </div>
  );
};

export default HomePage;
