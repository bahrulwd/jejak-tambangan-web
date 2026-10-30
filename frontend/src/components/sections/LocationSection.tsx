import React from 'react';

export const LocationSection: React.FC = () => {
  return (
    <div className="w-full bg-surface-container rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-border-subtle/50">
      <div className="flex flex-col gap-3 max-w-xl">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">
          Lokasi & Kontak Sekretariat
        </span>
        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-container">
          Kantor Kelurahan Tambangan
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          Jl. Raya Tambangan No. 01, Kecamatan Mijen, Kota Semarang, Jawa Tengah 50215
        </p>
        <div className="flex flex-col gap-1 text-xs text-text-secondary font-medium">
          <span>Surel: kontak@desatambangan.id</span>
          <span>Telepon: (024) 765-4321</span>
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <a
          href="https://maps.google.com/?q=Kelurahan+Tambangan+Mijen+Semarang"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-text-inverse px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md"
        >
          <span className="material-symbols-outlined text-[20px]">location_on</span>
          <span>Buka di Google Maps</span>
        </a>
      </div>
    </div>
  );
};
