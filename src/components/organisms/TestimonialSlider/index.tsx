import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TextStyle, Icon, Rating } from '../../atoms';

interface Testimonial {
  id: string;
  user: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialSliderProps {
  items: Testimonial[];
  className?: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ items, className = '' }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const active = items[index];

  return (
    <div className={`font-mono border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 relative overflow-hidden shadow-[12px_12px_0_0_rgba(0,0,0,0.1)] ${className}`}>
      {/* Decorative BG Icon */}
      <Quote size={120} className="absolute -top-6 -right-6 text-[#ff5f00] opacity-5 pointer-events-none rotate-12" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
         {/* User Identity Column */}
         <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 border-4 border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1">
               <div className="w-full h-full bg-slate-200 dark:bg-slate-950 flex items-center justify-center text-3xl font-black text-slate-400">
                  {active.avatar ? <img src={active.avatar} alt={active.user} className="w-full h-full grayscale" /> : active.user[0]}
               </div>
            </div>
            <div>
               <TextStyle variant="h3" weight="black" className="leading-none mb-1 uppercase tracking-tight">{active.user}</TextStyle>
               <p className="text-[10px] font-bold text-[#ff5f00] uppercase tracking-widest leading-none">{active.role}</p>
            </div>
         </div>

         {/* Content Column */}
         <div className="md:col-span-3 space-y-8 border-l-4 border-slate-100 dark:border-slate-800 pl-12 relative">
            <Rating value={active.rating} />
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300 leading-relaxed italic uppercase">
               " {active.content} "
            </p>
            
            <div className="flex items-center justify-between pt-8 border-t-2 border-slate-100 dark:border-slate-800">
               <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  INDEX: 0{index + 1} / 0{items.length}
               </div>
               <div className="flex gap-2">
                  <button 
                    onClick={prev}
                    className="p-3 border-2 border-slate-900 dark:border-slate-700 hover:bg-[#ff5f00] hover:text-white transition-all"
                  >
                    <ChevronLeft size={16} strokeWidth={3} />
                  </button>
                  <button 
                    onClick={next}
                    className="p-3 border-2 border-slate-900 dark:border-slate-700 hover:bg-[#ff5f00] hover:text-white transition-all shadow-[4px_4px_0_0_#000]"
                  >
                    <ChevronRight size={16} strokeWidth={3} />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
