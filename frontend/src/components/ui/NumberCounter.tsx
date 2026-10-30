import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export interface NumberCounterProps {
  /** Nilai awal angka counter, default: 0 */
  from?: number;
  /** Nilai target akhir */
  to: number;
  /** Prefix opsional di depan angka (contoh: '+', 'Rp ') */
  prefix?: string;
  /** Suffix opsional di belakang angka (contoh: '%', ' Ha') */
  suffix?: string;
  /** Durasi animasi dalam detik, default: 1.8s */
  duration?: number;
  /** Easing animasi, default: cubic-bezier natural ease-out */
  ease?: [number, number, number, number] | 'easeOut' | 'easeInOut' | 'linear';
  /** Format angka menggunakan toLocaleString('id-ID'), default: true */
  formatLocale?: boolean;
  /** Custom className untuk styling Tailwind */
  className?: string;
}

/**
 * Komponen NumberCounter:
 * Menghitung angka dari nilai awal ke target secara mulus saat masuk viewport (60fps DOM direct update).
 */
export const NumberCounter: React.FC<NumberCounterProps> = ({
  from = 0,
  to,
  prefix = '',
  suffix = '',
  duration = 1.8,
  ease = [0.16, 1, 0.3, 1],
  formatLocale = true,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const node = ref.current;
    const formatNumber = (num: number) => {
      const rounded = Math.round(num);
      return formatLocale ? rounded.toLocaleString('id-ID') : rounded.toString();
    };

    const controls = animate(from, to, {
      duration,
      ease,
      onUpdate(latest) {
        if (node) {
          node.textContent = `${prefix}${formatNumber(latest)}${suffix}`;
        }
      },
      onComplete() {
        if (node) {
          node.textContent = `${prefix}${formatNumber(to)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, from, to, duration, ease, prefix, suffix, formatLocale]);

  const initialText = `${prefix}${formatLocale ? from.toLocaleString('id-ID') : from}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {initialText}
    </span>
  );
};

export default NumberCounter;
