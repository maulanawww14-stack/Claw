import React from 'react';

interface BaseContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  className?: string;
  bordered?: boolean;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ 
  children, 
  maxWidth = 'lg', 
  padding = true, 
  className = '',
  bordered = false
}) => {
  const widths = {
    sm: "max-w-xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    xl: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div className={`
      mx-auto w-full 
      ${widths[maxWidth]} 
      ${padding ? 'px-6 md:px-12 py-8' : ''} 
      ${bordered ? 'border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default BaseContainer;
