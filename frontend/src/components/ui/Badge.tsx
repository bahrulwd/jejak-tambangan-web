import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'maroon' | 'glass' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const variantClasses = {
    gold: 'bg-secondary-container/20 text-secondary border border-secondary-container/30',
    maroon: 'bg-primary-container text-text-inverse',
    glass: 'bg-surface-light/20 backdrop-blur-md text-text-inverse border border-white/20',
    neutral: 'bg-surface-container text-text-secondary',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
