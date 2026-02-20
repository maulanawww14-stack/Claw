import React from 'react';

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'standard' | 'muted';
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '', variant = 'standard' }) => {
  const backgrounds = {
    standard: "bg-white dark:bg-slate-900",
    muted: "bg-slate-100 dark:bg-slate-950"
  };

  return (
    <div className={`mt-auto pt-6 border-t-2 border-slate-200 dark:border-slate-800 ${backgrounds[variant]} ${className}`}>
      <div className="flex items-center justify-between gap-4">
        {children}
      </div>
    </div>
  );
};

export default CardFooter;
