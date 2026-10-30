import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { EASING_NATURAL, EASING_SPRING } from '../components/ui/MotionWrappers';

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const Potential: React.FC = () => {
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
            alt="Lanskap panorama terasering hijau dan bukit asri Kelurahan Tambangan"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fq_GZ-zbHTn9-7BMZzabh-GYVorpB9DvJw0EsEUxCoUQht-WO0-n1jhSLdyiVIVgCNONz-dUyV1Q9dQUjUUPAhx7o7oHKAXV3-rgBXkcglZ_M-sqDFSvUyRsstjTgzF-Yb6L9c3vjK3rHrT15DKMrjxz0heRhSV_cGdbZFjtfkI92kB9Y2h0S8WioxrF8NOTiJ6fRb4kTHpC0VaDhlwI_kazVwJK-nWruwwweXXbKqkqy4oCqauXRw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/70 to-on-background/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content Container - Centered Alignment & Staggered Fade Up */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 flex flex-col items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-5 sm:gap-6 max-w-4xl mx-auto"
          >
            {/* Heritage Micro Badge with Animated Pulse */}
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                Potensi Alam &amp; Wilayah Tambangan
              </span>
            </motion.div>

            {/* Headline with Balanced Wrapping - Centered */}
            <motion.h1
              variants={heroItemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md text-balance text-center"
            >
              Tambangan — Sawah,<br className="hidden md:inline" />
              <span className="text-secondary-fixed"> Laes, dan Anggrek</span>
            </motion.h1>

            {/* Subheadline - Centered */}
            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl text-center leading-relaxed drop-shadow-sm font-normal mx-auto"
            >
              Eksplorasi potensi terpadu Kelurahan Tambangan: panorama 86,60 ha sawah terasering &amp; burung hantu <em>Tyto alba</em>, sentra budidaya anggrek nasional CV Bunga Alam Lestari, kesenian langka Laes, dan kelezatan legendaris Soto Sawah Mbak Tutik.
            </motion.p>

            {/* CTA Buttons - Centered */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-1"
            >
              <a
                href="#potensi-desa"
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Jelajahi Potensi Unggulan</span>
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
              </a>

              <a
                href="#kategori-pilar"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>4 Pilar Keunggulan</span>
              </a>
            </motion.div>

            {/* Quick Stat Badges - Centered */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2 sm:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">agriculture</span>
                <span>86,60 Ha Sawah Lestari</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">trending_up</span>
                <span>+259% Kunjungan Wisata Jadesta</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">theater_comedy</span>
                <span>Kesenian Langka Laes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERLAPPING BENTO PREVIEW CARDS (Identical rhythm to Home: Equal Heights & Hover Elevation) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 w-full mb-12 sm:mb-16">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {/* Bento Card 1: Potensi Lokal */}
          <motion.div variants={cardItemVariants} whileHover={{ y: -5 }} className="h-full">
            <a
              href="#potensi-desa"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border border-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full shadow-xs">
                    <span className="material-symbols-outlined text-[14px]">landscape</span>
                    Alam &amp; Wilayah
                  </span>
                  <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">terrain</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Potensi Lokal</h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Beragam aset desa, terasering subur, dan mata air lestari yang menopang kehidupan agraris warga lereng bukit.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Eksplorasi Aset Alam</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </motion.div>

          {/* Bento Card 2: Sentra Florikultura */}
          <motion.div variants={cardItemVariants} whileHover={{ y: -5 }} className="h-full">
            <a
              href="#potensi-desa"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border border-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full shadow-xs">
                    <span className="material-symbols-outlined text-[14px]">local_florist</span>
                    Agrowisata
                  </span>
                  <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">yard</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Sentra Anggrek</h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Ratusan varietas anggrek tropis unggulan nasional kemitraan CV Bunga Alam Lestari terdaftar di Jadesta Kemenparekraf.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Eksplorasi Agrowisata</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </motion.div>

          {/* Bento Card 3: Komunitas Aktif */}
          <motion.div variants={cardItemVariants} whileHover={{ y: -5 }} className="h-full">
            <a
              href="#kategori-pilar"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border border-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-bold rounded-full">
                    <span className="material-symbols-outlined text-[14px]">diversity_3</span>
                    Gotong Royong
                  </span>
                  <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-1">Komunitas Aktif</h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Kolaborasi guyub rukun masyarakat, karang taruna berdaya, dan sinergi antar 6 Rukun Warga yang dinamis.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Lihat 4 Pilar Utama</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. SECTION MENGENAL POTENSI DESA (Bento Grid 12 Columns with Scroll Reveal) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background-alt" id="potensi-desa">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full mb-3 tracking-wide uppercase shadow-xs">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                Potensi Unggulan Jadesta Kemenparekraf
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Pilar Keunggulan Alam &amp; Budaya Tambangan
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
              Kekayaan agrowisata terintegrasi: lanskap terasering sawah lestari, konservasi burung hantu predator alami, budidaya anggrek nasional, dan warisan seni langka Laes.
            </p>
          </div>

          {/* Bento Grid (12-Col) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Bento Big Card (Span 7): Kampung Wisata Sawah & Burung Hantu */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-md border border-border group h-full">
              <div className="relative h-72 sm:h-80 lg:h-[380px] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Kampung Wisata Sawah dan Burung Hantu Tyto alba Tambangan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fq_GZ-zbHTn9-7BMZzabh-GYVorpB9DvJw0EsEUxCoUQht-WO0-n1jhSLdyiVIVgCNONz-dUyV1Q9dQUjUUPAhx7o7oHKAXV3-rgBXkcglZ_M-sqDFSvUyRsstjTgzF-Yb6L9c3vjK3rHrT15DKMrjxz0heRhSV_cGdbZFjtfkI92kB9Y2h0S8WioxrF8NOTiJ6fRb4kTHpC0VaDhlwI_kazVwJK-nWruwwweXXbKqkqy4oCqauXRw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm">
                    Diresmikan 30 Des 2018
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-text-primary text-xs font-semibold shadow-sm">
                    Konservasi Tyto alba
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 sm:left-6 sm:right-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Kampung Wisata Sawah &amp; Burung Hantu (Tyto alba)
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-4 grow justify-between">
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Kawasan 86,60 hektare sawah terasering yang dikelola dengan pendekatan ramah lingkungan. Petani membudidayakan burung hantu (<em>Tyto alba</em>) sebagai predator biologis alami hama tikus tanpa racun kimia, berpadu dengan saung wisata dan gardu pandang panorama.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-border/60 text-text-secondary text-xs sm:text-sm font-medium mt-auto">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">nature_people</span>
                    Wisata Edukasi Ekologi &amp; Sawah
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">verified</span>
                    Jejaring Desa Wisata (Jadesta)
                  </span>
                </div>
              </div>
            </div>

            {/* Bento Stack (Span 5): Sentra Budidaya Anggrek */}
            <div className="lg:col-span-5 bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-md border border-border group h-full">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Sentra Budidaya Anggrek CV Bunga Alam Lestari Tambangan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-i6TBpnM8FLpGrZvfVQNbBtW5an5DLSbbcn3EPPyPMeM2K6Ef7mBm_O8YM-3AXGZRxiHNvStP_QDLUmEf0AvW8BL6GcFP8XXZAnoj7lOdXaZuLn78XzdwDBBI7SRkeWZATlczV6WUOmjQojtlpb-fyurWYZEJ8Xhj7t6Vl3eDKxRDUO5-LtXHbPWUW-ZcejiEE50EcVdaYHCFtP82DddTnk0P3WQW-R2K8nvTSnIW"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm">
                    CV Bunga Alam Lestari
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    Sentra Budidaya Anggrek Nasional
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-4 grow justify-between">
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Pusat florikultura modern yang membudidayakan ratusan varietas anggrek (Dendrobium, Bulan, Cattleya, Vanda). Menjadi subjek riset rantai pasok UNDIP 2025 dan daya tarik wisata botani utama di Kecamatan Mijen.
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-border/60 text-text-secondary text-xs sm:text-sm font-medium mt-auto">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">local_florist</span>
                  <span>Edukasi Tani &amp; Pasar Florikultura</span>
                </div>
              </div>
            </div>

            {/* Wide Feature Banner (Span 12): Kesenian Laes & Mata Air Tuk Babon */}
            <div className="col-span-12 bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-border">
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed text-primary-container flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">theater_comedy</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                    Kesenian Langka Laes &amp; Konservasi Tuk Babon
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Paguyuban Ngudi Laras Wahyu Budoyo melestarikan seni tari akrobatik di atas tali bambu setinggi 10 meter yang berpadu dengan ritus sedekah bumi mengitari mata air alami Tuk Babon sebagai urat nadi sawah warga.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full shadow-sm border border-border text-xs sm:text-sm font-semibold text-text-primary">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">water_drop</span>
                  <span>Mata Air Tuk Babon</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full shadow-sm border border-border text-xs sm:text-sm font-semibold text-text-primary">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">theater_comedy</span>
                  <span>Seni Laes Ngudi Laras</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full shadow-sm border border-border text-xs sm:text-sm font-semibold text-text-primary">
                  <span className="material-symbols-outlined text-primary-container text-[18px]">restaurant</span>
                  <span>Soto Sawah Mbak Tutik</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. SECTION 4 PILAR UTAMA (bg-white with Scroll Reveal) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white" id="kategori-pilar">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full mb-3 tracking-wide uppercase shadow-xs">
              <span className="material-symbols-outlined text-[14px]">grid_view</span>
              Identitas Wilayah Terverifikasi
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-3">
              Empat Pilar Keunggulan Tambangan
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Harmonisasi antara konservasi alam terasering, florikultura bernilai ekonomi tinggi, seni tradisi langka, dan kuliner otentik berbasis kearifan lokal.
            </p>
          </div>

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Pilar 1: Sawah & Burung Hantu */}
            <div className="bg-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/60 group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">agriculture</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-1">
                  Pilar 01
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-2">Wisata Sawah &amp; Burung Hantu</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  86,60 hektare sawah terasering berpadu dengan konservasi predator tikus biologis (<em>Tyto alba</em>) yang dirintis sejak 2018.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border/60 flex items-center text-primary-container font-semibold text-xs sm:text-sm">
                <span>Kampung Wisata Sawah</span>
                <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Pilar 2: Sentra Anggrek */}
            <div className="bg-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/60 group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">local_florist</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-1">
                  Pilar 02
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-2">Sentra Florikultura Anggrek</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Kemitraan agrowisata florikultura CV Bunga Alam Lestari, memasok ratusan varietas anggrek tropis unggulan berstandar nasional.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border/60 flex items-center text-primary-container font-semibold text-xs sm:text-sm">
                <span>Sentra Bunga Lestari</span>
                <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Pilar 3: Kesenian Langka Laes */}
            <div className="bg-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/60 group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">theater_comedy</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-1">
                  Pilar 03
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-2">Kesenian Tradisional Laes</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Paguyuban Ngudi Laras Wahyu Budoyo merawat seni akrobatik menari di atas tali tambang bambu 10 meter, kesenian langka kebanggaan Tambangan.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border/60 flex items-center text-primary-container font-semibold text-xs sm:text-sm">
                <span>Warisan Seni Budaya</span>
                <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Pilar 4: Soto Sawah & Tuk Babon */}
            <div className="bg-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/60 group h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">restaurant</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-1">
                  Pilar 04
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-2">Kuliner Ikonik &amp; Tuk Babon</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Soto Sawah Mbak Tutik yang menjadi kajian ilmiah <em>Blue Ocean Strategy</em> berpadu mata air Tuk Babon sebagai sumber berkah kehidupan warga.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border/60 flex items-center text-primary-container font-semibold text-xs sm:text-sm">
                <span>Jelajahi Soto Sawah</span>
                <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. SECTION PANDUAN KUNJUNGAN & LOKASI (bg-background-alt with Scroll Reveal) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background-alt">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASING_NATURAL }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full mb-3 tracking-wide uppercase shadow-xs">
              <span className="material-symbols-outlined text-[14px]">map</span>
              Panduan Kunjungan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-3">
              Temukan Tambangan di Lereng Hijau Semarang Barat
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Hanya berjarak 35 menit berkendara dari Simpang Lima Semarang, temukan ketenangan terasering alam dan sambutan hangat warga.
            </p>
          </div>

          {/* Interactive-Style Rounded Map Container */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Static Map Preview Container */}
              <div className="lg:col-span-7">
                <div
                  className="w-full h-80 lg:h-96 rounded-2xl bg-surface relative overflow-hidden shadow-inner flex flex-col justify-between p-4 bg-cover bg-center border border-border"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAF0m2qGDnES_ykykZK6LRYhx7aI4Q8JnF0nW3Tf5sO7aI18X1gEkXItFpkJr3v8lAgpvT11Aqf4WU11I5k9EL9rwOL0LOhY6_oex_omSzOiplnEEvAeScOxQ-RWD461BW_RsCUS8d0V3iTUD5FbCFl_TGAcTHclpkVXoDUNfo1L-GVdQU1Hb3CpmEgv7LZL4Sl-DKf1NLSmyLLh3I7MLTbP6cihJGkcPx56XZ6IiY98BYgXKROsQodLw')`
                  }}
                >
                  {/* Map Badges Overlay */}
                  <div className="flex flex-wrap gap-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-text-primary text-xs font-semibold shadow-sm flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <span>Balai Kelurahan</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
                      <span>Sentra Anggrek</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-text-primary text-xs font-semibold shadow-sm flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
                      <span>Tuk Babon</span>
                    </span>
                  </div>

                  {/* Location Pinpoint Highlights */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md self-start max-w-xs z-10 border border-border">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">pin_drop</span>
                      <span className="text-xs font-bold text-text-primary">Kelurahan Tambangan, Kec. Mijen</span>
                    </div>
                    <span className="text-[11px] text-text-secondary block mt-0.5">
                      Ketinggian 280 mdpl • Hawa sejuk lereng perbukitan
                    </span>
                  </div>
                </div>
              </div>

              {/* Information Panel & Guide */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-5">
                    Titik Kunjungan &amp; Navigasi Desa
                  </h3>
                  <div className="space-y-4 mb-6">
                    {/* Location Item 1 */}
                    <div className="flex items-start gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-fixed text-primary-container flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                      </span>
                      <div>
                        <span className="text-sm font-bold text-text-primary block">Alamat Balai Desa</span>
                        <span className="text-xs text-text-secondary leading-relaxed">Jl. Raya Tambangan No. 01, Mijen, Kota Semarang, Jawa Tengah 50215</span>
                      </div>
                    </div>

                    {/* Location Item 2 */}
                    <div className="flex items-start gap-3">
                      <span className="w-9 h-9 rounded-xl bg-secondary-fixed text-slate-900 font-bold flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                      </span>
                      <div>
                        <span className="text-sm font-bold text-text-primary block">Jam Layanan &amp; Kunjungan</span>
                        <span className="text-xs text-text-secondary leading-relaxed">Senin - Minggu, 08.00 - 17.00 WIB (Ramah keluarga)</span>
                      </div>
                    </div>

                    {/* Location Item 3 */}
                    <div className="flex items-start gap-3">
                      <span className="w-9 h-9 rounded-xl bg-surface text-text-primary flex items-center justify-center shrink-0 shadow-sm border border-border">
                        <span className="material-symbols-outlined text-[18px]">directions_car</span>
                      </span>
                      <div>
                        <span className="text-sm font-bold text-text-primary block">Aksesibilitas Jalan</span>
                        <span className="text-xs text-text-secondary leading-relaxed">Akses aspal mulus, dapat dilalui motor, mobil keluarga, hingga bus pariwisata medium.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200"
                  href="https://maps.google.com/?q=Kelurahan+Tambangan+Mijen+Semarang"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. SECTION CLOSING CTA BANNER */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-background" id="ajakan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={EASING_SPRING}
            className="relative overflow-hidden rounded-2xl sm:rounded-2xl bg-gradient-to-br from-primary-container via-primary-container to-primary-hover p-8 sm:p-12 lg:p-16 text-white shadow-2xl"
          >
            {/* Ambient Decorative Visual Rings */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full w-fit border border-white/20">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">explore</span>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                  Eksplorasi Tambangan
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight text-balance">
                Kenali Harmoni Alam &amp; Warisan Luhur Tambangan
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                Dari 86,60 hektare hamparan sawah terasering lestari hingga kearifan sejarah para sesepuh desa, mari bersama menelusuri keistimewaan dan kekayaan budaya Kelurahan Tambangan.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface text-primary-container text-sm sm:text-base font-bold px-7 py-3 sm:py-3.5 rounded-full shadow-xl transition-all duration-200 hover:scale-105"
                  href="#potensi-desa"
                >
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                  <span>Mulai Jelajahi Potensi</span>
                </a>

                <Link
                  to="/sejarah"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 cursor-pointer hover:bg-white/20"
                >
                  <span className="material-symbols-outlined text-[20px]">history_edu</span>
                  <span>Telusuri Jejak Sejarah</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Potential;
