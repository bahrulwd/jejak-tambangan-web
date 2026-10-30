import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[94vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Scrim Gradients */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000 hover:scale-100"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_h51oc8aISQ1EuBL9nG0377q1PxCu0kLlJy9XRmWARYU6LkaFXIawfWgE67brgcZ-fG7613ye4qkvnb7gTxoY1mh5R0MbduZ-wVGvA8dXA3VNesRWKhCrUwf8Mnm3uHRy96rF_BQS_W580D88pxOFjvAxFDbDgUTpCpMV44SdGua1Nwfr-QGbUWYsgMjEpSrTTFLg8XcVIKr5h0aujujsMDGnaNI5krKV9B3kLpnoDQ5h8IeelZwk')",
        }}
      ></div>

      {/* Tone Protection Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-container/85 via-primary-container/45 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-container/60 via-transparent to-surface-light z-10 pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 lg:px-12 pt-36 lg:pt-44 pb-20 flex flex-col justify-center my-auto">
        <div className="max-w-3xl flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-light/15 backdrop-blur-md shadow-sm border border-white/20">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-text-inverse font-semibold">
              Arsip & Etalase Digital Kelurahan
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-inverse leading-[1.08] drop-shadow-md">
            Jelajahi Keindahan Alam & Budaya Tambangan
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-text-inverse/90 max-w-2xl font-light leading-relaxed drop-shadow-sm">
            Harmoni pusaka peradaban Semarang atas, keteduhan perbukitan hijau, dan denyut karya ekonomi kreatif warga berdaya dalam satu ruang keterbukaan digital.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-5">
            <Link
              to="/potensi"
              className="group inline-flex items-center gap-3 bg-secondary-container text-primary-container hover:bg-secondary-fixed transition-all px-8 py-4 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>Lihat Potensi Desa</span>
              <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-4 group text-left cursor-pointer focus:outline-none"
            >
              <div className="p-2.5 rounded-full bg-surface-light/20 backdrop-blur-md transition group-hover:scale-105 shadow-lg border border-white/20">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shadow-md">
                  <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base text-text-inverse font-medium group-hover:text-secondary-container transition-colors">
                  Tonton Dokumenter
                </span>
                <span className="text-xs text-text-inverse/70 font-sans">
                  14 Menit • Arsip Sejarah
                </span>
              </div>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-light/10 backdrop-blur-md shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">
                history_edu
              </span>
              <span className="text-xs sm:text-sm text-text-inverse font-medium">
                1890+ Titik Awal Sejarah
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-light/10 backdrop-blur-md shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">
                storefront
              </span>
              <span className="text-xs sm:text-sm text-text-inverse font-medium">
                42+ Mitra UMKM
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-light/10 backdrop-blur-md shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">
                park
              </span>
              <span className="text-xs sm:text-sm text-text-inverse font-medium">
                150+ Ha Kawasan Hijau
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Mist Transition SVG */}
      <div className="relative w-full z-20">
        <div className="w-full h-36 bg-gradient-to-t from-surface-light via-surface-light/80 to-transparent"></div>
        <svg
          className="w-full h-16 text-surface-light -mt-8 fill-current preserve-3d"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-container/80 backdrop-blur-sm p-6 animate-in fade-in duration-200">
          <div className="bg-surface-light rounded-3xl max-w-3xl w-full p-6 lg:p-8 flex flex-col gap-4 shadow-2xl relative border border-border-subtle">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">movie</span>
                </div>
                <span className="font-serif font-bold text-lg sm:text-xl text-primary-container">
                  Dokumenter: Babad & Daya Hidup Tambangan
                </span>
              </div>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-surface-container text-text-secondary transition focus:outline-none"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-text-primary flex items-center justify-center relative shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="Dokumenter Sejarah Tambangan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2">
              <span className="text-xs text-text-secondary">
                Produksi: Lembaga Kebudayaan & Informasi Kelurahan Tambangan
              </span>
              <button
                type="button"
                className="px-5 py-2 rounded-full bg-surface-container hover:bg-surface-variant font-medium text-xs text-text-primary transition"
                onClick={() => setIsVideoModalOpen(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
