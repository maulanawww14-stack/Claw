import React from 'react';

interface BadgeProps {
  // Define props here
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="">
      {children || 'Badge Component'}
    </div>
  );
};

export default Badge;
