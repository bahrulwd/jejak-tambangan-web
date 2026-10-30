import React, { useState, useMemo } from 'react';
import { motion, type Variants } from 'framer-motion';
import { EASING_NATURAL, EASING_SPRING } from '../components/ui/MotionWrappers';

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

interface ProductItem {
  id: string;
  nama: string;
  kategori: string;
  kategoriKey: 'kriya' | 'kopi' | 'kuliner' | 'hasil-bumi' | 'anggrek';
  harga: string;
  penjual: string;
  lokasi: string;
  rating: number;
  ulasanCount: number;
  deskripsi: string;
  fotoUrl: string;
  satuan: string;
  nomorWa: string;
  pesanWa: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-soto',
    nama: 'Soto Sawah Mbak Tutik (Legendaris)',
    kategori: 'Kuliner Legendaris',
    kategoriKey: 'kuliner',
    harga: 'Rp 12.000 - 25.000',
    penjual: 'Ibu Tutik Handayani',
    lokasi: 'Jl. Duwet No. 237, Tambangan',
    rating: 4.9,
    ulasanCount: 520,
    deskripsi: 'Soto ayam kampung berkuah rempah bening disajikan di saung tepi sawah terasering. Destinasi kuliner ikonik sejak 2012 yang diteliti dalam kajian Blue Ocean Strategy 2024.',
    fotoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XSpbh-8AvP9OXQHpocCf_PMXWC3tMC7BzakwpgNcGkjDZvAhApOUZEyD829eavOtRBEiuVdGL7l7GgfIWgRrSke6bgIA2cfDR4Ba89svJlW9zvfQDpk5KA7IdzBaUWtkqX-9nep-sRo4aGQUJ7adLDHMCT7T6Lc5k0Db_7fZXh8qmNEhsNs7qJVhBUx0wsjr7MexQH7M7I9XgAmaLHdWTcLyDRb8puqFVTytc7F4MMQHQi618hMAuuCjki',
    satuan: 'Porsi Soto + Lauk Tempe Mendoan',
    nomorWa: '6281234567890',
    pesanWa: 'Halo Ibu Tutik, saya ingin memesan meja / reservasi kunjungan ke Soto Sawah Mbak Tutik.'
  },
  {
    id: 'prod-anggrek',
    nama: 'Bibit & Bunga Anggrek Tropis (CV Bunga Alam Lestari)',
    kategori: 'Florikultura & Anggrek',
    kategoriKey: 'anggrek',
    harga: 'Rp 35.000 - 250.000',
    penjual: 'CV Bunga Alam Lestari (Sentra Anggrek)',
    lokasi: 'Greenhouse RW 02, Tambangan',
    rating: 5.0,
    ulasanCount: 340,
    deskripsi: 'Ratusan varietas anggrek tropis berkualitas tinggi (Dendrobium, Bulan, Cattleya, Vanda). Mitra agrowisata florikultura unggulan Tambangan terdaftar di Jadesta.',
    fotoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-i6TBpnM8FLpGrZvfVQNbBtW5an5DLSbbcn3EPPyPMeM2K6Ef7mBm_O8YM-3AXGZRxiHNvStP_QDLUmEf0AvW8BL6GcFP8XXZAnoj7lOdXaZuLn78XzdwDBBI7SRkeWZATlczV6WUOmjQojtlpb-fyurWYZEJ8Xhj7t6Vl3eDKxRDUO5-LtXHbPWUW-ZcejiEE50EcVdaYHCFtP82DddTnk0P3WQW-R2K8nvTSnIW',
    satuan: 'Pot Siap Bunga / Bibit Botolan',
    nomorWa: '6281575880764',
    pesanWa: 'Halo Bpk. Budi Yuwono / CV Bunga Alam Lestari, saya tertarik membeli anggrek tropis Tambangan.'
  },
  {
    id: 'prod-cendol',
    nama: 'Cendol Wolu Tambangan',
    kategori: 'Kuliner Khas',
    kategoriKey: 'kuliner',
    harga: 'Rp 8.000 / porsi',
    penjual: 'Ibu Ningsih (Paguyuban Kuliner)',
    lokasi: 'Area Kampung Wisata Sawah, Tambangan',
    rating: 4.8,
    ulasanCount: 160,
    deskripsi: 'Minuman cendol segar tradisional berbahan daun suji alami dan kuah santan kelapa organik dipadukan manis gula aren lereng bukit yang legit.',
    fotoUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    satuan: 'Gelas Cup Dingin / Termos Pesta',
    nomorWa: '6281234567890',
    pesanWa: 'Halo, saya ingin memesan Cendol Wolu Tambangan.'
  },
  {
    id: 'prod-kopi',
    nama: 'Kopi Robusta Lereng Tambangan',
    kategori: 'Kopi & Minuman',
    kategoriKey: 'kopi',
    harga: 'Rp 35.000',
    penjual: 'Kelompok Tani Harum Makmur',
    lokasi: 'RW 01, Tambangan',
    rating: 4.9,
    ulasanCount: 124,
    deskripsi: 'Biji kopi petik merah dari kebun warga lereng bukit dengan proses pascapanen natural beraroma cokelat rempah khas.',
    fotoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7ovqMJvFnRCD_MqFAhLM_3ovTeLY4vvo9N9zms88LlvpYFfoZNop31j6yr7nYg4aAWcDTJAGwJLnkpYG0m-mZ9m_l-OwbNNYTuDXejDwWkmA2bLRPe3GZEXA8Fcj7Z-KmCFQYey9iJmFLaOxuoUuh5g5jUNsyW5r4MRDNMbHM3d08djapJGP_Iy-5RvQ2G8EmiK8Y7lTIw1n7Pqazl-tceQ7ETwP1BdZTYwFvrb8tvhPFWQbmuQbFQ',
    satuan: 'Netto 250 gram',
    nomorWa: '6281234567890',
    pesanWa: 'Halo, saya ingin memesan Kopi Robusta Lereng Tambangan dari website Kelurahan Tambangan.'
  },
  {
    id: 'prod-besek',
    nama: 'Besek & Wadah Anyaman Alami',
    kategori: 'Kriya Anyaman',
    kategoriKey: 'kriya',
    harga: 'Rp 15.000 - 60.000',
    penjual: 'Sanggar Anyam Sepuh (Mbah Karti)',
    lokasi: 'RW 03, Tambangan',
    rating: 4.8,
    ulasanCount: 98,
    deskripsi: 'Perabot ramah lingkungan tahan jamur untuk hampers hajatan, wadah sajian kuliner, dan dekorasi interior beraksen etnik.',
    fotoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQfYl5SiSlHnYJttIiAv2ixsCb4sw83o1whSBEnWARcpMVmtnHm3LkD6ropJcDPddNpLJy4Of5A8klpl2QHNDg2a1yW_dNbg1i569yskYqVAYnQULZOFcgRJTkBs_0VUewhR83XuzqJOWAL9-cHka6H3qw6zTaq8OmSQ7-3I6sIxJSQ298snhY_z9KrkqNpCXtR_xFnjIF62-1RH9uVV7aTHrYSAMxa8LoTtGhF8MZLrRjkGU8NqdtvA',
    satuan: 'Varian Ukuran S / M / L',
    nomorWa: '6281234567890',
    pesanWa: 'Halo, saya ingin memesan Besek Anyaman Bambu Tambangan dari website desa.'
  },
  {
    id: 'prod-sayur',
    nama: 'Sayur Organik Subak Tuk Babon',
    kategori: 'Hasil Bumi & Sayur',
    kategoriKey: 'hasil-bumi',
    harga: 'Mulai Rp 10.000',
    penjual: 'KWT Dapur Berkah RW 02',
    lokasi: 'RW 02, Tambangan',
    rating: 4.9,
    ulasanCount: 86,
    deskripsi: 'Sayuran segar bebas pestisida dipanen langsung pagi hari dari terasering subur yang diairi mata air Tuk Babon alami.',
    fotoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaI_hGEvkssNYestu_iSkgLFwwV_Oiz3JEexH_oeCL3jBTAsiJzTsm1N7w-lBagWkCSe-HxrlWEJYAe9NABvDzUHCorw-DSPp_j70A8dZvkfw4SoMIdsWfqsNiFEPakz_Z3EAlKrYS6L2XFm2OERWeav9-HB4Ix9yg6tgXz1rIanTZ-OrdHEAw8VcCDT4Tx4BIo_2sJNtUUN5f2XOGBRZWscEChfer3cg4VL9vk3DerUh_mjq8-OcaAg',
    satuan: 'Panen Setiap Pagi',
    nomorWa: '6281234567890',
    pesanWa: 'Halo, saya ingin memesan Sayur Organik KWT Tambangan dari website desa.'
  },
  {
    id: 'prod-madu',
    nama: 'Madu Klanceng Tambangan Murni',
    kategori: 'Hasil Bumi & Madu',
    kategoriKey: 'hasil-bumi',
    harga: 'Rp 65.000 / 250ml',
    penjual: 'Bpk. Sugeng (RW 01)',
    lokasi: 'RW 01, Tambangan',
    rating: 5.0,
    ulasanCount: 95,
    deskripsi: 'Madu murni lebah tanpa sengat (Trigona sp.) hasil budidaya lereng hutan Tambangan kaya antioksidan dan khasiat kesehatan alami.',
    fotoUrl: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    satuan: 'Botol Kaca 250ml',
    nomorWa: '6289876543210',
    pesanWa: 'Halo Bpk. Sugeng, saya berminat memesan Madu Klanceng Murni dari website Kelurahan Tambangan.'
  }
];

