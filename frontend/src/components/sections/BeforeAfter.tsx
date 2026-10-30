import React, { useState } from 'react';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
          Transformasi Wilayah
        </span>
        <h3 className="font-serif text-2xl font-bold text-primary-container mt-1">
          Dahulu & Sekarang (Penyeberangan Tambangan)
        </h3>
      </div>
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl select-none">
        {/* After Image */}
        <img
          alt="Tambangan Masa Kini"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute bottom-4 right-4 bg-primary-container/80 text-text-inverse px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm z-10">
          Sekarang (Modern)
        </span>

        {/* Before Image Clip */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            alt="Tambangan Tempo Dulu"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-nnHDJIAA1dPGHxumogGb9Qame-FNF8TTSO898JGVzWgOsn2PA2aoBTJJTY5nDVC73wwQOoePS5WC03l1xnlphvP5WZKAKCMWfi5QziQ-5wckkjVM_F5N-eJIUesRPKaFwhg80NGCMYxGtBB9piExaIhVI402R6nTFaWlCjoZAh3DTwtlssP_HDpPkYenHCCoKBhqAOkmZHHq0hwYYwYxsW5uk52qI1_VpZ2HPMlAkq2mjrlPuGn"
            className="w-full h-full object-cover filter sepia-[0.3]"
            style={{ width: '100vw', maxWidth: 'none' }}
          />
          <span className="absolute bottom-4 left-4 bg-surface-dark/80 text-text-inverse px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm z-10">
            Dahulu (1892)
          </span>
        </div>

        {/* Slider Handle */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary-container text-primary-container flex items-center justify-center shadow-lg font-bold text-xs">
            ↔
          </div>
        </div>
      </div>
    </div>
  );
};
