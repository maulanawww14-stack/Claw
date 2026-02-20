import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, error, className = '', ...props }) => {
  return (
    <label className={`flex items-center gap-3 cursor-pointer group font-mono ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className={`
          w-6 h-6 border-4 transition-all
          ${error ? 'border-red-600' : 'border-slate-900 dark:border-slate-800'}
          peer-checked:bg-[#ff5f00] peer-checked:border-slate-900 dark:peer-checked:border-slate-800
          peer-focus:ring-4 peer-focus:ring-[#ff5f00]/20
        `} />
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={4}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 group-hover:text-[#ff5f00] transition-colors">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
