import React from 'react';
import { Icon, TextStyle } from '../../atoms';

interface Step {
  id: number | string;
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  activeStep: number; // 1-indexed
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep, className = '' }) => {
  return (
    <div className={`w-full font-mono ${className}`}>
      <div className="flex items-start justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -z-10" />
        
        {steps.map((step, index) => {
          const isCompleted = activeStep > index + 1;
          const isActive = activeStep === index + 1;
          const isPending = activeStep < index + 1;

          return (
            <div key={step.id} className="flex flex-col items-center group text-center px-4 relative bg-slate-50 dark:bg-[#020617]">
              {/* Step Node */}
              <div className={`
                w-12 h-12 flex items-center justify-center border-4 transition-all duration-300
                ${isCompleted ? 'bg-emerald-500 border-emerald-700 text-white' : ''}
                ${isActive ? 'bg-[#ff5f00] border-slate-900 dark:border-slate-700 text-white scale-110 shadow-[0_0_15px_#ff5f00]' : ''}
                ${isPending ? 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-400' : ''}
              `}>
                {isCompleted ? (
                  <Icon name="Check" size={20} strokeWidth={4} />
                ) : (
                  <span className="text-sm font-black italic tabular-nums">0{index + 1}</span>
                )}
              </div>

              {/* Label Area */}
              <div className="mt-4 space-y-1">
                <TextStyle 
                  variant="caption" 
                  className={`
                    block transition-colors duration-300
                    ${isActive ? 'text-[#ff5f00]' : isCompleted ? 'text-emerald-600' : 'text-slate-400'}
                  `}
                >
                  {step.label}
                </TextStyle>
                {step.description && (
                  <p className="text-[9px] font-bold text-slate-500 uppercase opacity-50 max-w-[120px] mx-auto leading-tight">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
