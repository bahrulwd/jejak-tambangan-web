import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  hasHero?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  hasHero = false,
}) => {
  return (
    <div
      id="main-content"
      className={`w-full min-h-screen ${
        hasHero ? '' : 'pt-28 lg:pt-32 pb-16'
      } ${className}`}
    >
      {children}
    </div>
  );
};
