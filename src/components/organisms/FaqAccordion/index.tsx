import React, { useState } from 'react';
import { AccordionHeader } from '../../molecules';
import { TextStyle } from '../../atoms';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-4 font-mono max-w-4xl mx-auto ${className}`}>
      <div className="mb-10 text-left">
        <TextStyle variant="caption" className="text-[#ff5f00]">CENTRAL_SUPPORT_KNOWLEDGE_BASE</TextStyle>
        <TextStyle variant="h3" weight="black" className="block mt-2 uppercase tracking-tighter">Frequently_Asked_Queries</TextStyle>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-4 border-slate-900 dark:border-slate-800">
            <AccordionHeader
              title={item.question}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              className="!border-0"
              subtitle={`KNOWLEDGE_UNIT_0${index + 1}`}
            />
            {openIndex === index && (
              <div className="p-8 bg-slate-50 dark:bg-slate-950 border-t-4 border-slate-900 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase tracking-tight">
                  <span className="text-[#ff5f00] mr-2">{'>>>'} </span>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
