import React from 'react';
import { Loader } from '../../atoms';

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  overlay?: boolean;
  className?: string;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ 
  isLoading, 
  children, 
  overlay = false,
  className = '' 
}) => {
  if (isLoading && !overlay) {
    return (
      <div className={`flex items-center justify-center p-20 min-h-[200px] ${className}`}>
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && overlay && (
        <div className="absolute inset-0 z-10 bg-white/60 dark:bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center transition-all">
          <Loader size="md" />
        </div>
      )}
    </div>
  );
};

export default LoadingWrapper;
