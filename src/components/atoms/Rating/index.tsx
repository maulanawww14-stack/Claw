import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  onRate?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  max = 5, 
  onRate, 
  readOnly = true,
  className = '' 
}) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars.map((star) => (
        <button
          key={star}
          disabled={readOnly}
          onClick={() => onRate?.(star)}
          className={`
            transition-all duration-200
            ${!readOnly ? 'hover:scale-125 cursor-pointer' : 'cursor-default'}
            ${star <= value ? 'text-[#ff5f00]' : 'text-slate-300 dark:text-slate-800'}
          `}
        >
          <Star 
            size={18} 
            fill={star <= value ? 'currentColor' : 'none'} 
            strokeWidth={3} 
          />
        </button>
      ))}
      <span className="ml-2 font-mono text-[10px] font-black text-slate-500 uppercase tracking-widest">
        ({value.toFixed(1)} / {max})
      </span>
    </div>
  );
};

export default Rating;
