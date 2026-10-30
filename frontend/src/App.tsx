import React from 'react';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <>
      {/* Accessibility: Skip to main content link (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-primary-container focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Lewati ke konten utama
      </a>
      <AppRoutes />
    </>
  );
};

export default App;
