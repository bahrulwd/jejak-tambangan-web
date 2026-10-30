import React from 'react';
import museumData from '../../data/museum.json';

export const MuseumGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {museumData.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col bg-surface-bright rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle/40"
        >
          <div className="w-full h-48 rounded-xl overflow-hidden relative mb-4">
            <img
              alt={item.judul}
              src={item.fotoUrl}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-dark/80 text-text-inverse text-xs font-medium backdrop-blur-sm">
              {item.kategori}
            </div>
          </div>
          <h4 className="font-serif text-lg font-bold text-primary-container">
            {item.judul}
          </h4>
          <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
            {item.deskripsi}
          </p>
        </div>
      ))}
    </div>
  );
};
