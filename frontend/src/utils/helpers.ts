export const formatRupiah = (amount: number | string): string => {
  if (typeof amount === 'string') return amount;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const createWaLink = (phone: string, message: string): string => {
  const sanitized = phone.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${sanitized}?text=${encoded}`;
};
