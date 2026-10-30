import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background-alt border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 sm:gap-x-10 lg:gap-x-12 xl:gap-x-16 mb-12 sm:mb-16">
          {/* Identity & Socials */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img
                alt="Logo Kelurahan Tambangan"
                className="h-10 w-auto object-contain"
                src="/images/logoTambangan.png"
              />
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Portal resmi pelestarian sejarah luhur dan pemetaan potensi wilayah Kelurahan Tambangan, Mijen, Semarang.
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              <a
                aria-label="Peta Wilayah"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-secondary hover:text-primary-container hover:bg-surface-variant transition-colors border border-border"
                href="https://maps.google.com/?q=Kelurahan+Tambangan+Mijen+Semarang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="Surel"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-secondary hover:text-primary-container hover:bg-surface-variant transition-colors border border-border"
                href="mailto:desawisatatambangan@gmail.com"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                aria-label="Telepon"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-secondary hover:text-primary-container hover:bg-surface-variant transition-colors border border-border"
                href="tel:+6281575880764"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
            </div>
          </div>

          {/* Navigasi Portal */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-1">Navigasi Portal</h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-text-secondary">
              <li>
                <Link className="hover:text-primary-container transition-colors" to="/">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-container transition-colors" to="/sejarah">
                  Lintas Sejarah &amp; Budaya
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-container transition-colors" to="/potensi">
                  Potensi Alam &amp; Wilayah
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan & Aspirasi */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-1">Layanan &amp; Aspirasi</h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-text-secondary">
              <li>
                <Link className="hover:text-primary-container transition-colors" to="/potensi">
                  Peta Jelajah Interaktif
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-primary-container transition-colors"
                  href="https://wa.me/6281575880764?text=Halo%20Kelurahan%20Tambangan,%20saya%20ingin%20menyampaikan%20aspirasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pusat Pengaduan &amp; Kontak
                </a>
              </li>
              <li>
                <Link className="hover:text-primary-container transition-colors" to="/sejarah">
                  Kalender Budaya Desa
                </Link>
              </li>
            </ul>
          </div>

          {/* Kantor Kelurahan */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-1">Kantor Kelurahan</h3>
            <div className="text-xs sm:text-sm text-text-secondary flex flex-col gap-2 leading-relaxed">
              <p>Jl. Raya Tambangan No. 01, Kecamatan Mijen, Kota Semarang, Jawa Tengah 50215</p>
              <div className="pt-1">
                <span className="text-xs font-semibold text-text-primary block">Jam Pelayanan:</span>
                <span className="text-xs text-text-secondary">Senin - Jumat: 08.00 - 15.30 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Bar */}
        <div className="mb-4 py-3 px-4 rounded-xl bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-text-secondary border border-border/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary-container">verified</span>
            <span>
              <span className="font-semibold text-text-primary">Dikelola oleh:</span> Pemerintah Kelurahan Tambangan, Kecamatan Mijen, Kota Semarang
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <span className="material-symbols-outlined text-[14px]">diversity_3</span>
            <span>Didukung KKN UNNES GIAT 17 · Versi 1.0 · 2026</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-text-secondary text-xs">
          <p>© 2026 Kelurahan Tambangan &amp; KKN UNNES GIAT 17. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-text-primary transition-colors cursor-pointer">
              Kebijakan Privasi
            </span>
            <span className="hover:text-text-primary transition-colors cursor-pointer">
              Syarat Penggunaan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
