import React from 'react';
import timelineData from '../../data/timeline.json';

export const Timeline: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className="relative border-l-2 border-secondary-container/60 ml-4 pl-6 space-y-8">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-secondary-container border-2 border-primary-container group-hover:scale-125 transition-transform"></div>
            <div className="bg-surface-light p-5 rounded-2xl shadow-sm border border-border-subtle/40 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                {item.kategori} • {item.tahun}
              </span>
              <p className="text-sm text-text-primary mt-1 leading-relaxed font-medium">
                {item.peristiwa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
