import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button, Icon } from '../../atoms';

interface DropdownOption {
  label: string;
  value: string | number;
  icon?: any;
}

interface DropdownMenuProps {
  label: string;
  options: DropdownOption[];
  onSelect: (value: string | number) => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  label, 
  options, 
  onSelect, 
  className = '',
  variant = 'secondary'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block font-mono ${className}`} ref={dropdownRef}>
      <Button 
        variant={variant} 
        size="md" 
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-800 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] z-50 overflow-hidden">
          <div className="text-[9px] font-black p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase tracking-widest border-b-2 border-slate-900 dark:border-slate-800">
            // Select_Action
          </div>
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onSelect(opt.value);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-xs font-bold uppercase transition-colors hover:bg-[#ff5f00] hover:text-white dark:text-white group"
            >
              {opt.icon && <Icon name={opt.icon} size={14} />}
              {opt.label}
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">{'>>'}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
