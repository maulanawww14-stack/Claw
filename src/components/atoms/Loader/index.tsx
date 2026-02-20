import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-[3px]",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className={`
        ${sizes[size]} 
        border-slate-300 dark:border-slate-800 
        border-t-[#ff5f00] rounded-full animate-spin
      `} />
      <span className="font-mono text-[8px] font-black uppercase tracking-[0.3em] text-[#ff5f00] animate-pulse">
        System_Processing...
      </span>
    </div>
  );
};

export default Loader;
