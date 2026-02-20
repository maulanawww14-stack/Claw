import React from 'react';

interface InputGroupProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ children, className = '', label }) => {
  return (
    <div className="flex flex-col gap-1.5 font-mono">
      {label && (
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">// {label}</span>
      )}
      <div className={`flex items-stretch border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 ${className}`}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          // Type casting for props
          const childProps = child.props as any;
          const isInput = child.type === 'input' || childProps.className?.includes('w-full');
          
          return (
            <div 
              key={index}
              className={`
                flex items-center justify-center
                ${!isInput ? 'bg-slate-100 dark:bg-slate-800 px-4 text-[10px] font-black uppercase tracking-tighter text-slate-600 dark:text-slate-400' : 'flex-1'}
                ${index !== 0 ? 'border-l-2 border-slate-900 dark:border-slate-800' : ''}
              `}
            >
              {isInput ? React.cloneElement(child as React.ReactElement<any>, {
                className: `${childProps.className || ''} border-0 bg-transparent w-full focus:ring-0 outline-none px-4 py-2 text-sm uppercase font-bold`.trim()
              }) : child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputGroup;
