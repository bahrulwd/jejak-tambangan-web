import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const MainLayout: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Scroll to top automatically when navigating between tabs/pages
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If element takes a moment to mount
        const timer = setTimeout(() => {
          const delayedElement = document.getElementById(targetId);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }
        }, 80);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return (
    <div className="bg-background font-body text-body text-text-primary antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full pt-20 flex-1 bg-background flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
