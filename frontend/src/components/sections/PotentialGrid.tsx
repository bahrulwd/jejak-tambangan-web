import React from 'react';
import potentialData from '../../data/potential.json';

export const PotentialGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {potentialData.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col bg-surface-bright rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle/40"
        >
          <div className="w-full h-52 rounded-xl overflow-hidden relative mb-5">
            <img
              alt={item.judul}
              src={item.fotoUrl}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-light/90 text-text-primary text-xs font-semibold backdrop-blur-sm">
              {item.kategoriTag}
            </div>
          </div>
          <h4 className="font-serif text-xl font-bold text-primary-container">
            {item.judul}
          </h4>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">
            {item.deskripsi}
          </p>
        </div>
      ))}
    </div>
  );
};
