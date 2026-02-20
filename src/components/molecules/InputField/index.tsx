import React, { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1 text-left font-mono">
        {label && (
          <label className="text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase">
            // {label}
          </label>
        )}
        <div className="relative group">
          <input
            ref={ref}
            className={`w-full px-4 py-2.5 transition-all bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-2 outline-none focus:ring-0 ${
              error ? 'border-red-600' : 'border-slate-300 dark:border-slate-800 focus:border-[#ff5f00] dark:focus:border-[#ff5f00]'
            } ${className}`}
            {...props}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] opacity-20 group-focus-within:opacity-100 transition-opacity text-[#ff5f00] font-black">
            INPUT_READY
          </div>
        </div>
        {error && <span className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">[ ERROR: {error} ]</span>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
