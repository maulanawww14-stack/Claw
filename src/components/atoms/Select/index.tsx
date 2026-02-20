import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string | number }[];
}

const Select: React.FC<SelectProps> = ({ label, error, options, className = '', ...props }) => {
  return (
    <div className="flex flex-col w-full gap-1.5 text-left font-mono">
      {label && (
        <label className="text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          // {label}
        </label>
      )}
      <div className="relative group">
        <select
          className={`
            w-full px-4 py-2.5 transition-all bg-slate-50 dark:bg-slate-900 
            text-slate-900 dark:text-white border-2 outline-none appearance-none cursor-pointer
            ${error ? 'border-red-600' : 'border-slate-300 dark:border-slate-800 focus:border-[#ff5f00]'}
            ${className}
          `}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label.toUpperCase()}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-[#ff5f00]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <span className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">[ ERROR: {error} ]</span>}
    </div>
  );
};

export default Select;
