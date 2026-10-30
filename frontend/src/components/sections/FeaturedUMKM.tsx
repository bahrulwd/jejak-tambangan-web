import React from 'react';
import umkmData from '../../data/umkm.json';
import { ButtonWhatsApp } from '../ButtonWhatsApp';

export const FeaturedUMKM: React.FC = () => {
  const featured = umkmData[0]; // Keripik Pisang Makmur

  return (
    <div className="bg-surface-bright rounded-3xl p-6 sm:p-10 border border-border-subtle/50 shadow-sm flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md">
        <img
          alt={featured.namaUsaha}
          src={featured.fotoUrl}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <span className="inline-flex px-3 py-1 rounded-full bg-secondary-container text-primary-container text-xs font-semibold uppercase tracking-wider w-max">
          Produk Unggulan Desa
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-container">
          {featured.namaUsaha}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {featured.deskripsi}
        </p>
        <span className="text-lg font-bold text-primary">
          {featured.harga}
        </span>
        <div className="pt-2">
          <ButtonWhatsApp
            nomorWa={featured.nomorWa}
            pesan={`Halo, saya berminat membeli ${featured.namaUsaha} dari website Kelurahan Tambangan.`}
          />
        </div>
      </div>
    </div>
  );
};
