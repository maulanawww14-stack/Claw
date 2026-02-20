import React from 'react';
import { Icon, TextStyle } from '../../atoms';
import * as LucideIcons from 'lucide-react';

interface StatWidgetProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: keyof typeof LucideIcons;
  trend?: {
    value: number;
    isUp: boolean;
  };
  color?: string;
  className?: string;
}

const StatWidget: React.FC<StatWidgetProps> = ({ 
  label, 
  value, 
  unit, 
  icon, 
  trend,
  color = "text-blue-500",
  className = '' 
}) => {
  return (
    <div className={`p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 group hover:border-[#ff5f00] transition-colors ${className}`}>
      <div className="flex justify-between items-start mb-6">
        <p className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase leading-none">{label}</p>
        <Icon name={icon} size={16} className={`text-slate-300 dark:text-slate-700 group-hover:${color}`} />
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-6xl font-black text-slate-900 dark:text-white leading-none tabular-nums tracking-tighter">
          {value}
        </span>
        {unit && <span className="text-xs font-bold text-slate-400 uppercase">{unit}</span>}
      </div>

      {trend && (
        <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${trend.isUp ? 'text-emerald-500' : 'text-red-500'}`}>
          <Icon name={trend.isUp ? 'TrendingUp' : 'TrendingDown'} size={12} strokeWidth={3} />
          <span>{trend.isUp ? '+' : '-'}{trend.value}%</span>
          <span className="text-slate-400 opacity-50 ml-1">v_last_session</span>
        </div>
      )}
    </div>
  );
};

export default StatWidget;
