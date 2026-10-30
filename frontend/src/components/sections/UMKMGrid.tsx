import React from 'react';
import umkmData from '../../data/umkm.json';
import { UmkmCard } from '../UmkmCard';

export const UMKMGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {umkmData.map((item) => (
        <UmkmCard key={item.id} data={item} />
      ))}
    </div>
  );
};
