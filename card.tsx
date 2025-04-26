import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseClasses = 'bg-white rounded-lg';
  
  const variantClasses = {
    default: 'p-6',
    bordered: 'p-6 border border-gray-200',
    elevated: 'p-6 shadow-md',
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
