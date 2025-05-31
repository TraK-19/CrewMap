import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-glow-blue',
    secondary: 'bg-pink-600 text-white hover:bg-pink-700 shadow-glow-pink',
    outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
    ghost: 'text-gray-300 hover:bg-gray-800 hover:text-white'
  };
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;