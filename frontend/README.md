# Ringkasan Proyek Website Desa Tambangan - KKN GIAT 17

Website Portal Desa Tambangan merupakan platform berbasis web statis yang dikembangkan untuk mendigitalkan sejarah desa, mempublikasikan video dokumenter, serta mempromosikan potensi lokal dan produk UMKM warga Kelurahan Tambangan.

## Teknolosi & Dependensi (Tech Stack)
- **Framework:** React 19 + Vite
- **Bahasa:** TypeScript (`.tsx` / `.ts`)
- **Styling:** Tailwind CSS v4 (`@theme` color tokens)
- **Ikon:** Font Awesome React (`@fortawesome/react-fontawesome`)
- **Routing:** React Router DOM v7

## Struktur Direktori
```
frontend
├── docs/                      # Folder dokumentasi proyek KKN
│   ├── PRD_Website_Desa.md    # Product Requirements Document
│   ├── DESIGN.md              # Pedoman token desain, warna, dan tipografi
│   ├── Prompt_Fase_0.md       # Master Context & Design System
│   ├── Prompt_Fase_1.md       # Instruksi Setup & Data Statis
│   ├── Prompt_Fase_2.md       # Instruksi UI Fundamental
│   ├── Prompt_Fase_3.md       # Instruksi Perakitan Halaman
│   └── Prompt_Fase_4.md       # Instruksi Routing & Build
├── public/                    # Aset statis publik (favicon, manifest)
├── src/
│   ├── assets/                # Aset media lokal (logo, ilustrasi)
│   ├── components/            # Komponen UI Reusable
│   │   ├── BentoCard.tsx      # Wrapper grid asimetris
│   │   ├── ButtonWhatsApp.tsx # Tombol integrasi kontak
│   │   ├── Footer.tsx         # Catatan kaki website
│   │   ├── Layout.tsx         # Pembungkus utama halaman (Navbar + Main + Footer)
│   │   ├── Navbar.tsx         # Navigasi utama (Glassmorphism)
│   │   └── UmkmCard.tsx       # Kartu tampilan produk UMKM
│   ├── data/                  # Penyimpanan data statis lokal
│   │   └── desaData.json      # Data array potensiDesa dan topUmkm
│   ├── pages/                 # Halaman (Views) utama aplikasi
│   │   ├── Home.tsx           # Landing page dengan navigasi Bento
│   │   ├── Potensi.tsx        # Halaman galeri potensi dan daftar UMKM terpopuler
│   │   └── Sejarah.tsx        # Halaman artikel sejarah dan embed video dokumenter
│   ├── types/                 # Definisi interface TypeScript
│   │   └── index.ts           # Interface PotensiDesa & TopUmkm
│   ├── App.tsx                # Konfigurasi rute aplikasi (React Router DOM)
│   ├── index.css              # Setup Tailwind CSS v4 (@tailwind directives & @theme)
│   ├── main.tsx               # Entry point React
│   └── vite-env.d.ts          # Tipe environment bawaan Vite
├── index.html                 # Template HTML utama
├── package.json               # Daftar dependensi (React, Vite, Tailwind, Font Awesome, React Router)
├── README.md                  # Ringkasan dan panduan instalasi proyek KKN GIAT 17
├── tsconfig.json              # Aturan kompilasi TypeScript
└── vite.config.ts             # Konfigurasi build Vite
```

## Panduan Jalur Pengembangan
1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```
2. **Menjalankan Server Lokal (Dev Mode):**
   ```bash
   npm run dev
   ```
3. **Proses Build Produksi:**
   ```bash
   npm run build
   ```
