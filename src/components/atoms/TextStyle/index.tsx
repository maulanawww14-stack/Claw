import React from 'react';

interface TextStyleProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'code';
  className?: string;
  weight?: 'normal' | 'bold' | 'black';
  italic?: boolean;
}

const TextStyle: React.FC<TextStyleProps> = ({ 
  children, 
  variant = 'body', 
  className = '', 
  weight = 'normal',
  italic = false
}) => {
  const base = "font-mono tracking-tighter leading-tight";
  
  const variants = {
    h1: "text-5xl md:text-7xl uppercase",
    h2: "text-3xl md:text-5xl uppercase",
    h3: "text-xl md:text-2xl uppercase",
    body: "text-base",
    caption: "text-[10px] uppercase tracking-[0.2em] font-black",
    code: "text-sm bg-slate-200 dark:bg-slate-800 px-1 py-0.5",
  };

  const weights = {
    normal: "font-medium",
    bold: "font-bold",
    black: "font-black",
  };

  const combinedClasses = [
    base,
    variants[variant],
    weights[weight],
    italic ? "italic" : "",
    className
  ].join(" ");

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};

export default TextStyle;
