import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { EASING_NATURAL, EASING_SPRING } from '../components/ui/MotionWrappers';
import museumData from '../data/museum.json';

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

interface MuseumItem {
  id: string;
  judul: string;
  kategori: string;
  deskripsi: string;
  fotoUrl: string;
}

export const Museum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<MuseumItem | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);

  // Archive contribution modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [kontributorNama, setKontributorNama] = useState('');
  const [kontributorJudul, setKontributorJudul] = useState('');
  const [kontributorKategori, setKontributorKategori] = useState('Foto Tempo Dulu');
  const [kontributorCerita, setKontributorCerita] = useState('');

  const categories = [
    { key: 'all', label: 'Semua Arsip' },
    { key: 'Seni Pertunjukan Langka', label: 'Seni Pertunjukan Langka' },
    { key: 'Dokumen Sejarah', label: 'Dokumen & Hukum' },
    { key: 'Bentang Alam Agraris', label: 'Bentang Alam Sawah' },
    { key: 'Adat & Budaya Guyub', label: 'Adat & Tradisi Barikan' },
    { key: 'Hortikultura Unggulan', label: 'Sentra Anggrek' },
    { key: 'Etimologi Wilayah', label: 'Toponimi Rakit' }
  ];

  const filteredItems = useMemo(() => {
    return (museumData as MuseumItem[]).filter((item) => {
      const matchCat = selectedCategory === 'all' || item.kategori === selectedCategory;
      const matchSearch =
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.kategori.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleKontribusiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Halo Tim Pengelola Museum Digital Kelurahan Tambangan,\nSaya ingin menyumbangkan arsip sejarah/foto warga:\n\nNama Kontributor: ${kontributorNama || '-'}\nJudul Arsip/Foto: ${kontributorJudul || '-'}\nKategori: ${kontributorKategori}\nKeterangan Cerita: ${kontributorCerita || '-'}`
    );
    window.open(`https://wa.me/6281575880764?text=${waText}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setKontributorNama('');
      setKontributorJudul('');
      setKontributorCerita('');
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Consistent with Home, Sejarah & Potensi Architecture) */}
      <section className="relative w-full -mt-14 sm:-mt-16 overflow-hidden bg-on-background" id="hero">
        {/* Background Visual Backdrop */}
        <div className="absolute inset-0 z-0">
          <motion.img
            className="w-full h-full object-cover"
            alt="Panorama lanskap sawah dan sejarah berdirinya Kelurahan Tambangan"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRerzs3F5OFQOcl0Ej4Wyoh-loqmrC6uIyZDPalDw53dk-Npk8SX7GfuIMDtAVPUd304JDtTN9AMPCoHrw73VKhpdfEW50Chp3-4TQu1nmliIVe7-oJpHPhbDjbn8omDU5VtJJpxrdT6K3F6eh1JcD2O0bs0rkLcXRqHDArM90RevGuQ0aNwT6ZPdp5r_VTdoaIY7RAmfE0MccxW7R1eLWBRheDpDsO7sZjX2dsU0uQX0NvT5wlqeEOA"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/70 to-on-background/45 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-on-background/60 via-transparent to-on-background/90"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 flex flex-col justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6"
          >
            {/* Heritage Eyebrow Badge */}
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                MUSEUM DIGITAL ARSIP &amp; SEJARAH TAMBANGAN
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md text-balance"
            >
              Galeri Warisan Budaya,<br className="hidden md:inline" />
              <span className="text-secondary-fixed"> Arsip, &amp; Foto Tempo Dulu</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-normal"
            >
              Menyimpan memori kolektif Kelurahan Tambangan: toponimi tali penyeberangan rakit sungai, arsip yuridis PP No. 16/1976 &amp; PP No. 50/1992, dokumentasi seni langka Laes Ngudi Laras, serta keindahan lanskap terasering sawah lestari.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-1"
            >
              <a
                href="#galeri-arsip"
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Jelajahi Koleksi Arsip</span>
                <span className="material-symbols-outlined text-[20px]">collections_bookmark</span>
              </a>

              <a
                href="#komparasi-visual"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">compare</span>
                <span>Komparasi Tempo Dulu</span>
              </a>
            </motion.div>

            {/* Quick Stat Badges */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2 sm:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                <span>Arsip Yuridis PP 16/1976 &amp; 50/1992</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">theater_comedy</span>
                <span>Kesenian Tradisional Langka Laes</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">agriculture</span>
                <span>Lanskap 86,60 Ha Sawah Lestari</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. FLOATING BENTO PREVIEW CARDS (Overlapping bottom edge) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 mb-16 sm:mb-20 w-full">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch"
        >
          {/* Bento Card 1: Kesenian Laes */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="#sorotan-laes"
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-slate-900 font-bold group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">theater_comedy</span>
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                Seni Pertunjukan Langka
              </span>
            </div>
            <div className="grow">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                Kesenian Laes / Lais
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Tarian akrobatik mistis di atas seutas tali tambang bambu setinggi 8-10 meter yang dirawat oleh Paguyuban Ngudi Laras Wahyu Budoyo.
              </p>
            </div>
            <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Buka Sorotan Seni Laes</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>

          {/* Bento Card 2: Arsip Hukum PP 16/1976 & 50/1992 */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="#galeri-arsip"
            onClick={() => setSelectedCategory('Dokumen Sejarah')}
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">history_edu</span>
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                Dokumen Negara
              </span>
            </div>
            <div className="grow">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                PP 16/1976 &amp; PP 50/1992
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Lembaran negara resmi penyerahan teritorial dari Kab. Kendal ke Kota Semarang dan pemekaran definitif Tambangan serta Jatisari.
              </p>
            </div>
            <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Lihat Dokumen Arsip</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>

          {/* Bento Card 3: Lanskap Sawah & Burung Hantu */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="#galeri-arsip"
            onClick={() => setSelectedCategory('Bentang Alam Agraris')}
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-slate-900 font-bold group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">agriculture</span>
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                Konservasi Ekologi
              </span>
            </div>
            <div className="grow">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                Kampung Wisata Sawah 2018
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Dokumentasi peresmian kawasan 86,60 ha sawah terasering berpadu budidaya burung hantu (<em>Tyto alba</em>) pembasmi hama tikus alami.
              </p>
            </div>
            <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Lihat Arsip Lanskap</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>
        </motion.div>
      </section>

      {/* 3. SECTION INTERACTIVE BEFORE & AFTER COMPARISON */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-background-alt"
        id="komparasi-visual"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full mb-3 tracking-wide uppercase">
                <span className="material-symbols-outlined text-[14px]">compare</span>
                Komparasi Spasial &amp; Bentang Alam
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Melihat Jejak Waktu: Dulu &amp; Sekarang
              </h2>
            </div>
            <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed">
              Saksikan keteguhan warga menjaga kelestarian terasering dan mata air Tuk Babon melintasi era, dari permukiman limasan kayu jati hingga terhubung sebagai civic smart village.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-6 sm:p-8 border border-border">
            {/* Slider Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPos(100)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    sliderPos === 100
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                  }`}
                >
                  Dahulu (Era Hindia Belanda)
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    sliderPos === 50
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                  }`}
                >
                  50:50 Komparasi
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(0)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    sliderPos === 0
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                  }`}
                >
                  Sekarang (2024-2026)
                </button>
              </div>

              <div className="text-xs sm:text-sm text-text-secondary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary-container">tune</span>
                <span>Geser slider untuk membandingkan foto</span>
              </div>
            </div>

            {/* Visual Container */}
            <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg select-none border border-border bg-black">
              {/* Present Image */}
              <img
                alt="Tambangan Masa Kini 2024-2026"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U2DJpdgLUrz8YDF42Q2UfmFwKF1C_jxbu-DLNR1ptAuU4TkZRpKCZhT3VDl_aQGfwK-tRnIO67fZB9EjbvpwZ95OYCCHjHww9kpQItowRjmwDCQTVYtVsVkwpmrqRqBdJSHj-BT-EmvGX8rsfRBKJ3X4VOpckvvDIbXGhpw7N-t2svOv9eQCN5hKwWmpM5hmK-9tnFNT0s8aK9ecf6GaoKbEzjMnllkT4AamDattM_-xg7i-un0EN0SmEm"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-4 right-4 bg-primary-container/90 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md z-10 shadow-md">
                Sekarang (Era Modern 2026)
              </span>

              {/* Past Image Clipped */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  alt="Tambangan Era Hindia Belanda Tempo Dulu"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRerzs3F5OFQOcl0Ej4Wyoh-loqmrC6uIyZDPalDw53dk-Npk8SX7GfuIMDtAVPUd304JDtTN9AMPCoHrw73VKhpdfEW50Chp3-4TQu1nmliIVe7-oJpHPhbDjbn8omDU5VtJJpxrdT6K3F6eh1JcD2O0bs0rkLcXRqHDArM90RevGuQ0aNwT6ZPdp5r_VTdoaIY7RAmfE0MccxW7R1eLWBRheDpDsO7sZjX2dsU0uQX0NvT5wlqeEOA"
                  className="w-full h-full object-cover filter sepia-[0.35] brightness-95"
                  style={{ width: '100vw', maxWidth: 'none' }}
                />
                <span className="absolute bottom-4 left-4 bg-on-background/90 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md z-10 shadow-md">
                  Dahulu (Plat Kaca &amp; Arsip Kolonial)
                </span>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Geser posisi perbandingan foto sejarah"
              />
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-secondary-container text-slate-900 font-bold flex items-center justify-center shadow-xl text-sm border-2 border-white">
                  ↔
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. SECTION FEATURED SPOTLIGHT: KESENIAN TRADISIONAL LAES */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-white"
        id="sorotan-laes"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-md">
            {/* Left Image */}
            <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Pertunjukan Kesenian Tradisional Laes Paguyuban Ngudi Laras Wahyu Budoyo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-nnHDJIAA1dPGHxumogGb9Qame-FNF8TTSO898JGVzWgOsn2PA2aoBTJJTY5nDVC73wwQOoePS5WC03l1xnlphvP5WZKAKCMWfi5QziQ-5wckkjVM_F5N-eJIUesRPKaFwhg80NGCMYxGtBB9piExaIhVI402R6nTFaWlCjoZAh3DTwtlssP_HDpPkYenHCCoKBhqAOkmZHHq0hwYYwYxsW5uk52qI1_VpZ2HPMlAkq2mjrlPuGn"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm">
                  Warisan Seni Langka Kota Semarang
                </span>
              </div>
            </div>

            {/* Right Detail */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold mb-2">
                  <span className="material-symbols-outlined text-[18px] text-primary-container">theater_comedy</span>
                  <span>Paguyuban Ngudi Laras Wahyu Budoyo</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-3">
                  Kesenian Laes / Lais Tambangan
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Kesenian Laes adalah tarian akrobatik tradisional bercorak mistis di mana penari melakukan atraksi meliuk dan berdiri seimbang di atas bentangan tali tambang bambu setinggi 8 hingga 10 meter, diiringi lantunan gamelan dan tembang Jawa sarat doa.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Secara historis, tradisi Laes di Tambangan diselenggarakan sebagai ritual permohonan hujan di musim kemarau panjang, tolak bala, serta ucapan syukur atas berkah panen padi terasering. Kini menjadi identitas budaya takbenda kebanggaan warga.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white rounded-2xl mb-6 border border-border">
                  <div>
                    <span className="text-xs text-text-secondary block">Pelestari Aktif</span>
                    <span className="text-sm font-bold text-text-primary">
                      Paguyuban Ngudi Laras Wahyu Budoyo
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Ketinggian Tali Tambang</span>
                    <span className="text-sm font-bold text-primary-container">
                      8 - 10 Meter di Udara
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/sejarah"
                  className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">history</span>
                  <span>Baca Sejarah Desa Lengkap</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-surface text-text-primary text-xs sm:text-sm font-semibold px-5 py-3 rounded-full border border-border transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">upload_file</span>
                  <span>Kirim Foto Seni Laes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. SECTION INTERACTIVE DIGITAL ARCHIVE GALLERY */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-background-alt"
        id="galeri-arsip"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Search */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-slate-900 font-bold text-xs tracking-wide uppercase mb-3">
                <span className="material-symbols-outlined text-[16px]">collections_bookmark</span>
                <span>ARSIP DIGITAL TERBUKA</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Koleksi Benda, Dokumen, &amp; Memori Desa
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
                Telusuri koleksi arsip resmi yang didokumentasikan bersama sesepuh desa dan tim KKN UNNES GIAT 17.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full sm:w-72 relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder="Cari arsip / judul..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-white text-text-primary text-sm focus:outline-none focus:border-primary-container shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-primary-container text-white shadow-md'
                    : 'bg-white text-text-secondary hover:bg-surface border border-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group cursor-pointer flex flex-col justify-between h-full"
              >
                <div className="grow flex flex-col">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface shrink-0">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={item.judul}
                      src={item.fotoUrl}
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm">
                      {item.kategori}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-container transition-colors">
                      {item.judul}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary line-clamp-3 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-border/60 text-xs sm:text-sm font-semibold text-primary-container">
                  <span>Buka Detail Koleksi</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. CLOSING HERO CTA (Matching Home & Sejarah) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 lg:py-24 bg-background"
        id="kontribusi"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={EASING_SPRING}
            className="relative overflow-hidden rounded-3xl sm:rounded-[32px] bg-gradient-to-br from-primary-container via-primary-container to-primary-hover p-8 sm:p-12 lg:p-16 text-white shadow-2xl"
          >
            {/* Ambient Rings */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full w-fit border border-white/20">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">diversity_3</span>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                  Kontribusi Warga
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight text-balance">
                Punya Foto Lama atau Cerita Sesepuh?
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                Bantu kami melengkapi museum digital Kelurahan Tambangan. Kirimkan foto kenangan masa lalu keluarga, piagam lama, atau rekaman kisah leluhur Anda untuk diabadikan bagi generasi mendatang.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface text-primary-container text-sm sm:text-base font-bold px-7 py-3 sm:py-3.5 rounded-full shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">upload_file</span>
                  <span>Kirim Foto / Kisah Lama</span>
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">home</span>
                  <span>Kembali ke Beranda</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL 1: DETAIL ARSIP MODAL */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-4 shadow-2xl relative border border-border">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 bg-secondary-container text-slate-900 font-bold text-xs rounded-full">
                {activeItem.kategori}
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="w-10 h-10 rounded-full bg-surface hover:bg-surface-variant text-text-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup detail arsip"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black shadow-inner">
              <img
                src={activeItem.fotoUrl}
                alt={activeItem.judul}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                {activeItem.judul}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {activeItem.deskripsi}
              </p>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-text-secondary">
                Koleksi Terverifikasi • Digital Heritage Tambangan
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-full bg-surface hover:bg-surface-variant text-xs sm:text-sm font-semibold text-text-primary cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: FORM SUMBANG ARSIP FOTO / KISAH LAMA */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 flex flex-col gap-5 shadow-2xl relative border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[22px]">upload_file</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary leading-tight">
                    Kontribusi Arsip Sejarah Desa
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                    Pengayaan Museum Digital Kelurahan Tambangan
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-surface hover:bg-surface-variant text-text-primary flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup form"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 flex flex-col items-center text-center gap-3">
                <span className="w-14 h-14 rounded-full bg-secondary-container text-slate-900 font-bold flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </span>
                <h4 className="text-xl font-bold text-text-primary">
                  Terima Kasih Atas Kontribusi Anda!
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary max-w-sm">
                  Pesan Anda diteruskan ke Bpk. Budi Yuwono / Tim Portal Digital Kelurahan Tambangan. Kami akan segera memverifikasi arsip tersebut.
                </p>
              </div>
            ) : (
              <form onSubmit={handleKontribusiSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-text-primary mb-1.5">
                    Nama Kontributor / Warga
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Bambang (RW 02)"
                    value={kontributorNama}
                    onChange={(e) => setKontributorNama(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-text-primary mb-1.5">
                    Judul Foto / Objek Sejarah
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Foto Pertunjukan Seni Laes Tahun 1980-an"
                    value={kontributorJudul}
                    onChange={(e) => setKontributorJudul(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-text-primary mb-1.5">
                    Kategori Arsip
                  </label>
                  <select
                    value={kontributorKategori}
                    onChange={(e) => setKontributorKategori(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm"
                  >
                    <option value="Foto Tempo Dulu">Foto Tempo Dulu</option>
                    <option value="Kesenian Tradisional Laes">Kesenian Tradisional Laes</option>
                    <option value="Dokumen & Piagam Lama">Dokumen &amp; Piagam Lama</option>
                    <option value="Kisah / Cerita Tutur Sesepuh">Kisah / Cerita Tutur Sesepuh</option>
                    <option value="Tradisi Barikan & Sedekah Bumi">Tradisi Barikan &amp; Sedekah Bumi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-text-primary mb-1.5">
                    Keterangan Sejarah / Cerita Singkat
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ceritakan latar belakang peristiwa, nama tokoh, lokasi, atau tahun perkiraan..."
                    value={kontributorCerita}
                    onChange={(e) => setKontributorCerita(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Kirim via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Museum;
