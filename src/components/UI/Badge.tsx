import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = '#3B82F6',
  className = '' 
}) => {
  // Create dynamic style with custom color
  const badgeStyle = {
    backgroundColor: `${color}20`, // Add transparency to the color
    color: color,
    borderColor: `${color}40`, // Slightly more opaque for border
  };

  return (
    <span 
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${className}`}
      style={badgeStyle}
    >
      {children}
    </span>
  );
};

export default Badge;