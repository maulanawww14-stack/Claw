import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'danger' | 'success';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary',
  className = '' 
}) => {
  const base = "inline-flex items-center px-2 py-0.5 text-[8px] font-black uppercase tracking-widest border-2";
  
  const variants = {
    primary: "bg-[#ff5f00] text-white border-slate-900 dark:border-slate-800 shadow-[2px_2px_0_0_#000]",
    outline: "bg-transparent text-slate-500 border-slate-300 dark:border-slate-800",
    danger: "bg-red-600 text-white border-red-900",
    success: "bg-emerald-600 text-white border-emerald-900",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
