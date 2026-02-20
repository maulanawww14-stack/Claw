import React from 'react';
import { Icon, TextStyle, Grid } from '../../atoms';
import * as LucideIcons from 'lucide-react';

interface FeatureItem {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: FeatureItem[];
  title?: string;
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ features, title, className = '' }) => {
  return (
    <div className={`space-y-12 font-mono ${className}`}>
      {title && (
        <div className="flex flex-col items-center text-center space-y-2">
          <TextStyle variant="caption" className="text-[#ff5f00]">OPERATIONAL_CAPABILITIES</TextStyle>
          <TextStyle variant="h2" weight="black">{title}</TextStyle>
          <div className="w-24 h-1 bg-[#ff5f00] mt-4" />
        </div>
      )}
      
      <Grid cols={3} gap={8}>
        {features.map((feature, index) => (
          <div key={index} className="p-10 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#ff5f00] transition-colors relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <span className="text-4xl font-black italic">0{index + 1}</span>
            </div>
            
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-8 border-2 border-slate-900 dark:border-slate-700 shadow-[6px_6px_0_0_#ff5f00]">
              <Icon name={feature.icon} size={28} className="text-[#ff5f00]" />
            </div>
            
            <h3 className="text-xl font-black uppercase mb-4 tracking-tighter text-slate-900 dark:text-white leading-tight">
              {feature.title}
            </h3>
            
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-tight">
              // {feature.description}
            </p>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default FeatureList;
