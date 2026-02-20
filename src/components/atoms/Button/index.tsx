import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono font-bold tracking-tighter uppercase transition-all border-2 active:translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0";
  
  const variants = {
    primary: "bg-[#ff5f00] text-white border-[#cc4c00] shadow-[0_4px_0_0_#cc4c00] hover:bg-[#ff7526]",
    secondary: "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-400 dark:border-slate-600 shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-slate-300 dark:hover:bg-slate-700",
    danger: "bg-red-600 text-white border-red-800 shadow-[0_4px_0_0_#991b1b] hover:bg-red-500",
    success: "bg-emerald-600 text-white border-emerald-800 shadow-[0_4px_0_0_#065f46] hover:bg-emerald-500",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-5 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : null}
      <span className="relative top-[-1px]">{children}</span>
    </button>
  );
};

export default Button;