export const UMKM: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDaftarModalOpen, setIsDaftarModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [namaPemilik, setNamaPemilik] = useState('');
  const [namaUsaha, setNamaUsaha] = useState('');
  const [jenisUsaha, setJenisUsaha] = useState('Olahan Pangan & Kuliner');
  const [deskripsiUsaha, setDeskripsiUsaha] = useState('');

  const handleSelectCategory = (catKey: string) => {
    setSelectedCategory(catKey);
    const catalogSection = document.getElementById('katalog-produk');
    if (catalogSection) {
      const rect = catalogSection.getBoundingClientRect();
      if (rect.top < 0) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.kategoriKey === selectedCategory;
      const matchSearch =
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.penjual.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDaftarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Halo Tim Pemberdayaan UMKM Kelurahan Tambangan,\nSaya ingin mendaftarkan usaha warga:\n\nNama Pemilik: ${namaPemilik || '-'}\nNama Usaha/Produk: ${namaUsaha || '-'}\nKategori: ${jenisUsaha}\nDeskripsi Singkat: ${deskripsiUsaha || '-'}`
    );
    window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsDaftarModalOpen(false);
      setNamaPemilik('');
      setNamaUsaha('');
      setDeskripsiUsaha('');
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Consistent with Home & Sejarah Architecture) */}
      <section className="relative w-full -mt-14 sm:-mt-16 overflow-hidden bg-on-background" id="hero">
        {/* Background Visual Backdrop */}
        <div className="absolute inset-0 z-0">
          <motion.img
            className="w-full h-full object-cover"
            alt="Pemandangan terasering hijau dan kesibukan perajin UMKM warga Tambangan"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fq_GZ-zbHTn9-7BMZzabh-GYVorpB9DvJw0EsEUxCoUQht-WO0-n1jhSLdyiVIVgCNONz-dUyV1Q9dQUjUUPAhx7o7oHKAXV3-rgBXkcglZ_M-sqDFSvUyRsstjTgzF-Yb6L9c3vjK3rHrT15DKMrjxz0heRhSV_cGdbZFjtfkI92kB9Y2h0S8WioxrF8NOTiJ6fRb4kTHpC0VaDhlwI_kazVwJK-nWruwwweXXbKqkqy4oCqauXRw"
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
            {/* Gold Eyebrow Badge */}
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
                DIREKTORI &amp; KATALOG UMKM TAMBANGAN
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-md text-balance"
            >
              Karya Lokal, Cita Rasa,<br className="hidden md:inline" />
              <span className="text-secondary-fixed"> dan Kreativitas Warga</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroItemVariants}
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-normal"
            >
              Dukung kemandirian ekonomi desa dengan berbelanja langsung produk kerajinan anyaman bambu warisan, kopi lereng petik merah, olahan pangan khas, dan hasil bumi segar Kelurahan Tambangan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-1"
            >
              <a
                href="#katalog-produk"
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Jelajahi Produk UMKM</span>
                <span className="material-symbols-outlined text-[20px]">storefront</span>
              </a>

              <button
                type="button"
                onClick={() => setIsDaftarModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">add_business</span>
                <span>Daftarkan Usaha Warga</span>
              </button>
            </motion.div>

            {/* Quick Stat Badges */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap items-center justify-center gap-2.5 pt-2 sm:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                <span>45+ Pelaku Usaha Aktif</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">handshake</span>
                <span>100% Karya Warga Asli</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">eco</span>
                <span>Bahan Alami &amp; Berkelanjutan</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLOATING BENTO PREVIEW CARDS (Overlapping bottom edge) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 mb-16 sm:mb-20">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch"
        >
          {/* Card 1: Kriya */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="#katalog-produk"
            onClick={() => setSelectedCategory('kriya')}
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-slate-900 font-bold group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                Kriya Bambu
              </span>
            </div>
            <div className="grow">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                Anyaman Bambu Tradisi
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Karya anyaman besek, wadah hantaran, dan kerajinan bambu apus tahan lama hasil ketelitian perajin RW 03.
              </p>
            </div>
            <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Lihat Produk Kriya</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>

          {/* Card 2: Hasil Bumi & Olahan */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="#katalog-produk"
            onClick={() => setSelectedCategory('kopi')}
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">coffee</span>
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                Olahan &amp; Kopi
              </span>
            </div>
            <div className="grow">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                Kopi Lereng &amp; Madu
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Kopi robusta petik merah lereng Tambangan, madu lebah klanceng murni, dan aneka keripik pisang renyah.
              </p>
            </div>
            <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Lihat Hasil Bumi</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>

          {/* Card 3: Sayur Organik */}
          <motion.a
            variants={cardItemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            href="#katalog-produk"
            onClick={() => setSelectedCategory('hasil-bumi')}
            className="group relative bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-slate-900 font-bold group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">nutrition</span>
              </span>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                Pertanian Warga
              </span>
            </div>
            <div className="grow">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                Sayur Organik KWT
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Sayuran segar tanpa pestisida yang dipanen tiap pagi oleh Kelompok Wanita Tani dari terasering subak asri.
              </p>
            </div>
            <div className="pt-4 mt-4 flex items-center justify-between text-primary-container text-xs sm:text-sm font-semibold border-t border-border/60">
              <span>Lihat Produk Tani</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* 2. FEATURED HERO UMKM: SANGGAR ANYAM SEPUH (Split 50/50 Card) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-8 sm:py-12 bg-background"
        id="produk-unggulan"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start mb-8 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-slate-900 font-bold text-xs tracking-wide uppercase mb-3">
              <span className="material-symbols-outlined text-[16px]">stars</span>
              <span>SOROTAN PRODUK MAESTRO DESA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Karya Ikonik: Anyaman Bambu Sanggar Sepuh
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
              Warisan kriya yang merangkai kesabaran, kelestarian bambu lereng Mijen, dan kemandirian tangan perajin sepuh Tambangan.
            </p>
          </div>

          <div className="bg-surface rounded-3xl shadow-sm border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch hover:shadow-md transition-shadow">
            {/* Left Image */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Pengrajin sepuh wanita terampil menganyam bilah bambu alami di teras sanggar Tambangan"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJqbxBX3oY8fixBG70ItTDTieIEQ7Gc9TUdg7v9W4LxD2Y4LAlxXpo-Jr0r7lkajSWbnKcFhXXvmzSFRceFKo-8IB-IOcknAkItSrZ-qI3NpZubtVYqsIEal8MscamhKey8Ntj_WqB0b2bRwOz6wSIhUROHN7elDk6JtB_pbDCLJsQ3lbSqI8Kty40DttV0xT67RI163JMPpq8N9wUVS-L-mZFJuGsDqlbv7fylFdXyH47jP6DwjMyg"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm">
                  Pilihan Unggulan • Kerajinan Bambu
                </span>
              </div>
            </div>

            {/* Right Story & Action */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-text-secondary text-xs font-medium mb-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">history_edu</span>
                  <span>Warisan Tradisi Sejak 1974</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight mb-3">
                  Sanggar Anyam Sepuh: Anyaman Bambu Tradisi Warisan Leluhur
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Lebih dari sekadar perkakas — setiap bilah bambu apus diserut dan dianyam dengan ketelitian tinggi oleh Mbah Karti bersama ibu-ibu perajin RW 03. Tahan lama, bebas bahan kimia pemutih, dan ramah lingkungan untuk wadah boga, besek hantaran, serta hampers etnik khas Nusantara.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-surface-container-low rounded-2xl mb-6 border border-border/50">
                  <div>
                    <span className="text-xs text-text-secondary block">Harga Satuan / Grosir</span>
                    <span className="text-base sm:text-lg font-bold text-primary-container">
                      Mulai Rp 25.000 / paket
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Pengrajin Berdaya</span>
                    <span className="text-sm font-semibold text-text-primary block">
                      Mbah Karti &amp; Paguyuban RW 03
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  href="https://wa.me/6281234567890?text=Halo%20Mbah%20Karti,%20saya%20tertarik%20dengan%20karya%20Anyaman%20Bambu%20Sanggar%20Anyam%20Sepuh%20Tambangan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Chat WhatsApp ke Pengrajin</span>
                </a>
                <span className="text-xs text-text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">inventory_2</span>
                  <span>Menerima pesanan kustom partai besar</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. INTERACTIVE PRODUCT CATALOG WITH FILTERING & SEARCH */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-background-alt"
        id="katalog-produk"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-slate-900 font-bold text-xs tracking-wide uppercase mb-3">
                <span className="material-symbols-outlined text-[16px]">storefront</span>
                <span>KATALOG LENGKAP PRODUK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
                Etalase Produk Warga Tambangan
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
                Pilih kategori dan pesan langsung kepada pengrajin atau kelompok tani warga desa melalui nomor WhatsApp resmi.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full sm:w-72 relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder="Cari produk / penjual..."
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
            <button
              type="button"
              onClick={() => handleSelectCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              Semua Produk ({PRODUCTS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => handleSelectCategory('kuliner')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'kuliner'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              Kuliner &amp; Soto Sawah
            </button>
            <button
              type="button"
              onClick={() => handleSelectCategory('anggrek')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'anggrek'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              Florikultura &amp; Anggrek
            </button>
            <button
              type="button"
              onClick={() => handleSelectCategory('kriya')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'kriya'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              Kriya Anyaman Bambu
            </button>
            <button
              type="button"
              onClick={() => handleSelectCategory('kopi')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'kopi'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              Kopi &amp; Minuman
            </button>
            <button
              type="button"
              onClick={() => handleSelectCategory('hasil-bumi')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'hasil-bumi'
                  ? 'bg-primary-container text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-surface border border-border'
              }`}
            >
              Hasil Bumi &amp; Sayur
            </button>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-border">
              <span className="material-symbols-outlined text-[48px] text-text-secondary/50 mb-3 block">
                search_off
              </span>
              <h3 className="text-lg font-bold text-text-primary mb-1">
                Produk Tidak Ditemukan
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Tidak ada produk yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2 rounded-full bg-primary-container text-white text-xs font-semibold"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border h-full"
                >
                  <div className="grow flex flex-col">
                    {/* Image Header with Category Tag */}
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative bg-surface-container shrink-0">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        alt={item.nama}
                        src={item.fotoUrl}
                      />
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-secondary-container text-slate-900 font-bold text-xs shadow-sm">
                        {item.kategori}
                      </span>
                    </div>

                    {/* Seller & Rating Bar */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs text-text-secondary font-medium truncate">
                        {item.penjual}
                      </span>
                      <div className="flex items-center gap-1 text-secondary text-xs font-bold shrink-0">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        <span>{item.rating}</span>
                        <span className="text-text-secondary font-normal text-[11px]">
                          ({item.ulasanCount})
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 tracking-tight">
                      {item.nama}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>

                  {/* Footer: Price & WhatsApp Action */}
                  <div className="pt-4 mt-auto border-t border-border flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">
                        {item.satuan}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-primary-container">
                        {item.harga}
                      </span>
                    </div>

                    <a
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-full shadow-sm transition-colors cursor-pointer"
                      href={`https://wa.me/${item.nomorWa}?text=${encodeURIComponent(item.pesanWa)}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Hubungi Penjual via WA</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* 4. PILAR NILAI: APA YANG MEMBEDAKAN PRODUK TAMBANGAN? */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-slate-900 font-bold text-xs tracking-wide uppercase mb-3">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>NILAI &amp; INTEGRITAS PRODUK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Mengapa Memilih Produk Warga Tambangan?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
              Empat keunggulan autentik yang menjadikan setiap karya desa memiliki nilai guna tinggi, ramah lingkungan, dan berdampak nyata bagi masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Pilar 1 */}
            <div className="bg-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-border h-full">
              <div className="grow">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 text-slate-900 font-bold flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">eco</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-1">
                  Pilar 01
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                  Alami &amp; Berkelanjutan
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Mengutamakan bambu apus lokal tanpa pemutih kimia serta metode tani organik yang menjaga kelestarian hulu tanah Mijen.
                </p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-border h-full">
              <div className="grow">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 text-slate-900 font-bold flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">history_edu</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-1">
                  Pilar 02
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                  Warisan Turun-temurun
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Teknik anyaman bambu apus dan racikan bumbu khas desa diwariskan lintas generasi dengan ketelitian manual yang terjaga.
                </p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-border h-full">
              <div className="grow">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 text-slate-900 font-bold flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">diversity_3</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-1">
                  Pilar 03
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                  Ekonomi Komunal Berdaya
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Setiap transaksi mengalir langsung memberdayakan kelompok tani wanita (KWT), perajin lansia, dan keluarga petani desa.
                </p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="bg-surface rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-border h-full">
              <div className="grow">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 text-slate-900 font-bold flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[26px]">chat</span>
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-1">
                  Pilar 04
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                  Langsung ke Pengrajin
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Pesan langsung melalui kontak WhatsApp warga tanpa perantara, memudahkan pesanan khusus hajatan atau hampers partai besar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. CERITA DI BALIK PRODUK (Editorial Split) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-background-alt"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-border">
                <img
                  className="w-full h-full object-cover"
                  alt="Ibu perajin anyaman bambu Tambangan tersenyum hangat di depan beranda sanggar desa"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDksuXvADv6lVD6dY6GcpAKt1JHJgUQP0OZ-nnQ802q3DK8cN_In2wnAqJX7RUiQWlXOLH84OEQBaEq7XRc9KuhTps7EdxpSCGWhc90fD0YSrh2lZ7IMi401xry2BslYDvMFsz5sSpqQZsD5Q_NvjQ2McfAG4671hVkJtdC6TdUiCguaCga0ezLl6fcO0PcnhDFia_Reyp1nX9yBuZ0vSaMFdp2MXNBPaDuIHm6vuljLXaOBfo3RrFrA"
                />
              </div>

              {/* Decorative Stamp Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-4 bg-white rounded-full p-3 sm:p-4 shadow-lg hidden sm:flex items-center gap-3 border border-border">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-slate-900 font-bold flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                </div>
                <div className="pr-2">
                  <span className="text-xs font-bold text-text-primary block">100% Produk Warga</span>
                  <span className="text-[11px] text-text-secondary">Dukungan Ekonomi Komunal</span>
                </div>
              </div>
            </div>

            {/* Editorial Story Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-slate-900 font-bold text-xs tracking-wide uppercase mb-4 self-start">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>JEJAK &amp; NILAI KEMANUSIAAN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-4">
                Dibuat dengan Cerita, Dirawat dengan Kehangatan
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                Setiap rupiah yang Anda belanjakan untuk produk UMKM Tambangan mengalir langsung memperkuat pendidikan anak petani, menjaga kelestarian rumpun bambu apus desa, dan mempertahankan kemandirian dapur warga.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                Ini bukan sekadar transaksi komersial, melainkan jembatan solidaritas yang menghubungkan denyut perkotaan Semarang dengan ketulusan tangan para perajin di lereng Mijen.
              </p>

              {/* Quote Block */}
              <div className="bg-surface rounded-2xl p-5 sm:p-6 border-l-4 border-primary">
                <p className="text-sm sm:text-base text-text-primary italic mb-2 leading-relaxed">
                  &ldquo;Kami tidak mengejar produksi pabrik massal. Kami menjaga rasa, ketelitian serat bambu, dan amanah warisan leluhur agar desa tetap hidup berdikari.&rdquo;
                </p>
                <span className="text-xs sm:text-sm text-primary font-semibold block">
                  — Ibu Siti Rohmah, Penggerak Komunitas UMKM Tambangan
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. PANDUAN SENTRA & NAVIGASI KUNJUNGAN UMKM */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-16 sm:py-20 bg-background"
        id="sentra-kunjungan"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-slate-900 font-bold text-xs tracking-wide uppercase mb-3">
              <span className="material-symbols-outlined text-[16px]">map</span>
              <span>LOKASI &amp; NAVIGASI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Kunjungi Sentra &amp; Gerai UMKM Tambangan
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
              Hanya berjarak sekitar 35 menit berkendara dari Simpang Lima Kota Semarang. Temukan keasrian bengkel anyaman bambu dan nikmati seduhan kopi lereng langsung dari sanggarnya.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Map Preview */}
              <div className="lg:col-span-7">
                <div
                  className="w-full h-72 sm:h-88 lg:h-96 rounded-2xl bg-surface-container relative overflow-hidden shadow-inner flex flex-col justify-between p-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAF0m2qGDnES_ykykZK6LRYhx7aI4Q8JnF0nW3Tf5sO7aI18X1gEkXItFpkJr3v8lAgpvT11Aqf4WU11I5k9EL9rwOL0LOhY6_oex_omSzOiplnEEvAeScOxQ-RWD461BW_RsCUS8d0V3iTUD5FbCFl_TGAcTHclpkVXoDUNfo1L-GVdQU1Hb3CpmEgv7LZL4Sl-DKf1NLSmyLLh3I7MLTbP6cihJGkcPx56XZ6IiY98BYgXKROsQodLw')`
                  }}
                >
                  {/* Map Badges Overlay */}
                  <div className="flex flex-wrap gap-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-text-primary text-xs font-medium shadow-sm flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <span>Balai Kelurahan</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs shadow-sm flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                      <span>Sentra Anyam Bambu RW 03</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-text-primary text-xs font-medium shadow-sm flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
                      <span>Kebun Tani RW 02</span>
                    </span>
                  </div>

                  {/* Pin Highlight Card */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md self-start max-w-xs z-10 border border-border">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">
                        pin_drop
                      </span>
                      <span className="text-xs font-bold text-text-primary">
                        Sentra Kriya &amp; Balai Tambangan
                      </span>
                    </div>
                    <span className="text-[11px] text-text-secondary block mt-0.5">
                      Ketinggian 280 mdpl • Hawa sejuk lereng Semarang Barat
                    </span>
                  </div>
                </div>
              </div>

              {/* Information Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 tracking-tight">
                    Titik Kunjungan &amp; Layanan Gerai
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                      </span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-text-primary block">
                          Alamat Sentra Utama
                        </span>
                        <span className="text-xs text-text-secondary">
                          Jl. Raya Tambangan No. 01, Mijen, Kota Semarang, Jawa Tengah 50215
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-secondary-fixed text-slate-900 font-bold flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                      </span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-text-primary block">
                          Jam Buka Sanggar &amp; Gerai
                        </span>
                        <span className="text-xs text-text-secondary">
                          Senin - Minggu: 08.00 - 17.00 WIB (Terbuka untuk umum &amp; rombongan)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">directions_car</span>
                      </span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-text-primary block">
                          Aksesibilitas Kendaraan
                        </span>
                        <span className="text-xs text-text-secondary">
                          Jalan aspal mulus, dapat dilalui motor, mobil keluarga, dan mini bus pariwisata.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-colors cursor-pointer"
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
        </div>
      </motion.section>

      {/* 7. CLOSING CTA BANNER: PENDAFTARAN & DUKUNGAN UMKM */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: EASING_NATURAL }}
        className="w-full py-12 sm:py-16 pb-20 sm:pb-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={EASING_SPRING}
            className="bg-primary-container rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Ambient Background Accents */}
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-4">
                <span className="material-symbols-outlined text-[16px]">store</span>
                <span>PEMBERDAYAAN EKONOMI DESA</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
                Bangga Produk Warga, Berdaya Bersama UMKM Tambangan
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
                Punya usaha olahan makanan, kerajinan kriya, atau hasil kebun di Kelurahan Tambangan yang ingin ditampilkan di etalase digital ini? Daftarkan produk Anda sekarang secara gratis.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#katalog-produk"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-container text-xs sm:text-sm font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:bg-background-alt transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Mulai Belanja Produk</span>
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsDaftarModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3.5 rounded-full border-2 border-white/60 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">add_business</span>
                  <span>Daftarkan Usaha / Produk Warga</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL PENDAFTARAN UMKM WARGA */}
      {isDaftarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setIsDaftarModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                <span className="material-symbols-outlined text-[20px]">add_business</span>
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  Daftarkan Usaha Warga
                </h3>
                <span className="text-xs text-text-secondary">
                  Kelurahan Tambangan, Kec. Mijen
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
              Formulir pendaftaran gratis bagi warga Tambangan yang memiliki usaha kriya, olahan kuliner, atau hasil bumi untuk ditampilkan pada etalase portal kelurahan.
            </p>

            {formSubmitted ? (
              <div className="bg-secondary-container/20 border border-secondary-container rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-[48px] text-primary mb-2 block">
                  check_circle
                </span>
                <h4 className="text-base font-bold text-text-primary mb-1">
                  Pendaftaran Terkirim!
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary">
                  WhatsApp telah dibuka. Mohon kirimkan pesan untuk verifikasi oleh tim Kelurahan Tambangan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDaftarSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Nama Pemilik Usaha *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ibu Siti / Pak Sugeng"
                    value={namaPemilik}
                    onChange={(e) => setNamaPemilik(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Nama Usaha / Produk *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Keripik Pisang Makmur / Anyaman Besek"
                    value={namaUsaha}
                    onChange={(e) => setNamaUsaha(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Kategori Usaha *
                  </label>
                  <select
                    value={jenisUsaha}
                    onChange={(e) => setJenisUsaha(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm"
                  >
                    <option value="Kriya & Anyaman Bambu">Kriya &amp; Anyaman Bambu</option>
                    <option value="Kopi & Minuman Lereng">Kopi &amp; Minuman Lereng</option>
                    <option value="Olahan Pangan & Kuliner">Olahan Pangan &amp; Kuliner</option>
                    <option value="Hasil Bumi & Pertanian Segar">Hasil Bumi &amp; Pertanian Segar</option>
                    <option value="Kerajinan Tangan Lainnya">Kerajinan Tangan Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Deskripsi Singkat Usaha &amp; Wilayah RW *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Contoh: Usaha anyaman besek bambu rumahan di RT 02 RW 03, melayani pesanan hajatan..."
                    value={deskripsiUsaha}
                    onChange={(e) => setDeskripsiUsaha(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text-primary focus:outline-none focus:border-primary-container text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsDaftarModalOpen(false)}
                    className="px-5 py-2.5 rounded-full text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
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

export default UMKM;
