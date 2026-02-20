import React from 'react';

interface DividerProps {
  label?: string;
  className?: string;
  dashed?: boolean;
}

const Divider: React.FC<DividerProps> = ({ label, className = '', dashed = false }) => {
  return (
    <div className={`flex items-center gap-4 w-full ${className}`}>
      <div className={`flex-1 h-0.5 ${dashed ? 'border-t-2 border-dashed' : 'bg-current'} border-slate-300 dark:border-slate-800 opacity-50`} />
      {label && (
        <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 shrink-0">
          // {label}
        </span>
      )}
      <div className={`flex-1 h-0.5 ${dashed ? 'border-t-2 border-dashed' : 'bg-current'} border-slate-300 dark:border-slate-800 opacity-50`} />
    </div>
  );
};

export default Divider;
