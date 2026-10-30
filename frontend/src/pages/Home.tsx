import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { NumberCounter } from '../components/ui/NumberCounter';
import { EASING_NATURAL } from '../components/ui/MotionWrappers';

/**
 * Hero Section Animation Variants (Requirement 1)
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
 * 3 Overlapping Bento Preview Cards Animation Variants (Requirement 1)
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

/**
 * Timeline Section Animation Variants (Requirement 3)
 * Staggered Fade In from Left to Right using whileInView.
 */
const timelineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: EASING_NATURAL,
    },
  },
};

export const Home: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full -mt-14 sm:-mt-[4.5rem] overflow-hidden bg-on-background" id="hero">
        {/* Background Image with Slow Infinite Zoom-In Animation (Requirement 1) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            className="w-full h-full object-cover"
            alt="Panorama lanskap terasering asri Kelurahan Tambangan Kecamatan Mijen di waktu senja"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA07BwlizDSbI4Fk-8kuBgV3ARzMWTj36UE64dWGkD971_7wmenfDAlEhLvru79IUNgyGrIJGv8nxEalLYTiWbsnJLHU4uqy8QDsNHnKTrJu6Q1ldW13NXxkRB_LuxhLKOGAstw1vOO3xCfpIu5r2fyYspxp8Pai7yfDNVX7Pv37Ofta2grgVxq1sHUTK8e8CHv2wJmgmjemDZvKPB4mn0W63Lgx1kTyhwZgz7iB2BlREKqhSfgWlHAfw"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/75 to-on-background/45 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Hero Content - Centered Alignment & Staggered Fade Up (Requirement 1) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 flex flex-col items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col items-center text-center gap-5 sm:gap-6"
          >
            {/* Heritage Micro Badge */}
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2.5 bg-black/45 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 w-fit shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                Identitas Kawasan: Sawah, Laes &amp; Anggrek
              </span>
            </motion.div>

            {/* Headline with Staggered Fade Up */}
            <motion.h1
              variants={heroItemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md text-balance"
            >
              Jejak Sejarah, Cerita Warga,<br className="hidden md:inline" />
              <span className="text-secondary-fixed"> dan Potensi Tambangan</span>
            </motion.h1>

            {/* Subheadline with Staggered Fade Up */}
            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-normal"
            >
              Portal digital resmi dokumentasi sejarah, pelestarian kesenian langka Laes, dan pemetaan potensi unggulan Kampung Wisata Sawah, kuliner, serta budidaya anggrek Kelurahan Tambangan, Mijen, Kota Semarang.
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
                <span>Lihat Dokumenter</span>
              </button>

              <a
                href="#potensi-grid"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">explore</span>
                <span>Jelajahi Potensi</span>
              </a>
            </motion.div>

            {/* Quick Stat Badges with Staggered Fade Up */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2 sm:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">landscape</span>
                <span>86,6 Ha Sawah Terasering</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">trending_up</span>
                <span>+259% Wisatawan (Jadesta)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">theater_comedy</span>
                <span>Kesenian Langka Laes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* OVERLAPPING BENTO PREVIEW CARDS - Sequential Fade Up (Requirement 1) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 w-full mb-12 sm:mb-16">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Sejarah Desa */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="h-full"
          >
            <Link
              to="/sejarah"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container/20 text-on-secondary-fixed text-xs font-semibold rounded-full">
                    <span className="material-symbols-outlined text-[14px]">archive</span>
                    Arsip &amp; Sejarah
                  </span>
                  <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">history_edu</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Sejarah Desa</h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Dokumentasi perjalanan Tambangan dari masa ke masa, tersusun rapi untuk generasi masa depan.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Buka Linimasa Sejarah</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Ikon Lokal */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Link
              to="/soto-sawah"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs font-semibold rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    2 Ikon Kebanggaan
                  </span>
                  <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Ikon Lokal</h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Dua daya tarik otentik desa: Soto Sawah Mbak Tutik dan sentra botani asri Taman Anggrek Tambangan.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Buka Profil Soto Sawah</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Potensi Wilayah */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="h-full"
          >
            <Link
              to="/potensi"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-semibold rounded-full">
                    <span className="material-symbols-outlined text-[14px]">eco</span>
                    Wisata &amp; Budaya
                  </span>
                  <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">terrain</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Potensi Wilayah</h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Ruang hijau, fasilitas terpadu, dan inovasi warga dalam menjaga keselarasan alam serta pariwisata.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Buka Potensi Wilayah</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: DIGITAL HERITAGE INTRODUCTION - Scroll Reveal (Requirement 2) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background-alt overflow-hidden" id="potensi-grid">
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
                <span className="material-symbols-outlined text-[14px]">assured_workload</span>
                Warisan Budaya &amp; Identitas Desa
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Mengenal Tambangan Lebih Dekat
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
              Sebuah wilayah subur di lereng bukit Mijen dengan nafas gotong royong yang kuat. Kami memadukan kearifan lokal masa lampau dengan keterbukaan teknologi abad ke-21.
            </p>
          </div>

          {/* Bento Grid (12-Col) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Bento Big Card (Span 7) */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-md border border-border group">
              <div className="relative h-72 sm:h-80 lg:h-[380px] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Balai Rembug & Upacara Bersih Desa Tambangan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZx8sIzJWTz1gCGZ6d9c5uX0Szua68NyniayoMRd4SVxttSQGzd8wA5A2_4RMkholhEpxkEDr6tWcA9tMFJueoX5Da9Xvr1HAkNMGv8xn__zk_-AHFnZr0bVefImYsA7wrGFhE9D7irAdPPYBx8PMIX3gvTP4Y56SSdgH1uXvt2HLipd2x3SRaRaiG1160QadbK339I47HqyAEEIVjH7KbGUOEMs6oW0v7drsEutoGjyWSgOt7wxhX4g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-2 text-white">
                  <div>
                    <span className="text-xs font-semibold text-secondary-fixed uppercase tracking-wider block">
                      Tradisi &amp; Guyub Warga
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      Balai Rembug &amp; Upacara Bersih Desa
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white shrink-0">
                    Dokumentasi 2024
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Guyub rukun bukan sekadar semboyan di Tambangan. Dari pengelolaan mata air pegunungan hingga pemugaran balai warga, setiap jengkal ruang publik dibangun atas musyawarah mufakat yang diwariskan turun-temurun sejak era kepemimpinan tetua desa pertama.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/60 text-text-secondary text-xs sm:text-sm font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">groups</span>
                    6 Rukun Warga (28 RT)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">water_drop</span>
                    12 Titik Mata Air Alami
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">location_on</span>
                    Kecamatan Mijen, Semarang
                  </span>
                </div>
              </div>
            </div>

            {/* Bento Stack (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* Small Card 1: Pemekaran Wilayah Resmi with NumberCounter (Requirement 2) */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-border flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Pemekaran Definitif
                  </span>
                  <NumberCounter
                    to={1992}
                    formatLocale={false}
                    duration={1.6}
                    className="text-4xl sm:text-5xl font-black text-primary-container tracking-tight leading-none my-1"
                  />
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Penataan wilayah PP No. 50/1992 memekarkan Tambangan dan Jatisari pasca integrasi PP No. 16/1976.
                  </p>
                </div>
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[28px] sm:text-[32px]">account_balance</span>
                </div>
              </div>

              {/* Small Card 2: Pertumbuhan Wisata Jadesta with NumberCounter (Requirement 2) */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-border flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Kunjungan Wisata (Jadesta)
                  </span>
                  <div className="flex items-baseline gap-2 my-1">
                    <NumberCounter
                      to={259}
                      prefix="+"
                      suffix="%"
                      duration={1.8}
                      className="text-4xl sm:text-5xl font-black text-text-primary tracking-tight leading-none"
                    />
                    <span className="text-xs font-semibold text-secondary">
                      Pertumbuhan 2021-2025
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Kunjungan naik dari 214 ke 768 wisatawan dengan pendapatan tercatat Rp200 juta dan 45 tenaga kerja.
                  </p>
                </div>
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[28px] sm:text-[32px]">trending_up</span>
                </div>
              </div>

              {/* Small Card 3: Tiga Pilar Kawasan */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-border flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    workspace_premium
                  </span>
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                    Tiga Pilar Identitas Kawasan
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
                  <div className="bg-surface p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 min-h-[90px]">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">
                      landscape
                    </span>
                    <span className="text-xs font-semibold text-text-primary leading-tight">
                      Wisata Sawah
                    </span>
                  </div>
                  <div className="bg-surface p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 min-h-[90px]">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">
                      theater_comedy
                    </span>
                    <span className="text-xs font-semibold text-text-primary leading-tight">
                      Kesenian Laes
                    </span>
                  </div>
                  <div className="bg-surface p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 min-h-[90px]">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">
                      local_florist
                    </span>
                    <span className="text-xs font-semibold text-text-primary leading-tight">
                      Kebun Anggrek
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: HISTORY TIMELINE PREVIEW - Staggered Fade In Left to Right (Requirement 3) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden" id="linimasa">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full mb-3 tracking-wide uppercase shadow-sm">
              <span className="material-symbols-outlined text-[14px]">timeline</span>
              Jejak Historis Faktual
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Linimasa Sejarah &amp; Perkembangan Wilayah
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
              Menyusuri babak historis formal dari yurisdiksi Kabupaten Kendal, integrasi ke Kota Semarang, pemekaran kelurahan, hingga perintisan kampung wisata.
            </p>
          </div>

          {/* Horizontal Timeline (Grid) - Staggered Left to Right via whileInView */}
          <motion.div
            variants={timelineContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {/* Connecting Line Background for Desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-surface-container -z-0"></div>

            {/* Step 01 */}
            <motion.div
              variants={timelineItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 flex flex-col gap-4 bg-surface p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg border border-border/60"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-slate-900 flex items-center justify-center font-bold text-base shadow-sm">
                  1976
                </div>
                <span className="text-xs font-semibold text-text-secondary px-2.5 py-1 bg-white rounded-full border border-border">
                  PP 16/1976
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-text-primary leading-snug">Integrasi Kota Semarang</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Perluasan Kotamadya Daerah Tingkat II Semarang mengintegrasikan Tambangan yang sebelumnya di bawah yurisdiksi Kabupaten Kendal.
                </p>
              </div>
              <div className="pt-3 mt-auto flex items-center gap-1.5 text-primary-container text-xs font-semibold border-t border-border/50">
                <span className="material-symbols-outlined text-[16px]">account_balance</span>
                <span>Regulasi Perluasan</span>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              variants={timelineItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 flex flex-col gap-4 bg-surface p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg border border-border/60"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-slate-900 flex items-center justify-center font-bold text-base shadow-sm">
                  1992
                </div>
                <span className="text-xs font-semibold text-text-secondary px-2.5 py-1 bg-white rounded-full border border-border">
                  PP 50/1992
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-text-primary leading-snug">Pemekaran Kelurahan</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Wilayah Tambangan dimekarkan menjadi dua kelurahan definitif: Kelurahan Tambangan dan Kelurahan Jatisari, Kecamatan Mijen.
                </p>
              </div>
              <div className="pt-3 mt-auto flex items-center gap-1.5 text-primary-container text-xs font-semibold border-t border-border/50">
                <span className="material-symbols-outlined text-[16px]">hub</span>
                <span>Pemekaran Jatisari</span>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              variants={timelineItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 flex flex-col gap-4 bg-surface p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg border border-border/60"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-slate-900 flex items-center justify-center font-bold text-base shadow-sm">
                  2018
                </div>
                <span className="text-xs font-semibold text-text-secondary px-2.5 py-1 bg-white rounded-full border border-border">
                  Kampung Wisata
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-text-primary leading-snug">Wisata Sawah &amp; Burung Hantu</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Diresmikan 30 Desember 2018 memadukan lanskap sawah terasering berlatar Gunung Ungaran dan konservasi burung hantu (Tyto alba).
                </p>
              </div>
              <div className="pt-3 mt-auto flex items-center gap-1.5 text-primary-container text-xs font-semibold border-t border-border/50">
                <span className="material-symbols-outlined text-[16px]">nature_people</span>
                <span>Peresmian 30 Des 2018</span>
              </div>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              variants={timelineItemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 flex flex-col gap-4 bg-surface p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg border border-border/60"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center font-bold text-base shadow-sm">
                  2026
                </div>
                <span className="text-xs font-semibold text-primary-container px-2.5 py-1 bg-white rounded-full border border-primary-container/30">
                  Era Digital
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-text-primary leading-snug">Sawah, Laes &amp; Anggrek</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Konsolidasi tiga pilar kawasan, pelestarian kesenian langka Laes Ngudi Laras Wahyu Budoyo, dan peluncuran portal digital desa.
                </p>
              </div>
              <div className="pt-3 mt-auto flex items-center gap-1.5 text-primary-container text-xs font-semibold border-t border-border/50">
                <span className="material-symbols-outlined text-[16px]">devices</span>
                <span>Digital Heritage Portal</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick link to detailed history page */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/sejarah"
              className="inline-flex items-center gap-2 text-primary-container hover:text-primary-hover text-sm sm:text-base font-bold transition-colors group"
            >
              <span>Telusuri Arsip &amp; Dokumentasi Sejarah Lengkap</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: IKON & POTENSI UNGGULAN DESA TAMBANGAN */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background-alt" id="ikon-desa">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 text-xs font-bold rounded-full mb-3 tracking-wide uppercase shadow-sm">
                <span className="material-symbols-outlined text-[14px]">hotel_class</span>
                Ikon Tambangan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Ikon Desa Tambangan
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-2 max-w-xl leading-relaxed">
                Destinasi &amp; usaha khas kebanggaan warga. Dua ikon otentik yang menjadi ciri khas dan daya tarik utama wisatawan di Tambangan.
              </p>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-xs sm:text-sm font-medium bg-white px-4 py-2 rounded-full border border-border shadow-sm w-fit">
              <span className="material-symbols-outlined text-[18px] text-primary-container">verified</span>
              <span>Kurasi Resmi Kelurahan</span>
            </div>
          </div>

          {/* 2 Showcase Cards with Equal Heights, Lift Y: -5px & Drop Shadow & Slow Zoom-In Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Ikon 1: Soto Sawah Mbak Tutik */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl transition-shadow duration-300 border border-border group h-full"
            >
              <div className="flex flex-col grow">
                <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt="Soto Sawah Mbak Tutik dengan panorama sawah Tambangan"
                    src="/images/sotosawah.png"
                  />
                  <span className="absolute top-4 left-4 bg-secondary-container text-slate-900 font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">restaurant</span>
                    Ikon Kuliner Khas
                  </span>
                </div>
                <div className="p-6 sm:p-7 flex flex-col grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary-container uppercase tracking-wider">
                      Kuliner Otentik Legendaris
                    </span>
                    <span className="flex items-center text-secondary text-xs sm:text-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-secondary mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      4.9 (500+ ulasan)
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">
                    Soto Sawah Mbak Tutik
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-1 grow">
                    Soto ayam kampung berkuah rempah bening di saung tepi sawah terasering. Destinasi kuliner legendaris yang menjadi identitas rasa dan keramahan warga Tambangan.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto border-t border-border text-text-secondary text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">pin_drop</span>
                      Jl. Duwet No.237, Tambangan
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">schedule</span>
                      06.00 - 16.00 WIB
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row gap-3 mt-auto">
                <Link
                  to="/soto-sawah"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold py-3 sm:py-3.5 px-6 rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
                  <span>Kunjungi Soto Sawah</span>
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-variant text-text-primary text-sm font-semibold py-3 sm:py-3.5 px-5 rounded-lg border border-border transition-colors shadow-sm cursor-pointer"
                  href="https://wa.me/6281575880764?text=Halo%20saya%20ingin%20info%20kunjungan%20ke%20Soto%20Sawah%20Mbak%20Tutik"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
                  <span>Reservasi WA</span>
                </a>
              </div>
            </motion.div>

            {/* Ikon 2: Taman Anggrek Tambangan (CV Bunga Alam Lestari) */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl transition-shadow duration-300 border border-border group h-full"
            >
              <div className="flex flex-col grow">
                <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt="Sentra Budidaya Anggrek CV Bunga Alam Lestari Tambangan"
                    src="/images/tamananggrek.png"
                  />
                  <span className="absolute top-4 left-4 bg-secondary-container text-slate-900 font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">local_florist</span>
                    Ikon Agrowisata &amp; Flora
                  </span>
                </div>
                <div className="p-6 sm:p-7 flex flex-col grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary-container uppercase tracking-wider">
                      CV Bunga Alam Lestari &bull; Jadesta
                    </span>
                    <span className="flex items-center text-secondary text-xs sm:text-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px] text-secondary mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      5.0 (Riset Rantai Pasok Undip)
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">
                    Sentra Budidaya Anggrek
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mt-1 grow">
                    Pusat budidaya florikultura ratusan varietas anggrek tropis (Dendrobium, Bulan, Vanda) bermitra dengan CV Bunga Alam Lestari. Menjadi pilar agrowisata unggulan Tambangan terdaftar di Jadesta Kemenparekraf.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto border-t border-border text-text-secondary text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">pin_drop</span>
                      Greenhouse RW 02, Tambangan
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary-container">schedule</span>
                      Buka Setiap Hari (08.00 - 17.00)
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row gap-3 mt-auto">
                <Link
                  to="/potensi"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold py-3 sm:py-3.5 px-6 rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">yard</span>
                  <span>Detail Agrowisata Anggrek</span>
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-variant text-text-primary text-sm font-semibold py-3 sm:py-3.5 px-5 rounded-lg border border-border transition-colors shadow-sm cursor-pointer"
                  href="https://wa.me/6281575880764?text=Halo%20Budi%20Yuwono%2C%20saya%20ingin%20info%20kunjungan%20ke%20Sentra%20Anggrek%20Tambangan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
                  <span>Kontak Pengelola</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick link to Potensi page */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/potensi"
              className="inline-flex items-center gap-2 text-primary-container hover:text-primary-hover text-sm sm:text-base font-bold transition-colors group"
            >
              <span>Jelajahi Seluruh Potensi Desa Tambangan</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL 1: DOCUMENTARY VIDEO MODAL */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 flex flex-col gap-4 shadow-2xl relative border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-slate-900 shadow-sm">
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
                Dokumenter resmi sejarah tutur Sunan Kalijaga, tradisi Nyadran, dan geliat potensi warga Tambangan.
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

export default Home;
