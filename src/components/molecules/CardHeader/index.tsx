import React from 'react';
import { TextStyle } from '../../atoms';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, action, className = '' }) => {
  return (
    <div className={`flex items-start justify-between pb-6 border-b-2 border-slate-200 dark:border-slate-800 ${className}`}>
      <div className="space-y-1">
        <TextStyle variant="h3" weight="black" className="leading-none">{title}</TextStyle>
        {subtitle && (
          <p className="text-[10px] font-bold text-[#ff5f00] uppercase tracking-widest opacity-80">
            // {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="flex items-center gap-2">
          {action}
        </div>
      )}
    </div>
  );
};

export default CardHeader;
