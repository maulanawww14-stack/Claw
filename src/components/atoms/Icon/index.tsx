import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number | string;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 18, 
  color = 'currentColor', 
  className = '',
  strokeWidth = 2.5
}) => {
  const LucideIcon = LucideIcons[name] as React.FC<any>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />
    </div>
  );
};

export default Icon;
