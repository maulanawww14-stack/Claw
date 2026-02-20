import React from 'react';
import { TextStyle } from '../../atoms';

interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  error, 
  children, 
  className = '',
  required = false
}) => {
  return (
    <div className={`flex flex-col w-full gap-1.5 text-left font-mono ${className}`}>
      {label && (
        <label className="flex items-center gap-1 text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          // {label}
          {required && <span className="text-[#ff5f00] ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {children}
      </div>

      {error && (
        <TextStyle variant="caption" className="text-red-600 mt-1">
          [ ERROR_PROTOCOL: {error} ]
        </TextStyle>
      )}
    </div>
  );
};

export default FormField;
