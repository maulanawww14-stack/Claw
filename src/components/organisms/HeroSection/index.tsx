import React from 'react';
import { Button, TextStyle, BaseContainer } from '../../atoms';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  image?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  image,
  className = ''
}) => {
  return (
    <section className={`relative py-20 overflow-hidden font-mono ${className}`}>
      {/* Industrial Grid BG */}
      <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none" />
      
      <BaseContainer maxWidth="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5f00]/10 border border-[#ff5f00]/20 text-[#ff5f00] text-[10px] font-black tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ff5f00] shadow-[0_0_8px_#ff5f00]" />
              {subtitle}
            </div>
            
            <TextStyle variant="h1" weight="black" className="leading-none tracking-tighter">
              {title}
            </TextStyle>
            
            <p className="text-lg font-bold text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed border-l-4 border-slate-300 dark:border-slate-800 pl-6">
              // [SYSLOG]: {description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {primaryAction && (
                <Button size="lg" onClick={primaryAction.onClick}>
                  {`>> ${primaryAction.label}`}
                </Button>
              )}
              {secondaryAction && (
                <Button variant="secondary" size="lg" onClick={secondaryAction.onClick}>
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
          
          <div className="relative">
            {image ? (
              <div className="border-8 border-slate-900 dark:border-slate-800 shadow-[20px_20px_0_0_#ff5f00]">
                <img src={image} alt="Hero" className="w-full h-auto grayscale contrast-125" />
              </div>
            ) : (
              <div className="aspect-video bg-slate-200 dark:bg-slate-900 border-4 border-dashed border-slate-400 dark:border-slate-700 flex items-center justify-center text-slate-400 font-black text-xs uppercase tracking-widest p-12 text-center">
                [ VISUAL_DATA_MISSING: INSERT_INDUSTRIAL_ASSET_HERE ]
              </div>
            )}
            {/* Decorative Corner */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-8 border-r-8 border-slate-300 dark:border-slate-800" />
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default HeroSection;
