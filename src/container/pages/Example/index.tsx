import React from 'react';

const ExamplePage: React.FC = () => {
  return (
    <div className="space-y-8 font-mono">
      <header className="border-l-8 border-[#ff5f00] pl-6">
        <div className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-widest">MODULE_EXAMPLE // PROTOCOL_READY</div>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">EXAMPLE_PAGE</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-black mb-6 pb-2 border-b-2 border-slate-200 dark:border-slate-800 uppercase">UI_Elements</h2>
          <div className="space-y-4">
             <div className="p-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">
                  // This is a boilerplate container for new modules. 
                  Industrial components are pre-loaded and ready for logic integration.
                </p>
             </div>
             <div className="flex gap-2">
                <div className="h-4 w-4 bg-[#ff5f00]" />
                <div className="h-4 w-4 bg-emerald-500" />
                <div className="h-4 w-4 bg-blue-600" />
                <div className="h-4 w-4 bg-slate-400" />
             </div>
          </div>
        </div>

        <div className="p-8 border-4 border-dashed border-slate-400 dark:border-slate-700">
           <h2 className="text-xl font-black mb-6 uppercase text-slate-400">Component_Sandbox</h2>
           <p className="text-sm font-bold text-slate-400 uppercase italic underline decoration-[#ff5f00] decoration-2">
             Waiting for new atoms...
           </p>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
