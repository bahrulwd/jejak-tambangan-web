import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    // Parent Active State: Rute kuliner/ikon lokal mewarisi status aktif menu Potensi
    if (path === '/potensi' && (location.pathname.startsWith('/soto-sawah') || location.pathname.startsWith('/soto'))) return true;
    return false;
  };

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Sejarah', path: '/sejarah' },
    { label: 'Potensi', path: '/potensi' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border/80 shadow-[0_1px_6px_rgba(0,0,0,0.07)] transition-all duration-300">
      {/* Top institutional bar */}
      <div className="hidden sm:flex items-center justify-center bg-primary-container/95 text-white text-[10.5px] font-medium tracking-wide px-4 py-1 gap-3">
        <span className="material-symbols-outlined text-[13px]">location_city</span>
        <span>Kelurahan Tambangan · Kec. Mijen · Kota Semarang · Provinsi Jawa Tengah</span>
        <span className="opacity-40">|</span>
        <a
          href="https://semarangkota.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
        >
          semarangkota.go.id
        </a>
      </div>

      <div className="h-14 sm:h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo + Identity */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3 shrink-0 group py-1"
          aria-label="Kelurahan Tambangan"
        >
          <img
            alt="Kelurahan Tambangan"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/images/logoTambangan.png"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-bold text-text-primary tracking-tight">Kelurahan Tambangan</span>
            <span className="text-[10px] text-text-secondary tracking-wide">Portal Sejarah & Potensi Wilayah</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                if (location.pathname === item.path) {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
              }}
              className={`group relative py-1 text-[13px] font-medium tracking-normal transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-primary-container font-semibold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary-container opacity-100 scale-x-100'
                    : 'bg-primary-container/50 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          <MotionLink
            to="/potensi"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-primary-container hover:bg-primary-hover transition-colors duration-200 group cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[15px]">explore</span>
            <span>Jelajahi Desa</span>
          </MotionLink>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8.5 h-8.5 rounded-full bg-surface flex items-center justify-center text-text-primary hover:bg-surface-variant transition-colors border border-border/60"
            aria-label="Toggle navigasi mobile"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-xl flex flex-col gap-1 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setMobileMenuOpen(false);
                if (location.pathname === item.path) {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
              }}
              className={`px-3.5 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                isActive(item.path)
                  ? 'bg-primary-container/10 text-primary-container font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface'
              }`}
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-border/60">
            <MotionLink
              to="/potensi"
              whileTap={{ scale: 0.97 }}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-2 bg-primary-container text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">explore</span>
              <span>Jelajahi Desa</span>
            </MotionLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
