import React from 'react';
import { Search, X } from 'lucide-react';
import { Icon } from '../../atoms';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onClear, 
  isLoading, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`relative group font-mono ${className}`}>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ff5f00] transition-colors">
        <Icon name="Search" size={16} />
      </div>
      
      <input
        className={`
          w-full pl-10 pr-10 py-2.5 transition-all bg-white dark:bg-slate-900 
          text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-800 
          outline-none focus:border-[#ff5f00] placeholder:text-slate-400 placeholder:uppercase placeholder:text-[10px]
        `}
        {...props}
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {isLoading && (
          <div className="w-3 h-3 border-2 border-slate-300 border-t-[#ff5f00] rounded-full animate-spin" />
        )}
        {props.value && onClear && (
          <button 
            onClick={onClear}
            className="text-slate-400 hover:text-red-500 transition-colors"
          >
            <Icon name="X" size={14} strokeWidth={3} />
          </button>
        )}
      </div>

      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5f00] group-focus-within:w-full transition-all duration-300" />
    </div>
  );
};

export default SearchBar;
