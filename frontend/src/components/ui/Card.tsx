import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'light',
  className = '',
}) => {
  const bgStyle =
    variant === 'dark'
      ? 'bg-primary-container text-text-inverse shadow-xl'
      : 'bg-surface-light text-text-primary shadow-sm border border-border-subtle/50';

  return (
    <div className={`rounded-3xl p-6 sm:p-8 transition-all ${bgStyle} ${className}`}>
      {children}
    </div>
  );
};
