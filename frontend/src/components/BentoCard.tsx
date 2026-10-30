import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  variant = 'light',
}) => {
  const baseStyles =
    'rounded-[24px] p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300 relative group flex flex-col justify-between';

  const variantStyles =
    variant === 'dark'
      ? 'bg-surface-dark text-on-primary shadow-lg hover:shadow-2xl hover:-translate-y-1'
      : 'bg-surface-light text-text-primary shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1';

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </div>
  );
};

export default BentoCard;
