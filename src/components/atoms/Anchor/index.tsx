import React from 'react';
import { Link } from 'react-router-dom';

interface AnchorProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  variant?: 'primary' | 'muted';
}

const Anchor: React.FC<AnchorProps> = ({ 
  children, 
  href, 
  external = false, 
  className = '',
  variant = 'primary'
}) => {
  const base = "font-mono font-black text-[10px] uppercase tracking-widest transition-colors inline-flex items-center gap-1";
  
  const variants = {
    primary: "text-[#ff5f00] hover:text-[#ff7526] underline decoration-2 underline-offset-4",
    muted: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
};

export default Anchor;
