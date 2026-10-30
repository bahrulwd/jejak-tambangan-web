export interface PotensiDesa {
  id: string;
  judul: string;
  deskripsi: string;
  fotoUrl: string;
  kategoriTag: string;
}

export interface TopUmkm {
  id: string;
  namaUsaha: string;
  kategori: string;
  deskripsi: string;
  harga: string;
  fotoUrl: string;
  namaPenjual: string;
  nomorWa: string;
  rating?: number;
  ulasanCount?: number;
}
