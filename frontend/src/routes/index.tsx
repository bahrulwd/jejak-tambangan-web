import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { History } from '../pages/History';
import { Potential } from '../pages/Potential';
import { SotoSawah } from '../pages/SotoSawah';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="sejarah" element={<History />} />
        <Route path="museum" element={<Navigate to="/sejarah" replace />} />
        <Route path="potensi" element={<Potential />} />
        <Route path="umkm" element={<Navigate to="/potensi" replace />} />
        <Route path="soto-sawah" element={<SotoSawah />} />
        <Route path="soto" element={<Navigate to="/soto-sawah" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
