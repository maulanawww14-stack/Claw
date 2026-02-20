import React, { useState, useEffect } from 'react';
import { Button, TextStyle, Icon } from '../../atoms';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('industrial-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('industrial-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 animate-in slide-in-from-bottom-10 duration-500 font-mono">
      <div className="max-w-7xl mx-auto border-4 border-slate-900 dark:border-[#ff5f00] bg-white dark:bg-slate-900 shadow-[12px_-12px_0_0_rgba(0,0,0,0.1)] p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {/* Top Label */}
        <div className="absolute top-0 left-10 -translate-y-1/2 bg-[#ff5f00] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-slate-900">
           PRIVACY_PROTOCOL_01
        </div>

        <div className="flex items-start gap-6">
           <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center shrink-0">
              <Icon name="ShieldCheck" size={24} className="text-[#ff5f00]" />
           </div>
           <div className="space-y-2">
              <TextStyle variant="h3" weight="black" className="uppercase leading-none">Cookie_Authorization</TextStyle>
              <p className="text-xs font-bold text-slate-500 leading-relaxed max-w-2xl">
                 // System Alert: This operator interface utilizes persistent storage nodes (cookies) to optimize 
                 your tactical experience. By continuing, you authorize data collection according to 
                 PROTOCOL_GDPR_V2.
              </p>
           </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
           <button className="text-[10px] font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900 transition-colors">{'>>'} Configure_Manually</button>
           <Button onClick={handleAccept} size="lg" className="h-14 !px-10 italic">Accept_All_Terms</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
