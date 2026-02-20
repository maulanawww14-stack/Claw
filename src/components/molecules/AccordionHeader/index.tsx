import React from 'react';
import { ChevronDown } from 'lucide-react';
import { TextStyle } from '../../atoms';

interface AccordionHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  subtitle?: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ 
  title, 
  isOpen, 
  onToggle, 
  className = '',
  subtitle
}) => {
  return (
    <button
      onClick={onToggle}
      className={`
        w-full flex items-center justify-between p-6 transition-all border-4 font-mono
        ${isOpen 
          ? 'bg-[#ff5f00] text-white border-slate-900 dark:border-slate-800' 
          : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-[#ff5f00]'}
        ${className}
      `}
    >
      <div className="flex flex-col items-start gap-1">
        <TextStyle variant="h3" weight="black" className="uppercase tracking-tighter leading-none">
          {title}
        </TextStyle>
        {subtitle && (
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isOpen ? 'text-white/70' : 'text-slate-400'}`}>
            // {subtitle}
          </span>
        )}
      </div>
      
      <ChevronDown 
        size={24} 
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
  );
};

export default AccordionHeader;
