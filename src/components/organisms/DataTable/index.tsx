import React from 'react';
import { Badge, TextStyle, Icon } from '../../atoms';
import { Pagination, SearchBar } from '../../molecules';

interface TableColumn {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: TableColumn[];
  data: any[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSearch: (q: string) => void;
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ 
  columns, 
  data, 
  currentPage, 
  totalPages, 
  onPageChange,
  onSearch,
  className = '' 
}) => {
  return (
    <div className={`space-y-6 font-mono ${className}`}>
      {/* Table Management Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-4 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
         <div className="w-full md:w-96">
            <SearchBar placeholder="Filter_Records..." onChange={(e) => onSearch(e.target.value)} />
         </div>
         <div className="flex items-center gap-4">
            <TextStyle variant="caption">Status: Online</TextStyle>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
         </div>
      </div>

      {/* Data Grid */}
      <div className="border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-900 dark:border-slate-700">
              {columns.map(col => (
                <th key={col.key} className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  // {col.label}
                </th>
              ))}
              <th className="p-5 text-[10px] font-black uppercase text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-200 dark:divide-slate-800">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                {columns.map(col => (
                  <td key={col.key} className="p-5">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tabular-nums uppercase">
                       {row[col.key]}
                    </span>
                  </td>
                ))}
                <td className="p-5 text-right">
                   <button className="p-2 border-2 border-slate-300 dark:border-slate-700 text-slate-400 hover:border-[#ff5f00] hover:text-[#ff5f00] transition-colors">
                      <Icon name="ExternalLink" size={14} />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Management */}
      <div className="flex items-center justify-between p-6 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900">
         <TextStyle variant="caption" className="text-slate-400 tracking-widest italic">
            Displaying_Page_{currentPage}_of_{totalPages}
         </TextStyle>
         <Pagination 
           currentPage={currentPage} 
           totalPages={totalPages} 
           onPageChange={onPageChange} 
         />
      </div>
    </div>
  );
};

export default DataTable;
