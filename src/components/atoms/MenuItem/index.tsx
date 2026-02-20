import React from 'react';
import { Icon } from '../index';
import * as LucideIcons from 'lucide-react';

interface MenuItemProps {
  label: string;
  icon?: keyof typeof LucideIcons;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'danger';
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  label, 
  icon, 
  onClick, 
  active = false, 
  disabled = false,
  className = '',
  variant = 'primary'
}) => {
  const variants = {
    primary: "text-slate-700 dark:text-slate-300 hover:bg-[#ff5f00] hover:text-white dark:hover:bg-[#ff5f00]",
    danger: "text-red-600 hover:bg-red-600 hover:text-white"
  };

  const activeStyles = active ? "bg-slate-200 dark:bg-slate-800 border-l-4 border-[#ff5f00] pl-3" : "pl-4";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center gap-3 py-2 pr-4 transition-all font-mono font-bold text-xs uppercase tracking-tight
        ${variants[variant]}
        ${activeStyles}
        ${disabled ? 'opacity-30 grayscale cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {icon && <Icon name={icon} size={14} strokeWidth={3} />}
      <span>{label}</span>
      {active && <div className="ml-auto w-1 h-1 bg-[#ff5f00] animate-pulse" />}
    </button>
  );
};

export default MenuItem;
