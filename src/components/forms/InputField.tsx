import React, { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1.5 text-left">
        {label && (
          <label className="text-sm font-bold tracking-wide text-slate-400">
            {label.toUpperCase()}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 text-white transition-all bg-slate-900/50 border-2 outline-none rounded-xl focus:ring-4 focus:ring-blue-500/10 ${
            error ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs font-bold text-red-500">{error}</span>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
