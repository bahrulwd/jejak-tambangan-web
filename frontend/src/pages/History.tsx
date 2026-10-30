import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { EASING_NATURAL } from '../components/ui/MotionWrappers';

/**
 * Hero Section Animation Variants (Matching Home Hero)
 * Staggered Fade Up with 0.1s delay between each element.
 */
const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING_NATURAL,
    },
  },
};

/**
 * 3 Overlapping Bento Preview Cards Animation Variants (Matching Home)
 * Sequential Fade Up after the hero text loads.
 */
const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.45,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING_NATURAL,
    },
  },
};

export const History: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Consistent with Home Hero: Centered Alignment & Staggered Animations) */}
      <section className="relative w-full -mt-14 sm:-mt-[4.5rem] overflow-hidden bg-on-background" id="hero">
        {/* Slow Infinite Zoom Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            className="w-full h-full object-cover"
            alt="Panorama sejarah dan terasering asri Kelurahan Tambangan"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRerzs3F5OFQOcl0Ej4Wyoh-loqmrC6uIyZDPalDw53dk-Npk8SX7GfuIMDtAVPUd304JDtTN9AMPCoHrw73VKhpdfEW50Chp3-4TQu1nmliIVe7-oJpHPhbDjbn8omDU5VtJJpxrdT6K3F6eh1JcD2O0bs0rkLcXRqHDArM90RevGuQ0aNwT6ZPdp5r_VTdoaIY7RAmfE0MccxW7R1eLWBRheDpDsO7sZjX2dsU0uQX0NvT5wlqeEOA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/75 to-on-background/45 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Hero Content Container - Centered Alignment & Staggered Fade Up */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 flex flex-col items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col items-center text-center gap-5 sm:gap-6"
          >
            {/* Heritage Micro Badge with Animated Pulse */}
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2.5 bg-black/45 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 w-fit shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                Portal Resmi Arsip &amp; Sejarah Kelurahan
              </span>
            </motion.div>

            {/* Headline with Staggered Fade Up */}
            <motion.h1
              variants={heroItemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md text-balance"
            >
              Menelusuri Jejak, Cerita,<br className="hidden md:inline" />
              <span className="text-secondary-fixed"> dan Perjalanan Tambangan</span>
            </motion.h1>

            {/* Subheadline with Staggered Fade Up */}
            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-normal"
            >
              Menyusuri 3,58 km² ruang kehidupan Kelurahan Tambangan: penuturan sesepuh Mbah Ngadi tentang jejak Sunan Kalijaga di Jati Ombo &amp; Sungai Bonijo, tradisi sakral Nyadran bulan Rajab, integrasi PP 16/1976, pemekaran PP 50/1992, hingga kesenian langka Laes.
            </motion.p>

            {/* CTA Buttons with Staggered Fade Up */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-1"
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_circle
                </span>
                <span>Putar Dokumenter</span>
              </button>

              <a
                href="#linimasa"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">timeline</span>
                <span>Telusuri Linimasa</span>
              </a>
            </motion.div>

            {/* Quick Stat Badges with Staggered Fade Up */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2 sm:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">map</span>
                <span>Luas Wilayah 3,58 km²</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">history_edu</span>
                <span>PP 16/1976 &amp; 50/1992</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">diversity_3</span>
                <span>Tradisi Nyadran &amp; Laes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERLAPPING BENTO PREVIEW CARDS (Sequential Fade Up matching Home) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 w-full mb-12 sm:mb-16">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {/* Bento Card 1: Warisan Leluhur */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            href="#linimasa"
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">account_balance</span>
                  01 / Warisan Leluhur
                </span>
                <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">history_edu</span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Sejarah Perintis</h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Kisah penuturan sesepuh Mbah Ngadi mengenai jejak Sunan Kalijaga di Jati Ombo, penarikan kayu ke Sungai Bonijo, dan tradisi Nyadran bulan Rajab.
              </p>
            </div>
            <div className="pt-4 mt-auto flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Buka Linimasa Peradaban</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>

          {/* Bento Card 2: Dokumenter Budaya */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            href="#dokumenter"
            className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed text-primary-container text-xs font-bold rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">movie</span>
                  02 / Dokumenter Resmi
                </span>
                <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">videocam</span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Dokumenter: Jejak Tambangan</h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Video resmi (09:48) karya kolaborasi Dewi Ananda Agustin &amp; Muhammad Bahrul Widad: penuturan Mbah Ngadi, tradisi Nyadran, dan geliat potensi Tambangan.
              </p>
            </div>
            <div className="pt-4 mt-auto flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Tonton Dokumenter</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>

          {/* Bento Card 3: Falsafah & Arsip */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            href="#falsafah-arsip"
            className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-bold rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">policy</span>
                  03 / Falsafah &amp; Regulasi
                </span>
                <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">history_edu</span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Falsafah &amp; Arsip</h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Asal-usul nama Tambangan dari seutas tali tambang penarik kayu jati, tradisi sakral Nyadran, serta arsip yuridis PP 16/1976 dan PP 50/1992.
              </p>
            </div>
            <div className="pt-4 mt-auto flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Pelajari Falsafah &amp; Arsip</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>
        </motion.div>
      </section>

      {/* 3. SECTION LINIMASA SEJARAH DESA (bg-background-alt) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background-alt overflow-hidden" id="linimasa">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-slate-900 text-xs uppercase font-bold mb-3 tracking-wide shadow-sm">
              <span className="material-symbols-outlined text-[16px]">timeline</span>
              Linimasa Leluhur &amp; Kelurahan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-3">
              Perjalanan Tambangan dari Masa ke Masa
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Menelusuri transformasi autentik Kelurahan Tambangan berlandaskan arsip negara, toponimi lokal, dan saksi sejarah peradaban lereng perbukitan Mijen.
            </p>
          </div>

          {/* Timeline Structured Flow (Vertical Alternating Layout) */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Timeline Vertical Spine */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-secondary-fixed-dim -translate-x-1/2 rounded-full"></div>

            {/* Timeline Item 01: Sebelum 1976 */}
            <div className="relative flex flex-col md:flex-row items-start mb-12 sm:mb-16 group">
              <div className="hidden md:flex w-1/2 pr-8 justify-end text-right">
                <div className="bg-surface p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all w-full border border-border/60">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs rounded-full mb-2 font-bold shadow-xs">
                    Masa Klasik &amp; Pra-1976 • Tutur Sesepuh Mbah Ngadi
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Jejak Sunan Kalijaga, Sungai Bonijo &amp; Tradisi Nyadran
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Menurut penuturan sesepuh Mbah Ngadi, nama Tambangan bermula dari perjalanan Sunan Kalijaga mencari kayu jati di kawasan Jati Ombo untuk tiang masjid. Batang kayu ditarik menuju Sungai Bonijo menggunakan seutas tali tambang kokoh. Peristiwa ini melahirkan nama Tambangan. Kehidupan leluhur senantiasa dirawat melalui tradisi sakral Nyadran di bulan Rajab dan mata air Tuk Babon.
                  </p>
                </div>
              </div>

              {/* Node Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-md z-10 border-2 border-primary-container">
                <div className="w-3.5 h-3.5 rounded-full bg-primary-container"></div>
              </div>

              {/* Mobile / Right Column View */}
              <div className="pl-12 md:pl-8 w-full md:w-1/2 md:hidden">
                <div className="bg-surface p-6 sm:p-7 rounded-2xl shadow-sm w-full border border-border/60">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs rounded-full mb-2 font-bold shadow-xs">
                    Masa Klasik &amp; Pra-1976 • Tutur Sesepuh Mbah Ngadi
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Jejak Sunan Kalijaga, Sungai Bonijo &amp; Tradisi Nyadran
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Penuturan sesepuh Mbah Ngadi: Sunan Kalijaga menarik kayu jati dari Jati Ombo menuju Sungai Bonijo dengan seutas tali tambang. Dari peristiwa ini nama Tambangan berasal, diperkuat tradisi Nyadran bulan Rajab.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 pl-8 pt-2">
                <span className="text-2xl text-primary-container/25 font-bold">
                  Pra-1976
                </span>
              </div>
            </div>

            {/* Timeline Item 02: 1976 */}
            <div className="relative flex flex-col md:flex-row items-start mb-12 sm:mb-16 group">
              <div className="hidden md:flex w-1/2 pr-8 justify-end pt-2 text-right">
                <span className="text-2xl text-primary-container/25 font-bold">
                  1976
                </span>
              </div>

              {/* Node Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-md z-10 border-2 border-primary-container">
                <div className="w-3.5 h-3.5 rounded-full bg-primary-container"></div>
              </div>

              <div className="pl-12 md:pl-8 w-full md:w-1/2">
                <div className="bg-surface p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all w-full border border-border/60">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs rounded-full mb-2 font-bold shadow-xs">
                    Tahun 1976 • PP No. 16 Tahun 1976
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Integrasi ke Kotamadya Semarang
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Pemerintah Republik Indonesia menetapkan PP No. 16 Tahun 1976 tentang perluasan daerah Kotamadya Dati II Semarang. Desa Tambangan secara hukum dialihkan dari Kabupaten Kendal ke wilayah perwakilan Kecamatan Mijen, Kota Semarang.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 03: 1992 */}
            <div className="relative flex flex-col md:flex-row items-start mb-12 sm:mb-16 group">
              <div className="hidden md:flex w-1/2 pr-8 justify-end text-right">
                <div className="bg-surface p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all w-full border border-border/60">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs rounded-full mb-2 font-bold shadow-xs">
                    Tahun 1992 • PP No. 50 Tahun 1992
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Pemekaran Tambangan &amp; Jatisari
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Berdasarkan PP No. 50 Tahun 1992, Desa Tambangan dimekarkan menjadi dua kelurahan mandiri di Kecamatan Mijen: Kelurahan Tambangan dan Kelurahan Jatisari, untuk mengoptimalkan pelayanan publik dan tata kelola agraris perbukitan.
                  </p>
                </div>
              </div>

              {/* Node Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-md z-10 border-2 border-primary-container">
                <div className="w-3.5 h-3.5 rounded-full bg-primary-container"></div>
              </div>

              <div className="pl-12 md:pl-8 w-full md:w-1/2 md:hidden">
                <div className="bg-surface p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-sm w-full border border-border/60">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs rounded-full mb-2 font-bold shadow-xs">
                    Tahun 1992 • PP No. 50 Tahun 1992
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Pemekaran Tambangan &amp; Jatisari
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Desa Tambangan dimekarkan menjadi dua kelurahan definitif: Kelurahan Tambangan dan Kelurahan Jatisari di Kecamatan Mijen.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2 pl-8 pt-2">
                <span className="text-2xl text-primary-container/25 font-bold">
                  1992
                </span>
              </div>
            </div>

            {/* Timeline Item 04: 2018-2019 */}
            <div className="relative flex flex-col md:flex-row items-start mb-12 sm:mb-16 group">
              <div className="hidden md:flex w-1/2 pr-8 justify-end pt-2 text-right">
                <span className="text-2xl text-primary-container/25 font-bold">
                  2018-2019
                </span>
              </div>

              {/* Node Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-md z-10 border-2 border-primary-container">
                <div className="w-3.5 h-3.5 rounded-full bg-primary-container"></div>
              </div>

              <div className="pl-12 md:pl-8 w-full md:w-1/2">
                <div className="bg-surface p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all w-full border border-border/60">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs rounded-full mb-2 font-bold shadow-xs">
                    2018-2019 • Agrowisata &amp; Seni Laes
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Kampung Wisata Sawah &amp; Paguyuban Laes
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Pada 30 Desember 2018, diresmikan Kampung Wisata Sawah dan Burung Hantu (<em>Tyto alba</em>) sebagai sahabat petani pembasmi hama tikus alami. Disusul revitalisasi kesenian tradisional langka Laes oleh Paguyuban Ngudi Laras Wahyu Budoyo.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 05: Kini */}
            <div className="relative flex flex-col md:flex-row items-start group">
              <div className="hidden md:flex w-1/2 pr-8 justify-end pt-2 text-right">
                <span className="text-2xl text-primary-container/25 font-bold">
                  Kini
                </span>
              </div>

              {/* Node Dot Active Glowing */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shadow-lg z-10">
                <div className="w-3.5 h-3.5 rounded-full bg-surface-container-lowest animate-ping"></div>
              </div>

              <div className="pl-12 md:pl-8 w-full md:w-1/2">
                <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-md w-full border border-border">
                  <span className="inline-block px-3 py-1 bg-primary-container text-on-primary text-xs font-bold rounded-full mb-2 shadow-xs">
                    Era Sekarang • Jadesta &amp; Digital Heritage
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Tambangan — Sawah, Laes, dan Anggrek
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Terdaftar di Jejaring Desa Wisata (Jadesta) Kemenparekraf dengan lonjakan kunjungan wisatawan +259% (768 kunjungan di 2025), perputaran ekonomi wisata Rp200 juta, kemitraan sentra budidaya anggrek CV Bunga Alam Lestari, ikon Soto Sawah Mbak Tutik, serta transformasi portal digital heritage bersama KKN UNNES GIAT 17.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. SECTION VIDEO DOKUMENTER (bg-white) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden" id="dokumenter">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full mb-3 tracking-wide uppercase shadow-sm">
                <span className="material-symbols-outlined text-[14px]">movie</span>
                Dokumenter Resmi Kelurahan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Video Dokumenter: Jejak Tambangan
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
              Dokumenter resmi karya kolaborasi Dewi Ananda Agustin &amp; Muhammad Bahrul Widad (UNNES GIAT 17 KELURAHAN TAMBANGAN) bersama Pemerintah Kelurahan Tambangan: merawat cerita tutur sejarah Sunan Kalijaga, tradisi sakral Nyadran, hingga ragam potensi eduwisata dan kemandirian warga.
            </p>
          </div>

          {/* Large 16:9 Video Player Card */}
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="group relative w-full aspect-video rounded-2xl sm:rounded-2xl overflow-hidden shadow-2xl bg-on-background cursor-pointer border border-border"
          >
            <img
              alt="Thumbnail Dokumenter Jejak Tambangan"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/images/thumbnail.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

            {/* Center Glowing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-primary-container/40 animate-ping"></div>
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary-container hover:bg-primary-hover text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[32px] sm:text-[38px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div className="flex flex-col gap-1.5 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 text-secondary-fixed text-xs font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Film Dokumenter Resmi Kelurahan
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Jejak Tambangan
                </h3>
                <p className="text-xs sm:text-sm text-white/80 hidden sm:block leading-relaxed">
                  Produksi Kolaborasi Dewi Ananda Agustin &amp; Muhammad Bahrul Widad (UNNES GIAT 17 KELURAHAN TAMBANGAN) • Menyusuri 3,58 km² ruang historis dan potensi warga Tambangan.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-white border border-white/20">
                  09:48 • Full HD
                </span>
              </div>
            </div>
          </div>

          {/* Video Metadata Bento Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-surface rounded-2xl sm:rounded-2xl border border-border">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Waktu Putar</span>
              <span className="text-base sm:text-lg font-bold text-text-primary mt-1">09 Menit 48 Detik</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Produksi Kolaborasi</span>
              <span className="text-xs sm:text-sm font-bold text-text-primary mt-1 leading-snug">
                Dewi Ananda Agustin &amp; Muhammad Bahrul Widad (UNNES GIAT 17 KELURAHAN TAMBANGAN)
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Fokus Dokumentasi</span>
              <span className="text-base sm:text-lg font-bold text-text-primary mt-1">Sejarah Tutur &amp; Potensi</span>
            </div>
            <div className="flex items-center md:justify-end">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-colors w-full md:w-auto cursor-pointer"
              >
                <span>Tonton Sekarang</span>
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. SECTION FALSAFAH TOPONIMI & ARSIP YURIDIS (bg-white) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden" id="falsafah-arsip">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full mb-3 tracking-wide uppercase shadow-sm">
                <span className="material-symbols-outlined text-[14px]">policy</span>
                Toponimi &amp; Tradisi Leluhur
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Falsafah Nama Tambangan, Tradisi Nyadran &amp; Arsip Negara
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
              Menyingkap asal-usul toponimi penarikan kayu jati Sunan Kalijaga di Sungai Bonijo, sakralnya tradisi Nyadran bulan Rajab, berpadu dengan dua regulasi arsip negara pembentuk batas resmi wilayah.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card (7 Cols): Toponimi & Falsafah Tali Tambang */}
            <div className="lg:col-span-7 bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="material-symbols-outlined text-[16px]">cable</span>
                  Asal-Usul Nama &amp; Tradisi Leluhur
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-4">
                  Kisah Tutur Mbah Ngadi: Jejak Sunan Kalijaga di Jati Ombo &amp; Sungai Bonijo
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  <p>
                    Sebagaimana dituturkan oleh sesepuh Tambangan <strong className="text-text-primary font-semibold">Mbah Ngadi</strong>, asal-usul nama wilayah ini berkaitan erat dengan perjalanan <strong className="text-text-primary font-semibold">Sunan Kalijaga</strong> ketika mencari kayu jati pilihan untuk tiang pembangunan masjid.
                  </p>
                  <p>
                    Kisah tersebut bermula dari pohon jati di kawasan <em>Jati Ombo</em>. Setelah ditebang, batang kayu jati berukuran raksasa itu harus dibawa menuju aliran <em>Sungai Bonijo</em> untuk dihanyutkan melanjutkan perjalanan. Pada masa sarana angkut masih sangat terbatas, para pendahulu menggunakan <strong className="text-text-primary font-semibold">seutas tali tambang kokoh</strong> untuk menarik dan memindahkan kayu tersebut bersama-sama melintasi lembah. Dari peristiwa penarikan kayu dengan tali tambang inilah, sebutan <em>Tambangan</em> diabadikan menjadi nama wilayah.
                  </p>
                </div>

                {/* 3 Pillars of Living Philosophy */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-border/70 shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">hub</span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-text-primary">
                        Tali Tambang &amp; Nilai Gotong Royong
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        Menarik gelondongan kayu jati menuntut keselarasan tenaga dan tekad bersama—menjadi akar karakter masyarakat Tambangan yang menjunjung tinggi kebersamaan dan musyawarah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-border/70 shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-secondary-fixed/60 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">diversity_3</span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-text-primary">
                        Tradisi Sakral Nyadran (Bulan Rajab)
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        Dilaksanakan rutin setiap bulan Rajab menjelang Ramadan. Warga berkumpul memanjatkan doa mengenang para leluhur, mengungkapkan rasa syukur, dan mempererat silaturahmi melalui hidangan tradisional bersama.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-border/70 shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-tertiary-fixed/60 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">palette</span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-text-primary">
                        Kearifan Alam &amp; Warisan Seni Membatik
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        Menjaga kemurnian Sungai Bonijo dan mata air Tuk Babon, serta melestarikan seni canting batik tulis yang ditekuni ibu-ibu warga Tambangan sebagai produk budaya bernilai ekonomi tinggi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/80 flex items-center justify-between text-xs text-text-secondary">
                <span className="flex items-center gap-1.5 font-medium text-text-primary">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">verified</span>
                  Warisan Budaya &amp; Tradisi Lisan Warga
                </span>
                <span>Wawancara Sesepuh Mbah Ngadi</span>
              </div>
            </div>

            {/* Right Card (5 Cols): Tonggak Arsip Yuridis Negara */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Legal Milestone 1: PP 16/1976 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-md bg-primary-fixed text-primary-container font-mono text-[11px] font-bold">
                      PP NO. 16 TAHUN 1976
                    </span>
                    <span className="text-xs text-text-secondary">Lembaran Negara RI</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                    Integrasi dari Kendal ke Kota Semarang
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Tonggak penataan ruang strategis yang secara yuridis mengalihkan wilayah Desa Tambangan dari administrasi Kabupaten Kendal masuk ke wilayah pengembangan Kotamadya Dati II Semarang.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-text-secondary">
                  <span className="font-semibold text-text-primary">Ditetapkan: 1976</span>
                  <span className="inline-flex items-center gap-1 text-primary-container font-medium">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Status Hukum Tetap
                  </span>
                </div>
              </div>

              {/* Legal Milestone 2: PP 50/1992 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-md bg-secondary-fixed text-secondary font-mono text-[11px] font-bold">
                      PP NO. 50 TAHUN 1992
                    </span>
                    <span className="text-xs text-text-secondary">Lembaran Negara RI</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                    Pemekaran Definitif Kelurahan Tambangan
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Regulasi resmi yang memekarkan wilayah menjadi Kelurahan Tambangan dan Kelurahan Jatisari secara definitif, menetapkan tapal batas wilayah dan susunan kelembagaan pemerintahan kelurahan modern.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-text-secondary">
                  <span className="font-semibold text-text-primary">Ditetapkan: 1992</span>
                  <span className="inline-flex items-center gap-1 text-secondary font-medium">
                    <span className="material-symbols-outlined text-[14px]">domain</span>
                    Kelurahan Definitif Mandiri
                  </span>
                </div>
              </div>

              {/* Official Source Banner */}
              <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3 text-xs text-text-secondary">
                <span className="material-symbols-outlined text-[20px] text-primary-container shrink-0">library_books</span>
                <span>
                  Sumber data hukum dirujuk dari Lembaran Negara Republik Indonesia dan arsip Bagian Pemerintahan Kota Semarang.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. SECTION CERITA TOKOH MASYARAKAT (bg-background-alt) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background-alt overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full mb-3 tracking-wide uppercase shadow-sm">
                <span className="material-symbols-outlined text-[14px]">record_voice_over</span>
                Oral History Archive
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Suara dari Masyarakat
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
              Rekaman penuturan mendalam bersama tetua adat, aparatur kelurahan, dan perintis gerakan ekonomi perempuan desa.
            </p>
          </div>

          {/* 3 Magazine Interview Cards (Matching Home Bento Cards with Equal Heights) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Mbah Ngadi (Sesepuh Penutur Sejarah) */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-border h-full"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container text-slate-900 flex items-center justify-center font-bold text-lg shadow-sm">
                    MN
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-text-primary leading-tight">
                      Mbah Ngadi
                    </h3>
                    <span className="text-xs text-text-secondary mt-0.5">
                      Sesepuh Penutur Sejarah Tambangan
                    </span>
                  </div>
                </div>
                <div className="mb-3 text-secondary">
                  <span className="material-symbols-outlined text-[28px] opacity-70">format_quote</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary italic leading-relaxed mb-4">
                  &ldquo;Sebuah cerita dari masa lalu tidak cukup hanya didengar. Ia perlu dituturkan, dijaga, dan diwariskan dari awal hingga akhir agar generasi berikutnya memahami kisah perjalanan Sunan Kalijaga, kayu jati di Jati Ombo, dan seutas tambang di Sungai Bonijo.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 mt-auto">
                <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full shadow-xs">
                  Penutur Sejarah &amp; Asal-Usul Nama
                </span>
              </div>
            </motion.div>

            {/* Card 2: Bapak Lurah Tambangan */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-border h-full"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-primary-container flex items-center justify-center font-bold text-lg shadow-sm">
                    LT
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-text-primary leading-tight">
                      Bapak Lurah Tambangan
                    </h3>
                    <span className="text-xs text-text-secondary mt-0.5">
                      Kepala Kelurahan Tambangan, Kec. Mijen
                    </span>
                  </div>
                </div>
                <div className="mb-3 text-primary-container">
                  <span className="material-symbols-outlined text-[28px] opacity-70">format_quote</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary italic leading-relaxed mb-4">
                  &ldquo;Kelurahan Tambangan memiliki karakter masyarakat yang menjunjung tinggi kebersamaan, gotong royong, dan nilai budaya para pendahulu. Dari kehidupan agraris, kini kami melangkah maju memadukan warisan sejarah dengan potensi eduwisata, kuliner, anggrek, dan batik.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 mt-auto">
                <span className="inline-block px-3 py-1 bg-primary-fixed text-primary-container text-xs font-bold rounded-full shadow-xs">
                  Pemerintah Kelurahan Tambangan
                </span>
              </div>
            </motion.div>

            {/* Card 3: Perintis Soto Sawah */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-border h-full"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-slate-900 flex items-center justify-center font-bold text-lg shadow-sm">
                    TH
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-text-primary leading-tight">
                      Ibu Tutik Handayani
                    </h3>
                    <span className="text-xs text-text-secondary mt-0.5">
                      Perintis Soto Sawah Mbak Tutik
                    </span>
                  </div>
                </div>
                <div className="mb-3 text-secondary">
                  <span className="material-symbols-outlined text-[28px] opacity-70">format_quote</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary italic leading-relaxed mb-4">
                  &ldquo;Berawal dari warung makan sederhana di dekat area sekolah, kami bersyukur Soto Sawah kini berkembang dengan memadukan sajian soto rempah, aneka jajanan pasar, dan indahnya lanskap persawahan terbuka yang merangkul warga dan pelancong.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 mt-auto">
                <span className="inline-block px-3 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full shadow-xs">
                  Ikon Gastronomi Sawah Tambangan
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MODAL 1: DOKUMENTER VIDEO MODAL (Matching Home Video Modal) */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 flex flex-col gap-4 shadow-2xl relative border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-slate-900 shadow-sm font-bold">
                  <span className="material-symbols-outlined text-[22px]">movie</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary leading-tight">
                    Jejak Tambangan (Durasi: 09:48)
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                    Produksi Kolaborasi Dewi Ananda Agustin &amp; Muhammad Bahrul Widad (UNNES GIAT 17 KELURAHAN TAMBANGAN)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-10 h-10 rounded-full bg-surface hover:bg-surface-variant text-text-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup video"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-text-primary shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1FZTSQjrH5vvBz85c1WALHpTIhC2y73-s/preview"
                title="Jejak Tambangan - Video Dokumenter Kelurahan Tambangan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2">
              <span className="text-xs sm:text-sm text-text-secondary">
                Rekaman penuturan sesepuh Mbah Ngadi, tradisi Nyadran bulan Rajab, dan potensi eduwisata sawah Tambangan.
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href="https://drive.google.com/file/d/1FZTSQjrH5vvBz85c1WALHpTIhC2y73-s/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-surface hover:bg-surface-variant text-xs sm:text-sm font-semibold text-text-primary transition-colors cursor-pointer border border-border"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  <span>Buka di Drive</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-primary-container hover:bg-primary-hover text-xs sm:text-sm font-semibold text-white transition-colors cursor-pointer shadow-sm"
                >
                  Tutup Pemutar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;


