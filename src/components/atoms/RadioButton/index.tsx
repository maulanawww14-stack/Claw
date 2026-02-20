import React from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, className = '', ...props }) => {
  return (
    <label className={`flex items-center gap-3 cursor-pointer group font-mono ${className}`}>
      <div className="relative">
        <input
          type="radio"
          className="peer sr-only"
          {...props}
        />
        <div className={`
          w-6 h-6 border-4 rounded-full transition-all
          border-slate-900 dark:border-slate-800
          peer-checked:border-[#ff5f00]
          peer-focus:ring-4 peer-focus:ring-[#ff5f00]/20
        `} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#ff5f00] opacity-0 peer-checked:opacity-100 transition-opacity" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 group-hover:text-[#ff5f00] transition-colors">
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
