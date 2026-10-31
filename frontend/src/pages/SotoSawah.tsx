import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { EASING_NATURAL } from '../components/ui/MotionWrappers';

/**
 * Hero Section Animation Variants (Matching Home & Potential)
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
 * 3 Overlapping Bento Preview Cards Animation Variants
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

export const SotoSawah: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Consistent with Home & Potential) */}
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
            alt="Suasana kuliner Soto Sawah Mbak Tutik bersanding dengan pemandangan sawah terasering asri"
            src="/images/sotosawah.png"
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
            className="flex flex-col items-center text-center gap-4 sm:gap-5 max-w-4xl mx-auto"
          >
            {/* Wayfinding: Breadcrumb Navigation */}
            <motion.nav
              variants={heroItemVariants}
              aria-label="Navigasi Jejak Halaman (Breadcrumb)"
              className="inline-flex items-center gap-2 text-xs text-white/80 bg-black/40 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-lg border border-white/15 shadow-xs w-fit"
            >
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[15px]">home</span>
                <span>Beranda</span>
              </Link>
              <span className="material-symbols-outlined text-[13px] opacity-40">chevron_right</span>
              <Link to="/potensi" className="hover:text-white transition-colors font-medium">
                Potensi Wilayah
              </Link>
              <span className="material-symbols-outlined text-[13px] opacity-40">chevron_right</span>
              <span className="text-secondary-fixed font-semibold" aria-current="page">
                Soto Sawah Mbak Tutik
              </span>
            </motion.nav>

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
                Ikon Gastronomi &amp; Bentang Alam Tambangan
              </span>
            </motion.div>

            {/* Headline with Staggered Fade Up */}
            <motion.h1
              variants={heroItemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md text-balance text-center"
            >
              Soto Sawah Mbak Tutik —<br className="hidden md:inline" />
              <span className="text-secondary-fixed"> Cita Rasa Otentik Tepi Sawah</span>
            </motion.h1>

            {/* Subheadline with Staggered Fade Up */}
            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl text-center leading-relaxed drop-shadow-sm font-normal mx-auto"
            >
              Menikmati semangkuk soto ayam kampung kuah rempah kuning legendaris di saung joglo terbuka, bersanding langsung dengan panorama terasering sawah asri dan keramahan warga Kelurahan Tambangan, Mijen, Kota Semarang.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-1"
            >
              <a
                href="#soto-sawah"
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
                <span>Profil Soto Sawah</span>
              </a>
              <a
                href="#bentang-alam"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">landscape</span>
                <span>Bentang Alam Desa</span>
              </a>
            </motion.div>

            {/* Quick Stat Badges */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2 sm:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">restaurant</span>
                <span>Berdiri Sejak 2012</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">cottage</span>
                <span>Saung Joglo Tepi Sawah</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                <span>Ayam Kampung &amp; Rempah Alami</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERLAPPING BENTO PREVIEW CARDS (Identical rhythm to Home & Potential) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 w-full mb-12 sm:mb-16">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {/* Card 1 */}
          <motion.div variants={cardItemVariants} whileHover={{ y: -5 }} className="h-full">
            <a
              href="#soto-sawah"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">soup_kitchen</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full shadow-xs">
                  Ikon Kuliner
                </span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-primary-container transition-colors">
                  Kuliner Lokal
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Soto Sawah Mbak Tutik: Legenda cita rasa bumbu rempah kuning di tepi sawah terasering asri.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Profil Soto Sawah</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardItemVariants} whileHover={{ y: -5 }} className="h-full">
            <a
              href="#bentang-alam"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">landscape</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full shadow-xs">
                  Kelestarian
                </span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-primary-container transition-colors">
                  Potensi Desa
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Alam subur dan kehidupan sosial guyub harmonis di lereng hijau kawasan Mijen Semarang.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Bentang Alam Desa</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardItemVariants} whileHover={{ y: -5 }} className="h-full">
            <a
              href="#bentang-alam"
              className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 text-tertiary flex items-center justify-center group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">water_drop</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full shadow-xs">
                  Mata Air Desa
                </span>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-primary-container transition-colors">
                  Tuk Babon
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Sumber mata air alami penghidupan warga dan pengairan terasering sawah lestari Tambangan.
                </p>
              </div>
              <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
                <span>Eksplorasi Tuk Babon</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. POTENSI DESA (BENTO GRID) */}
      <section className="w-full bg-background-alt py-16 sm:py-20" id="bentang-alam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 text-primary-container text-xs uppercase tracking-wider font-semibold mb-3">
                Ekosistem &amp; Karakter Desa
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Desa dengan Karakter Lokal &amp; Keasrian Alami
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
              Tumbuh dari kelestarian lingkungan, budaya gotong royong, dan kemandirian warga yang merawat bumi Tambangan dengan penuh cinta.
            </p>
          </div>

          {/* 12-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Large Visual Bento (7 Columns): Tradisi Nyadran */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group border border-border">
              <div>
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <img
                    alt="Tradisi Nyadran dan Sedekah Tenong Warga Kelurahan Tambangan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="/images/nyadran.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
                    <span className="text-xs text-text-primary font-semibold">Tradisi Sakral Bulan Rajab</span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs uppercase tracking-wider text-secondary-fixed block font-semibold mb-0.5">
                      Warisan Budaya Leluhur
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight drop-shadow-sm">
                      Tradisi Nyadran &amp; Sedekah Tenong
                    </h3>
                  </div>
                </div>

                {/* Content Body filling the space */}
                <div className="p-6 sm:p-7 flex flex-col gap-4">
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Tradisi Nyadran di Kelurahan Tambangan diselenggarakan setiap bulan Rajab pada hari Jumat Pon atau Jumat Kliwon di Makam Keramat dan Sendang Manco. Warga berbondong-bondong membawa tenong berisi aneka sajian untuk didoakan bersama sebagai wujud rasa syukur atas berkah, kesehatan, dan kerukunan guyub rukun warga.
                  </p>

                  {/* 3 Pillars of Nyadran Values */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="bg-surface p-3.5 rounded-xl border border-border/60 flex flex-col gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                      </div>
                      <span className="text-xs font-bold text-text-primary">Sedekah Tenong</span>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        Membawa wadah tenong bambu berisi nasi gurih &amp; lauk olahan warga untuk disantap bersama.
                      </p>
                    </div>

                    <div className="bg-surface p-3.5 rounded-xl border border-border/60 flex flex-col gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-secondary-container/40 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                        <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      </div>
                      <span className="text-xs font-bold text-text-primary">Doa Bersama</span>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        Tahlil dan doa syukur mengenang jasa para leluhur cikal bakal desa Tambangan.
                      </p>
                    </div>

                    <div className="bg-surface p-3.5 rounded-xl border border-border/60 flex flex-col gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/60 text-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">diversity_3</span>
                      </div>
                      <span className="text-xs font-bold text-text-primary">Guyub Rukun</span>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        Mempererat silaturahmi lintas generasi dan merawat gotong royong antarwarga.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-border">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">temple_hindu</span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    Makam Keramat &amp; Sendang Manco
                  </span>
                </div>
                <span className="text-xs text-text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">calendar_month</span>
                  <span>Jumat Pon / Kliwon (Bulan Rajab)</span>
                </span>
              </div>
            </div>

            {/* Medium Details Bento (5 Columns) */}
            <div className="lg:col-span-5 bg-surface p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-border">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold uppercase tracking-wider mb-5">
                  Ruang &amp; Lingkungan
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                  Harmoni Terasering &amp; Konservasi Sumber Daya
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
                  Tambangan mempertahankan bentang terasering berteras nan produktif yang mendukung ketahanan pangan lokal dan kelestarian mata air perbukitan.
                </p>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-border/60">
                    <div className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">eco</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-text-primary block font-semibold">
                        68% Area Hijau &amp; Terasering Pertanian Lestari
                      </span>
                      <span className="text-xs text-text-secondary">
                        Sawah terasering mengalirkan padi wangi dan sayur segar bernilai tinggi.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-border/60">
                    <div className="w-8 h-8 rounded-lg bg-secondary-fixed/60 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">directions_bike</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-text-primary block font-semibold">
                        Jalur Gowes &amp; Wisata Pedesaan Ramah Anak
                      </span>
                      <span className="text-xs text-text-secondary">
                        Rute asri dengan kontur menantang dan udara sejuk pegunungan.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-border/60">
                    <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/60 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">water_drop</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-text-primary block font-semibold">
                        Konservasi Mata Air Alami Tuk Babon
                      </span>
                      <span className="text-xs text-text-secondary">
                        Sumber kehidupan yang terus dijaga bersama demi kelangsungan irigasi.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 flex items-center justify-between text-text-secondary border-t border-border">
                <span className="text-xs">Indeks Desa Mandiri 2024</span>
                <span className="text-xs sm:text-sm font-bold text-primary-container">
                  Kategori: Maju &amp; Mandiri
                </span>
              </div>
            </div>

            {/* Wide Card 3: Inovasi Masyarakat (12 Columns) */}
            <div className="lg:col-span-12 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-border">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container text-xs font-semibold mb-3">
                  Kearifan &amp; Kemandirian Warga
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                  Kekuatan Komunitas Merawat Nilai dan Potensi Lokal
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Semangat gotong royong warga Tambangan menjadi motor penggerak kelestarian desa—dari pengelolaan irigasi terasering sawah, perawatan mata air pegunungan Tuk Babon, hingga pelestarian tradisi budaya yang menyatukan seluruh elemen masyarakat.
                </p>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-center px-6 py-4 rounded-xl bg-surface border border-border">
                  <span className="text-3xl font-extrabold text-primary-container block">6</span>
                  <span className="text-xs text-text-secondary">Rukun Warga Berdaya</span>
                </div>
                <div className="text-center px-6 py-4 rounded-xl bg-surface border border-border">
                  <span className="text-3xl font-extrabold text-secondary block">100%</span>
                  <span className="text-xs text-text-secondary">Gotong Royong Warga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CULINARY - SOTO SAWAH MBAK TUTIK */}
      <section className="w-full bg-white py-16 sm:py-20" id="soto-sawah">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Tag Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
              <span className="material-symbols-outlined text-[18px]">stars</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Kuliner Unggulan Tambangan
              </span>
            </div>
            <span className="text-xs text-text-secondary hidden sm:inline-block">
              Status: Destinasi Resmi Terverifikasi
            </span>
          </div>

          {/* Asymmetric Flagship Showcase Card */}
          <div className="bg-surface rounded-2xl p-6 lg:p-10 shadow-xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* LEFT SIDE: Food Visuals & Atmosphere (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
                  <img
                    alt="Soto Sawah Mbak Tutik sajian kuah kuning ayam kampung dengan tempe mendoan dan sate kerang di atas meja kayu tepi sawah"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src="/images/sotosawah.png"
                  />
                  <div className="absolute top-4 left-4 bg-primary-container text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Resep Warisan Keluarga • Sejak 2012</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-medium">
                    Kuah Rempah Kaldu Ayam Kampung
                  </div>
                </div>

                {/* Inset secondary views */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-sm group">
                    <img
                      alt="Suasana joglo terbuka santap soto sawah bersama keluarga diiringi pemandangan sawah terasering pagi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/images/sotosawah2.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                      <span className="text-xs text-white font-medium">Saung Joglo Tepi Terasering</span>
                    </div>
                  </div>

                  <div className="relative h-40 rounded-xl overflow-hidden shadow-sm group">
                    <img
                      alt="Pemandangan terasering sawah asri Soto Mbak Tutik"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/images/sotosawah2.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                      <span className="text-xs text-white font-medium">Bahan Segar Panen Desa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Identity, Details & Order CTA (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-primary-container text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    <span>Ikon Gastronomi Desa Tambangan</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4 leading-tight">
                    Soto Sawah Mbak Tutik
                  </h3>
                  <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                    Destinasi kuliner lokal Tambangan yang menjadi primadona santap pagi hingga siang. Menyajikan kuah rempah bening gurih berbahan kaldu ayam kampung asli, diracik rempah warisan, dan disantap langsung di saung joglo kayu bersisian dengan semilir terasering sawah hijau.
                  </p>

                  {/* Detailed Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white p-3.5 rounded-xl border border-border">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mb-1">location_on</span>
                      <span className="text-xs text-text-secondary block">Lokasi Usaha</span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        Jl. Duwet No.237, Tambangan
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-border">
                      <span className="material-symbols-outlined text-secondary text-[20px] mb-1">schedule</span>
                      <span className="text-xs text-text-secondary block">Jam Operasional</span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        06.00 – 16.00 WIB
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-border">
                      <span className="material-symbols-outlined text-tertiary text-[20px] mb-1">payments</span>
                      <span className="text-xs text-text-secondary block">Rentang Harga</span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        Mulai Rp 12.000 / Porsi
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-border">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mb-1">local_dining</span>
                      <span className="text-xs text-text-secondary block">Menu Pendamping</span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        Mendoan, Sate Kerang
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm px-6 py-3 rounded-lg font-semibold shadow-sm transition-all duration-200 cursor-pointer"
                    href="https://wa.me/6281575880764?text=Halo%20Mbak%20Tutik,%20saya%20ingin%20tanya%20menu%20dan%20reservasi%20tempat%20di%20Soto%20Sawah%20Tambangan"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Hubungi Penjual (WhatsApp)</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface text-text-primary text-xs sm:text-sm px-6 py-3 rounded-lg font-semibold shadow-xs border border-border transition-all duration-200 cursor-pointer"
                    href="#peta-rute"
                  >
                    <span className="material-symbols-outlined text-[20px]">directions</span>
                    <span>Petunjuk Arah</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CERITA DIBALIK SOTO (EDITORIAL STORYTELLING) */}
      <section className="w-full bg-background-alt py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border border-border">
                <img
                  alt="Momen hangat warga dan wisatawan sarapan soto bersama di saung joglo sawah Tambangan"
                  className="w-full h-[440px] sm:h-[480px] object-cover"
                  src="/images/sotosawah2.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-secondary-fixed block mb-1 font-semibold">
                    Rasa &amp; Kebersamaan
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Santap pagi bersama keluarga ditemani semilir hawa terasering persawahan Tambangan.
                  </p>
                </div>
              </div>

              {/* Decorative Stamp */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-primary-container text-white shadow-xl flex-col items-center justify-center text-center border-2 border-white">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
                <span className="text-[10px] leading-tight font-bold mt-0.5">100% Guyub Warga</span>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 text-primary-container text-xs font-semibold uppercase tracking-wider w-fit mb-4">
                Oral History &amp; Gastronomi Lokal
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-6 leading-tight">
                Lebih dari Semangkuk Soto: Membawa Kehangatan Dapur Warga ke Meja Wisatawan
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                <p>
                  Di setiap mangkuk Soto Sawah Mbak Tutik, terajut rantai gotong royong warga Tambangan. Sayuran seledri dan kubis renyah dipetik segar dari kebun Kelompok Wanita Tani (KWT) dusun setempat, ayam kampung dipasok dari peternak pekarangan warga, dan beras pulen dimasak langsung dari hasil panen sawah terasering di depan gazebo tempat Anda bersantap.
                </p>
                <p>
                  Didirikan dari dapur sederhana pada tahun 2012, usaha ini kini menjadi ruang temu lintas generasi—tempat warga lokal bertegur sapa di pagi hari dan pelancong kota melepas penat dalam suasana pedesaan yang meneduhkan jiwa.
                </p>
                <p className="p-4 bg-primary-fixed/30 rounded-xl text-xs sm:text-sm text-text-primary border border-border">
                  <span className="font-bold text-primary-container">Kajian Ilmiah (2024):</span> Keberhasilan diferensiasi Soto Sawah Mbak Tutik telah dianalisis dalam jurnal ilmiah manajemen bisnis menggunakan pendekatan <em>Blue Ocean Strategy</em>, yang membuktikan bagaimana integrasi panorama sawah pedesaan dan kuliner soto rempah menciptakan ruang pasar baru yang berdaya saing tinggi tanpa pesaing langsung.
                </p>
              </div>

              {/* Highlight Quote Block */}
              <div className="bg-surface p-6 rounded-2xl relative shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-[36px] shrink-0">format_quote</span>
                  <div>
                    <p className="text-sm sm:text-base text-text-primary italic leading-relaxed mb-3">
                      &ldquo;Kulo mboten namung sadean soto, nanging nyuguhi tamu keindahan lan kehangatan paseduluran warga Tambangan. Nalika para rawuh dahar sinambi nyawang sawah ijo, kulo bingah sanget.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">
                        T
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-text-primary block">
                          Ibu Tutik Handayani
                        </span>
                        <span className="text-xs text-text-secondary">
                          Perintis &amp; Juru Masak Soto Sawah Mbak Tutik
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT TAMBANGAN & LOKASI SOTO SAWAH */}
      <section className="w-full bg-background-alt py-16 sm:py-20" id="peta-rute">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 text-primary-container text-xs uppercase tracking-wider font-semibold mb-3">
                Panduan Kunjungan &amp; Rute
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Singgah ke Tambangan, Rasakan Suasana Asri Desa
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
              Hanya 35 menit berkendara dari jantung Kota Semarang dengan akses jalan aspal mulus dan panorama perbukitan yang menyegarkan mata.
            </p>
          </div>

          {/* Route & Location Split Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Map Visual Canvas (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span className="text-xs sm:text-sm font-bold text-text-primary">
                    Rute Utama Menuju Soto Sawah Mbak Tutik
                  </span>
                </div>
                <span className="text-xs text-text-secondary">Peta Akses Mijen</span>
              </div>

              {/* Stylized Map View */}
              <div
                className="w-full h-80 rounded-xl relative overflow-hidden bg-surface flex flex-col items-center justify-center p-6 shadow-inner bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHxDOsa4xNf8d6Nt-WMfnnsx9mwUBcr1qlcy7ZhE0lTriE8R3u8ZvVQe4uT3N_opf1sNI5U6Wc0LG7K2XlkZZ3nxLvqCJCOFdDB6tl_497KHHuqLCYmpQOYsw-0JvE2AJjPSgo1FiR-lJmbw1_AfkCv1uq--5_AiE1zQqySftjWSJuOKCYgDEyxJ9KDb86fbDQQgbG3TZL68AzrDpNQgsAGTGXsmpQrPLEPsXhtMUcarDCRxis6zZUyA')`
                }}
              >
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-sm border border-border">
                  <img
                    alt="Logo Tambangan"
                    className="w-10 h-10 object-contain rounded-lg bg-surface p-1"
                    src="/images/logoTambangan.png"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-text-primary block">
                      Soto Sawah Mbak Tutik
                    </span>
                    <span className="text-xs text-text-secondary">
                      Jl. Duwet No.237, Kelurahan Tambangan
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary-container text-[24px]">
                    pin_drop
                  </span>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-surface rounded-xl border border-border/50">
                  <span className="text-base sm:text-lg font-bold text-primary-container block">35 Menit</span>
                  <span className="text-[11px] sm:text-xs text-text-secondary">Dari Simpang Lima</span>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-border/50">
                  <span className="text-base sm:text-lg font-bold text-text-primary block">Jalan Aspal</span>
                  <span className="text-[11px] sm:text-xs text-text-secondary">Mobil &amp; Bus Mini</span>
                </div>
                <div className="p-3 bg-surface rounded-xl border border-border/50">
                  <span className="text-base sm:text-lg font-bold text-secondary block">Parkir Luas</span>
                  <span className="text-[11px] sm:text-xs text-text-secondary">Kapasitas 40+ Mobil</span>
                </div>
              </div>
            </div>

            {/* Practical Visitor Guide (5 Cols) */}
            <div className="lg:col-span-5 bg-surface p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-border">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-2">
                  Fasilitas &amp; Kesiapan Wisata
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                  Kenyamanan Pengunjung di Tepi Sawah
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white text-primary-container flex items-center justify-center shrink-0 border border-border">
                      <span className="material-symbols-outlined text-[18px]">local_parking</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary block">
                        Area Parkir Nyaman &amp; Gratis
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Lahan parkir memadai untuk sepeda motor, mobil pribadi, hingga rombongan komunitas sepeda.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white text-secondary flex items-center justify-center shrink-0 border border-border">
                      <span className="material-symbols-outlined text-[18px]">mosque</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary block">
                        Musala Bersih &amp; Air Wudu Alami
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Tersedia tempat ibadah dengan air sejuk alami langsung dari mata air terdekat.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white text-tertiary flex items-center justify-center shrink-0 border border-border">
                      <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary block">
                        Spot Foto Terasering &amp; Gazebo
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Jembatan bambu santai dan gazebo kayu menghadap matahari terbit serta sawah berundak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all text-center cursor-pointer"
                href="https://maps.google.com/?q=Soto+Sawah+Mbak+Tutik+Tambangan+Mijen+Semarang"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">explore</span>
                <span>Navigasi Google Maps ke Soto Sawah</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CALL TO ACTION (Aligned with Sejarah & Potensi focus) */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-primary-container text-white rounded-2xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col items-center text-center">
            {/* Ambient Decorative circles */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-[18px]">explore</span>
                <span>Eksplorasi Wilayah Tambangan</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Jelajahi Pesona Alam &amp; Sejarah Luhur Kelurahan Tambangan
              </h2>

              <p className="text-sm sm:text-base text-white/90 mb-10 leading-relaxed max-w-2xl font-normal">
                Dari keindahan terasering sawah asri, kesenian langka Laes, hingga kehangatan kuliner lokal, temukan kekayaan autentik di setiap sudut Kelurahan Tambangan, Mijen, Kota Semarang.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <Link
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface text-primary-container text-xs sm:text-sm font-bold px-7 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
                  to="/potensi"
                >
                  <span className="material-symbols-outlined text-[20px]">holiday_village</span>
                  <span>Jelajahi Potensi Wilayah</span>
                </Link>

                <Link
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-lg transition-all duration-200 border border-white/60 shadow-xs cursor-pointer"
                  to="/sejarah"
                >
                  <span className="material-symbols-outlined text-[20px]">history_edu</span>
                  <span>Telusuri Linimasa Sejarah</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SotoSawah;
