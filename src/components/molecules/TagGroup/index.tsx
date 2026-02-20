import React from 'react';
import { Badge, TextStyle } from '../../atoms';

interface TagGroupProps {
  tags: string[];
  label?: string;
  className?: string;
  onTagClick?: (tag: string) => void;
}

const TagGroup: React.FC<TagGroupProps> = ({ 
  tags, 
  label, 
  className = '',
  onTagClick 
}) => {
  return (
    <div className={`flex flex-col gap-3 font-mono ${className}`}>
      {label && (
        <TextStyle variant="caption" className="text-slate-500">// {label}</TextStyle>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button 
            key={tag} 
            onClick={() => onTagClick?.(tag)}
            className={`${onTagClick ? 'hover:scale-105 active:scale-95 transition-transform' : ''}`}
          >
            <Badge className="!rounded-none !border-2 !px-3">{tag}</Badge>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagGroup;
