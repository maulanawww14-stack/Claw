import React from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ items, activeTab, onTabChange, className = '' }) => {
  return (
    <div className={`flex border-b-4 border-slate-900 dark:border-slate-800 font-mono ${className}`}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`
            px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative top-[4px]
            ${activeTab === item.id 
              ? 'bg-[#ff5f00] text-white border-x-4 border-t-4 border-slate-900 dark:border-slate-800' 
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
