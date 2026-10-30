import React from 'react';
import { TopUmkm } from '../types';
import { ButtonWhatsApp } from './ButtonWhatsApp';

interface UmkmCardProps {
  data: TopUmkm;
}

export const UmkmCard: React.FC<UmkmCardProps> = ({ data }) => {
  const defaultPesan = `Halo ${data.namaPenjual}, saya tertarik dengan ${data.namaUsaha} yang ada di Web Desa Tambangan.`;

  return (
    <div className="p-5 rounded-2xl bg-surface-light hover:bg-surface-container-low border border-border-subtle/50 transition-all duration-300 flex flex-col justify-between group/prod shadow-sm hover:shadow-md">
      <div>
        {/* Product Image Header */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container mb-4">
          <img
            src={data.fotoUrl || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'}
            alt={data.namaUsaha}
            className="w-full h-full object-cover group-hover/prod:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-sans text-xs font-bold shadow-sm">
            {data.kategori}
          </span>
        </div>

        {/* Rating and Seller */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1 text-secondary">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="font-sans text-xs font-bold text-text-primary">
              {data.rating ?? 4.9}
            </span>
            <span className="text-text-secondary text-[11px]">
              ({data.ulasanCount ?? 50}+ ulasan)
            </span>
          </div>
          <span className="text-text-secondary text-xs font-medium truncate">
            {data.namaPenjual}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-sans text-lg font-bold text-text-primary mb-1 tracking-tight">
          {data.namaUsaha}
        </h3>
        <p className="font-sans text-sm text-text-secondary line-clamp-2 mb-4">
          {data.deskripsi}
        </p>
      </div>

      {/* Footer: Price & WA CTA */}
      <div className="pt-3 border-t border-border-subtle flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary text-xs">Harga Warga</span>
          <span className="font-sans text-base font-bold text-primary">
            {data.harga}
          </span>
        </div>
        <ButtonWhatsApp
          nomorWa={data.nomorWa}
          pesan={defaultPesan}
          className="w-full"
          label="Hubungi Penjual (WA)"
        />
      </div>
    </div>
  );
};

export default UmkmCard;
