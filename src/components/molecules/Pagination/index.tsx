import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '' 
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-2 font-mono ${className}`}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-950 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-10 h-10 flex items-center justify-center text-xs font-black border-2 transition-all
              ${currentPage === page 
                ? 'bg-[#ff5f00] text-white border-slate-900 shadow-[2px_2px_0_0_#000]' 
                : 'bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-500 hover:border-[#ff5f00]'}
            `}
          >
            {page < 10 ? `0${page}` : page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-950 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
