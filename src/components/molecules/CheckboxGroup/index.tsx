import React from 'react';
import { Checkbox, TextStyle } from '../../atoms';

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  label?: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (newValues: string[]) => void;
  direction?: 'row' | 'col';
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  label, 
  options, 
  values, 
  onChange, 
  direction = 'col',
  className = ''
}) => {
  const handleToggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter(v => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div className={`flex flex-col gap-3 font-mono ${className}`}>
      {label && (
        <TextStyle variant="caption" className="text-slate-500">// {label}</TextStyle>
      )}
      <div className={`flex ${direction === 'row' ? 'flex-row flex-wrap gap-6' : 'flex-col gap-3'}`}>
        {options.map((opt) => (
          <Checkbox 
            key={opt.value}
            label={opt.label}
            checked={values.includes(opt.value)}
            onChange={() => handleToggle(opt.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
