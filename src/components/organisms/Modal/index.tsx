import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { TextStyle, Button, Icon } from '../../atoms';
import { CardHeader, CardFooter } from '../../molecules';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  children, 
  footer,
  size = 'md' 
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl"
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-mono">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Dialog Body */}
      <div className={`
        relative w-full ${sizes[size]} 
        bg-white dark:bg-slate-900 
        border-4 border-slate-900 dark:border-slate-800 shadow-[16px_16px_0_0_rgba(0,0,0,0.1)]
        animate-in zoom-in-95 slide-in-from-bottom-4 duration-300
      `}>
        {/* Decorative Header Bar */}
        <div className="h-2 bg-[#ff5f00] flex items-center justify-center">
           <div className="w-20 h-0.5 bg-white/30" />
        </div>

        <CardHeader 
          title={title} 
          subtitle={subtitle || "SECURE_DIALOG_PROTOCOL_ACTIVE"}
          className="p-10 !pb-6"
          action={
            <button 
              onClick={onClose}
              className="p-2 border-2 border-slate-300 dark:border-slate-800 hover:border-red-500 hover:text-red-500 transition-all"
            >
              <X size={20} strokeWidth={3} />
            </button>
          }
        />

        <div className="p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
           {children}
        </div>

        {footer ? (
          <CardFooter variant="muted" className="!pt-6 !pb-10 !px-10">
            {footer}
          </CardFooter>
        ) : (
          <div className="p-10 pt-0 text-right">
             <Button variant="secondary" size="md" onClick={onClose}>Terminate_Dialog</Button>
          </div>
        )}
        
        {/* Technical Footer Node */}
        <div className="absolute bottom-2 left-4 text-[8px] font-black text-slate-400 opacity-50">
           ID_REF: 0xFD_{Math.floor(Math.random() * 1000)}
        </div>
      </div>
    </div>
  );
};

export default Modal;
