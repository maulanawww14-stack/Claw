import React from 'react';
import { AlertTriangle, Info, CheckCircle, ShieldAlert, X } from 'lucide-react';
import { Icon, TextStyle } from '../../atoms';

interface AlertProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ 
  type = 'info', 
  title, 
  children, 
  onClose,
  className = '' 
}) => {
  const styles = {
    info: { bg: 'bg-blue-600/10', border: 'border-blue-600', text: 'text-blue-600', icon: 'Info' },
    warning: { bg: 'bg-amber-600/10', border: 'border-amber-600', text: 'text-amber-600', icon: 'AlertTriangle' },
    error: { bg: 'bg-red-600/10', border: 'border-red-600', text: 'text-red-600', icon: 'ShieldAlert' },
    success: { bg: 'bg-emerald-600/10', border: 'border-emerald-600', text: 'text-emerald-600', icon: 'CheckCircle' },
  };

  const current = styles[type];

  return (
    <div className={`p-5 border-l-[12px] border-4 ${current.bg} ${current.border} flex items-start gap-4 font-mono relative ${className}`}>
      <Icon name={current.icon as any} size={24} className={current.text} />
      
      <div className="flex-1 space-y-1">
        <TextStyle variant="caption" className={current.text}>{title}</TextStyle>
        <div className="text-sm font-bold dark:text-slate-200">
          {children}
        </div>
      </div>

      {onClose && (
        <button 
          onClick={onClose}
          className="p-1 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <X size={16} className="text-slate-400" />
        </button>
      )}
    </div>
  );
};

export default Alert;
