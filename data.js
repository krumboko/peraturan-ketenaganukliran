// ============================================================
// DATA PERATURAN KETENAGANUKLIRAN
// Setiap item memiliki:
//   f = nama file PDF (PERSIS sama dengan di folder dokumen/)
//   t = judul tampilan
//   tag = array tema: 'industri', 'medik', 'instalasi' (boleh lebih dari satu)
// ============================================================

const SECTIONS = [

  // ══════════════════════════════════════════════════════════
  // UNDANG-UNDANG
  // ══════════════════════════════════════════════════════════
  { id:'s1', title:'Undang-Undang', cat:'uu', items:[
    { f:'UU 10 1997 Ketenaganukliran.pdf',
      t:'UU No. 10 Tahun 1997 – Ketenaganukliran', tag:['industri','medik','instalasi'] },
    { f:'UU 11 2020 Cipta Kerja.pdf',
      t:'UU No. 11 Tahun 2020 – Cipta Kerja', tag:['industri','medik','instalasi'] },
    { f:'UU 8 1978 Pengesahan Pencegahan Penyebaran Senjata Nuklir.pdf',
      t:'UU No. 8 Tahun 1978 – Pengesahan Perjanjian Pencegahan Penyebaran Senjata Nuklir (NPT)', tag:['instalasi'] },
    { f:'UU 9 1997 Pengesahan Traktat Kawasan Bebas Senjata Nuklir.pdf',
      t:'UU No. 9 Tahun 1997 – Pengesahan Traktat Kawasan Bebas Senjata Nuklir (SEANWFZ)', tag:['instalasi'] },
    { f:'UU 10 2012 Pengesahan Konvensi Penanggulangan Terorisme Nuklir.pdf',
      t:'UU No. 10 Tahun 2012 – Pengesahan Konvensi Penanggulangan Terorisme Nuklir', tag:['instalasi'] },
    { f:'UU 1 2012 Pengesahan CTBT.pdf',
      t:'UU No. 1 Tahun 2012 – Pengesahan Traktat Pelarangan Menyeluruh Uji Coba Nuklir (CTBT)', tag:['instalasi'] },
  ]},

  // ══════════════════════════════════════════════════════════
  // PERATURAN PEMERINTAH
  // ══════════════════════════════════════════════════════════
  { id:'s2', title:'Peraturan Pemerintah', cat:'pp', items:[
    { f:'PP 45 2023 Keselamatan Radiasi Pengion dan Keamanan ZR.pdf',
      t:'PP No. 45 Tahun 2023 – Keselamatan Radiasi Pengion dan Keamanan Zat Radioaktif', tag:['industri','medik'] },
    { f:'PP 42 2022 Jenis dan Tarif Atas Jenis PNBP.pdf',
      t:'PP No. 42 Tahun 2022 – Tarif dan Jenis PNBP yang Berlaku Pada BAPETEN', tag:['industri','medik','instalasi'] },
    { f:'PP 52 2022 Keselamatan dan Keamanan Pertambangan Bahan Galian Nuklir.pdf',
      t:'PP No. 52 Tahun 2022 – Keselamatan dan Keamanan Pertambangan Bahan Galian Nuklir', tag:['industri'] },
    { f:'PP 58 2015 Keselamatan dan Keamanan dalam Pengangkutan ZR.pdf',
      t:'PP No. 58 Tahun 2015 – Keselamatan dan Keamanan Dalam Pengangkutan Zat Radioaktif', tag:['industri','medik'] },
    { f:'PP 56 2014 Jenis dan Tarif Atas Jenis PNBP.pdf',
      t:'PP No. 56 Tahun 2014 – Jenis dan Tarif PNBP yang Berlaku Pada BAPETEN', tag:['industri','medik','instalasi'] },
    { f:'PP 2 2014 Perizinan IN dan BN.pdf',
      t:'PP No. 2 Tahun 2014 – Perizinan Instalasi Nuklir dan Pemanfaatan Bahan Nuklir', tag:['instalasi'] },
    { f:'PP 61 2012 Pengelolaan Limbah Radioaaktif.pdf',
      t:'PP No. 61 Tahun 2013 – Pengelolaan Limbah Radioaktif', tag:['industri','medik','instalasi'] },
    { f:'PP 54 2012 Keselamatan dan Keamanan Instasi Nuklir.pdf',
      t:'PP No. 54 Tahun 2012 – Keselamatan dan Keamanan Instalasi Nuklir', tag:['instalasi'] },
    { f:'PP 29 2009 Tata Cara Penetuan Jumlah Pembayaran, dan Penyetoran PNBP Terutang.pdf',
      t:'PP No. 29 Tahun 2009 – Tata Cara Penentuan Jumlah, Pembayaran, dan Penyetoran PNBP Terutang', tag:['industri','medik','instalasi'] },
    { f:'PP 46 2009 Batas Pertanggungjawaban Kerugian Nuklir.pdf',
      t:'PP No. 46 Tahun 2009 – Batas Pertanggungjawaban Kerugian Nuklir', tag:['instalasi'] },
    { f:'PP 29 2008 Perizinan Pemanfaatan SRP dan BN.pdf',
      t:'PP No. 29 Tahun 2008 – Perizinan Pemanfaatan Sumber Radiasi Pengion dan Bahan Nuklir', tag:['industri','medik'] },
    { f:'PP 33 2007 Keselamatan Radiasi Pengion dan Keamanan ZR.pdf',
      t:'PP No. 33 Tahun 2007 – Keselamatan Radiasi Pengion dan Keamanan Sumber Radioaktif', tag:['industri','medik'] },
    { f:'PP 43 2006 Perizinan RN.pdf',
      t:'PP No. 43 Tahun 2006 – Perizinan Reaktor Nuklir', tag:['instalasi'] },
    { f:'PP 26 2002 Keselamatan Pengangkutan ZR.pdf',
      t:'PP No. 26 Tahun 2002 – Keselamatan Pengangkutan Zat Radioaktif', tag:['industri','medik'] },
    { f:'PP 27 2002 Pengelolaan Limbah Radioaktif.pdf',
      t:'PP No. 27 Tahun 2002 – Pengelolaan Limbah Radioaktif', tag:['industri','medik','instalasi'] },
    { f:'PP 27 2009 Jenis dan Tarif Atas Jenis PNBP.pdf',
      t:'PP No. 27 Tahun 2009 – Jenis dan Tarif PNBP yang Berlaku Pada BAPETEN', tag:['industri','medik','instalasi'] },
    { f:'PP 5 2021 Penyelenggaraan Perizinan Berusaha Berbasis Risiko.pdf',
      t:'PP No. 5 Tahun 2021 – Penyelenggaraan Perizinan Berusaha Berbasis Risiko', tag:['industri','medik','instalasi'] },
    { f:'PP 28 Tahun 2025 Penyelenggaraan perizinan berusaha.pdf',
      t:'PP No. 28 Tahun 2025 – Penyelenggaraan Perizinan Berusaha', tag:['industri','medik','instalasi'] },
  ]},

  // ══════════════════════════════════════════════════════════
  // PERPRES & KEPPRES
  // ══════════════════════════════════════════════════════════
  { id:'s3', title:'Peraturan Presiden & Keputusan Presiden', cat:'perpres', items:[
    { f:'Perpres 60 2019 Kebijakan dan Strategis Nasional Nuklir.pdf',
      t:'PERPRES No. 60 Tahun 2019 – Kebijakan dan Strategi Nasional Keselamatan Nuklir Dan Radiasi', tag:['industri','medik','instalasi'] },
    { f:'Perpres 74 2012 Pertanggungjawaban Kerugian Nuklir.pdf',
      t:'PERPRES No. 74 Tahun 2012 – Pertanggungjawaban Kerugian Nuklir', tag:['instalasi'] },
    { f:'Perpres 84 2010 Pengesahan JC Spent fuel dan Radioactive waste.pdf',
      t:'PERPRES No. 84 Tahun 2010 – Pengesahan Joint Convention on The Safety of Spent Fuel Management', tag:['instalasi'] },
    { f:'Perpres 46 2009 Pengesahan Perubahan Konvensi Proteksi Fisik Bahan Nuklir.pdf',
      t:'PERPRES No. 46 Tahun 2009 – Pengesahan Perubahan Konvensi Proteksi Fisik Bahan Nuklir', tag:['instalasi'] },
    { f:'Perpres 87 2014 Peraturan Pelaksanaan UU 12 2011 Pembantukan PUU.pdf',
      t:'PERPRES No. 87 Tahun 2014 – Peraturan Pelaksanaan UU No. 12 Tahun 2011', tag:['industri','medik','instalasi'] },
    { f:'Keppres 106 2001 Convention on Nuclear Safety.pdf',
      t:'KEPPRES No. 106 Tahun 2001 – Pengesahan Convention on Nuclear Safety', tag:['instalasi'] },
    { f:'Keppres 80 1993 Amendment IAEA.pdf',
      t:'KEPPRES No. 80 Tahun 1993 – Pengesahan Amendment Article VI Statute of The IAEA', tag:['instalasi'] },
    { f:'Keppres 81 1993 Early Notification Nuclear Accident.pdf',
      t:'KEPPRES No. 81 Tahun 1993 – Pengesahan Convention on Early Notification of A Nuclear Accident', tag:['instalasi'] },
    { f:'Keppres 82 1993 Assistance Nuclear Accident.pdf',
      t:'KEPPRES No. 82 Tahun 1993 – Pengesahan Convention on Assistance In The Case of A Nuclear Accident', tag:['instalasi'] },
    { f:'Keppres 49 1986 Physical Protection Nuclear Material.pdf',
      t:'KEPPRES No. 49 Tahun 1986 – Pengesahan Convention on The Physical Protection of Nuclear Material', tag:['instalasi'] },
  ]},

  // ══════════════════════════════════════════════════════════
  // PERATURAN BAPETEN (PERKA) — 2024
  // ══════════════════════════════════════════════════════════
  { id:'s4a', title:'Peraturan BAPETEN 2024', cat:'perka', items:[
    { f:'Perka 3 2024 Pembatasan Impor Ekspor Barang Konsumen.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2024 – Pembatasan Impor dan Ekspor Barang Konsumen ZR dan PRP', tag:['industri'] },
    { f:'Perka 4 2024 Izin Pekerja Petugas Fasilitas Radiasi.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2024 – Izin Pekerja Petugas pada Fasilitas Radiasi', tag:['industri','medik'] },
    { f:'Perka 5 2024 Keamanan Zat Radioaktif.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2024 – Keamanan Zat Radioaktif', tag:['industri','medik'] },
  ]},

  // PERKA 2022
  { id:'s4b', title:'Peraturan BAPETEN 2022', cat:'perka', items:[
    { f:'Perka 1 2022 Perizinan Berusaha Berbasis Risiko.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2022 – Penatalaksanaan Perizinan Berusaha Berbasis Risiko Sektor Ketenaganukliran', tag:['industri','medik','instalasi'] },
    { f:'Perka 2 2022 Perubahan Perka 2 2018 Uji Kesesuaian Pesawat Sinar-X.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2022 – Perubahan Perka No. 2 Tahun 2018 Tentang Uji Kesesuaian Pesawat Sinar-X', tag:['medik','industri'] },
    { f:'Perka 3 2022 Keselamatan Desain Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2022 – Keselamatan Desain Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 4 2022 Laboratorium Uji Bungkusan ZR.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2022 – Laboratorium Uji Bungkusan Zat Radioaktif', tag:['industri'] },
    { f:'Perka 5 2022 Manajemen Penuaan Reaktor Nuklir.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2022 – Manajemen Penuaan Reaktor Nuklir', tag:['instalasi'] },
  ]},

  // PERKA 2021
  { id:'s4c', title:'Peraturan BAPETEN 2021', cat:'perka', items:[
    { f:'Perka 3 2021 Standar Kegiatan Usaha dan Standar Produk.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2021 – Standar Kegiatan Usaha dan Standar Produk Pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2020
  { id:'s4d', title:'Peraturan BAPETEN 2020', cat:'perka', items:[
    { f:'Perka 1 2020 Aspek Radiasi Desain Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2020 – Aspek Radiasi dalam Desain Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 3 2020 Keselamatan Iradiator.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2020 – Keselamatan Radiasi Dalam Penggunaan Iradiator untuk Iradiasi', tag:['industri'] },
    { f:'Perka 4 2020 Keselamatan Radiasi Pesawat Sinar-X Radiologi.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2020 – Keselamatan Radiasi Pada Penggunaan Pesawat Sinar-X Dalam Radiologi Diagnostik dan Intervensional', tag:['medik'] },
    { f:'Perka 5 2020 Justifikasi Pemanfaatan SRP.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2020 – Justifikasi Pemanfaatan Sumber Radiasi Pengion', tag:['industri','medik'] },
    { f:'Perka 6 2020 Keselamatan Radiasi Produksi Radioisotop.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2020 – Keselamatan Radiasi dalam Produksi Radioisotop untuk Radiofarmaka', tag:['medik'] },
    { f:'Perka 7 2020 Keselamatan Pengangkutan ZR.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2020 – Ketentuan Keselamatan dan Tata Laksana Pengangkutan Zat Radioaktif', tag:['industri','medik'] },
    { f:'Perka 11 2020 Laporan Analisis Keselamatan Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 11 Tahun 2020 – Penyusunan Laporan Analisis Keselamatan Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 12 2020 Klasifikasi Struktur Sistem Komponen IN.pdf',
      t:'Perka BAPETEN No. 12 Tahun 2020 – Klasifikasi Struktur, Sistem, dan Komponen Instalasi Nuklir', tag:['instalasi'] },
  ]},

  // PERKA 2019
  { id:'s4e', title:'Peraturan BAPETEN 2019', cat:'perka', items:[
    { f:'Perka 2 2019 Keselamatan Komisioning Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2019 – Keselamatan Komisioning Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 4 2019 Evaluasi Tapak Dispersi ZR.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2019 – Evaluasi Tapak Instalasi Nuklir untuk Aspek Dispersi Zat Radioaktif Di Udara dan Air', tag:['instalasi'] },
    { f:'Perka 5 2019 Penyusunan Laporan Analisis Keselamatan.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2019 – Penyusunan Laporan Analisis Keselamatan', tag:['instalasi'] },
    { f:'Perka 6 2019 Evaluasi Tapak Kejadian Eksternal.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2019 – Evaluasi Tapak Instalasi Nuklir untuk Aspek Kejadian Eksternal Akibat Ulah Manusia', tag:['instalasi'] },
    { f:'Perka 7 2019 Izin Bekerja Petugas IN dan BN.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2019 – Izin Bekerja Petugas Instalasi Nuklir dan Bahan Nuklir', tag:['instalasi'] },
    { f:'Perka 8 2019 Keselamatan Operasi Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2019 – Keselamatan Operasi Reaktor Nondaya', tag:['instalasi'] },
  ]},

  // PERKA 2018
  { id:'s4f', title:'Peraturan BAPETEN 2018', cat:'perka', items:[
    { f:'Perka 2 2018 Uji Kesesuaian Pesawat Sinar-X Radiologi.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2018 – Uji Kesesuaian Pesawat Sinar-X Radiologi Diagnostik dan Intervensional', tag:['medik','industri'] },
    { f:'Perka 4 2018 Keselamatan Evaluasi Tapak IN.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2018 – Ketentuan Keselamatan Evaluasi Tapak Instalasi Nuklir', tag:['instalasi'] },
    { f:'Perka 5 2018 Pelayanan Perizinan Elektronik.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2018 – Pelayanan Perizinan Pemanfaatan Tenaga Nuklir Secara Elektronik', tag:['industri','medik','instalasi'] },
    { f:'Perka 6 2018 Perizinan Berusaha Terintegrasi Elektronik.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2018 – Persyaratan Tata Cara Perizinan Berusaha Terintegrasi Secara Elektronik Sektor Ketenaganukliran', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2017
  { id:'s4g', title:'Peraturan BAPETEN 2017', cat:'perka', items:[
    { f:'Perka 2 2017 Larangan Pembatasan Impor Ekspor.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2017 – Larangan dan Pembatasan Impor dan Ekspor Barang Konsumen, SRP, dan Bahan Nuklir', tag:['industri'] },
    { f:'Perka 7 2017 Perubahan Perka 7 2013 Nilai Batas Radioaktivitas.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2017 – Perubahan Atas Perka No. 7 Tahun 2013 Tentang Nilai Batas Radioaktivitas Lingkungan', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2016
  { id:'s4h', title:'Peraturan BAPETEN 2016', cat:'perka', items:[
    { f:'Perka 5 2016 Keselamatan Radiasi Produksi Barang Konsumen.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2016 – Keselamatan Radiasi Dalam Produksi Barang Konsumen', tag:['industri'] },
    { f:'Perka 8 2016 Pengelolaan Limbah Radioaktif Tingkat Rendah Sedang.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2016 – Pengelolaan Limbah Radioaktif Tingkat Rendah dan Tingkat Sedang', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2015
  { id:'s4i', title:'Peraturan BAPETEN 2015', cat:'perka', items:[
    { f:'Perka 1 2015 Tanggap Darurat BAPETEN.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2015 – Penatalaksanaan Tanggap Darurat Badan Pengawas Tenaga Nuklir', tag:['industri','medik','instalasi'] },
    { f:'Perka 2 2015 Verifikasi Penilaian Keselamatan Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2015 – Verifikasi dan Penilaian Keselamatan Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 5 2015 Evaluasi Tapak Kegunungapian.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2015 – Evaluasi Tapak Instalasi Nuklir untuk Aspek Kegunungapian', tag:['instalasi'] },
    { f:'Perka 6 2015 Keamanan Sumber Radioaktif.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2015 – Keamanan Sumber Radioaktif', tag:['industri','medik'] },
    { f:'Perka 9 2015 Perawatan Instalasi Nuklir Non Reaktor.pdf',
      t:'Perka BAPETEN No. 9 Tahun 2015 – Perawatan Instalasi Nuklir Non Reaktor', tag:['instalasi'] },
    { f:'Perka 11 2015 Laboratorium Dosimetri Eksternal.pdf',
      t:'Perka BAPETEN No. 11 Tahun 2015 – Laboratorium Dosimetri Eksternal', tag:['industri','medik'] },
  ]},

  // PERKA 2014
  { id:'s4j', title:'Peraturan BAPETEN 2014', cat:'perka', items:[
    { f:'Perka 2 2014 Manajemen Teras Bahan Bakar Nuklir Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2014 – Manajemen Teras serta Penanganan dan Penyimpanan Bahan Bakar Nuklir Pada Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 3 2014 Penyusunan Dokumen AMDAL Ketenaganukliran.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2014 – Penyusunan Dokumen AMDAL Bidang Ketenaganukliran', tag:['instalasi'] },
    { f:'Perka 4 2014 Batasan dan Kondisi Operasi INNR.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2014 – Batasan dan Kondisi Operasi Instalasi Nuklir Nonreaktor', tag:['instalasi'] },
    { f:'Perka 6 2014 Evaluasi Tapak Meteorologi Hidrologi.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2014 – Evaluasi Tapak Instalasi Nuklir untuk Aspek Meteorologi dan Hidrologi', tag:['instalasi'] },
    { f:'Perka 8 2014 Perubahan Perka 7 2009 Radiografi Industri.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2014 – Perubahan Atas Perka No. 7 Tahun 2009 Tentang Keselamatan Radiasi Dalam Penggunaan Peralatan Radiografi Industri', tag:['industri'] },
    { f:'Perka 10 2014 Penatausahaan PNBP BAPETEN.pdf',
      t:'Perka BAPETEN No. 10 Tahun 2014 – Penatausahaan PNBP Pada BAPETEN', tag:['industri','medik','instalasi'] },
    { f:'Perka 15 2014 Keselamatan Radiasi Produksi Pesawat Sinar-X.pdf',
      t:'Perka BAPETEN No. 15 Tahun 2014 – Keselamatan Radiasi Dalam Produksi Pesawat Sinar-X Radiologi Diagnostik dan Intervensional', tag:['medik','industri'] },
    { f:'Perka 16 2014 Surat Izin Bekerja Petugas Tertentu.pdf',
      t:'Perka BAPETEN No. 16 Tahun 2014 – Surat Izin Bekerja Petugas Tertentu Yang Bekerja Di Instalasi Yang Memanfaatkan Sumber Radiasi Pengion', tag:['industri','medik'] },
  ]},

  // PERKA 2013
  { id:'s4k', title:'Peraturan BAPETEN 2013', cat:'perka', items:[
    { f:'Perka 1 2013 Perubahan Perka 3 2012 Penatausahaan PNBP.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2013 – Perubahan Atas Perka No. 3 Tahun 2012 Tentang Penatausahaan PNBP', tag:['industri','medik','instalasi'] },
    { f:'Perka 3 2013 Keselamatan Radiasi Radioterapi.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2013 – Keselamatan Radiasi Dalam Penggunaan Radioterapi', tag:['medik'] },
    { f:'Perka 4 2013 Proteksi dan Keselamatan Radiasi.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2013 – Proteksi dan Keselamatan Radiasi Dalam Pemanfaatan Tenaga Nuklir', tag:['industri','medik','instalasi'] },
    { f:'Perka 6 2013 Izin Bekerja Petugas IN dan BN.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2013 – Izin Bekerja Petugas Instalasi dan Bahan Nuklir', tag:['instalasi'] },
    { f:'Perka 7 2013 Nilai Batas Radioaktivitas Lingkungan.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2013 – Nilai Batas Radioaktivitas Lingkungan', tag:['industri','medik','instalasi'] },
    { f:'Perka 8 2013 Evaluasi Tapak Kegempaan.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2013 – Evaluasi Tapak Instalasi Nuklir untuk Aspek Kegempaan', tag:['instalasi'] },
    { f:'Perka 9 2013 Batasan Kondisi Operasi Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 9 Tahun 2013 – Batasan dan Kondisi Operasi Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 16 2013 Keselamatan Radiasi Penyimpanan TENORM.pdf',
      t:'Perka BAPETEN No. 16 Tahun 2013 – Keselamatan Radiasi Dalam Penyimpanan TENORM', tag:['industri'] },
    { f:'Perka 17 2013 Keselamatan Radiasi Impor Ekspor Barang Konsumen.pdf',
      t:'Perka BAPETEN No. 17 Tahun 2013 – Keselamatan Radiasi Dalam Kegiatan Impor, Ekspor, dan Pengalihan Barang Konsumen', tag:['industri'] },
  ]},

  // PERKA 2012
  { id:'s4l', title:'Peraturan BAPETEN 2012', cat:'perka', items:[
    { f:'Perka 1 2012 Desain Proteksi Kebakaran Ledakan Internal Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2012 – Ketentuan Desain Sistem Proteksi Terhadap Kebakaran dan Ledakan Internal Pada Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 2 2012 Desain Proteksi Bahaya Internal Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2012 – Desain Proteksi Terhadap Bahaya Internal Selain Kebakaran dan Ledakan Pada Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 3 2012 Penatausahaan PNBP BAPETEN.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2012 – Penatausahaan PNBP Pada BAPETEN', tag:['industri','medik','instalasi'] },
    { f:'Perka 5 2012 Keselamatan Utilisasi Modifikasi Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2012 – Keselamatan Dalam Utilisasi dan Modifikasi Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 6 2012 Desain Sistem Berbasis Komputer Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2012 – Desain Sistem Yang Penting untuk Keselamatan Berbasis Komputer Pada Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 7 2012 Manajemen Penuaan INNR.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2012 – Manajemen Penuaan Instalasi Nuklir Nonreaktor', tag:['instalasi'] },
    { f:'Perka 8 2012 Penyusunan Laporan Analisis Keselamatan Reaktor Non Daya.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2012 – Penyusunan Laporan Analisis Keselamatan Reaktor Non Daya', tag:['instalasi'] },
    { f:'Perka 12 2012 Sistem Elektronik INSW.pdf',
      t:'Perka BAPETEN No. 12 Tahun 2012 – Pemberlakuan Sistem Elektronik Dalam Kerangka INSW di Lingkungan BAPETEN', tag:['industri','medik'] },
    { f:'Perka 16 2012 Tingkat Klierens.pdf',
      t:'Perka BAPETEN No. 16 Tahun 2012 – Tingkat Klierens', tag:['industri','medik','instalasi'] },
    { f:'Perka 17 2012 Keselamatan Radiasi Kedokteran Nuklir.pdf',
      t:'Perka BAPETEN No. 17 Tahun 2012 – Keselamatan Radiasi Dalam Kedokteran Nuklir', tag:['medik'] },
  ]},

  // PERKA 2011
  { id:'s4m', title:'Peraturan BAPETEN 2011', cat:'perka', items:[
    { f:'Perka 1 2011 Keselamatan Desain Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2011 – Ketentuan Keselamatan Desain Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 2 2011 Keselamatan Operasi Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2011 – Ketentuan Keselamatan Operasi Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 3 2011 Keselamatan Desain Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2011 – Ketentuan Keselamatan Desain Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 4 2011 Sistem Seifgard.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2011 – Sistem Seifgard', tag:['instalasi'] },
    { f:'Perka 5 2011 Ketentuan Perawatan Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2011 – Ketentuan Perawatan Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 6 2011 Dekomisioning INNR.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2011 – Dekomisioning Instalasi Nuklir Non Reaktor', tag:['instalasi'] },
    { f:'Perka 7 2011 Desain Sistem Catu Daya Darurat Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2011 – Desain Sistem Catu Daya Darurat untuk Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 8 2011 Keselamatan Radiasi Pesawat Sinar-X Radiologi.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2011 – Keselamatan Radiasi Dalam Penggunaan Pesawat Sinar-X Radiologi Diagnostik dan Intervensional', tag:['medik'] },
    { f:'Perka 9 2011 Uji Kesesuaian Pesawat Sinar-X.pdf',
      t:'Perka BAPETEN No. 9 Tahun 2011 – Uji Kesesuaian Pesawat Sinar-X Radiologi Diagnostik dan Intervensional', tag:['medik'] },
    { f:'Perka 10 2011 Sistem Manajemen BAPETEN.pdf',
      t:'Perka BAPETEN No. 10 Tahun 2011 – Sistem Manajemen Badan Pengawas Tenaga Nuklir', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2010
  { id:'s4n', title:'Peraturan BAPETEN 2010', cat:'perka', items:[
    { f:'Perka 1 2010 Kesiapsiagaan Penanggulangan Kedaruratan Nuklir.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2010 – Kesiapsiagaan dan Penanggulangan Kedaruratan Nuklir', tag:['industri','medik','instalasi'] },
    { f:'Perka 3 2010 Desain Sistem Penanganan Bahan Bakar Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2010 – Desain Sistem Penanganan dan Penyimpanan Bahan Bakar Nuklir untuk Reaktor Daya', tag:['instalasi'] },
    { f:'Perka 4 2010 Sistem Manajemen Fasilitas Kegiatan.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2010 – Sistem Manajemen Fasilitas dan Kegiatan Pemanfaatan Tenaga Nuklir', tag:['industri','medik','instalasi'] },
    { f:'Perka 6 2010 Pemantauan Kesehatan Pekerja Radiasi.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2010 – Pemantauan Kesehatan untuk Pekerja Radiasi', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2009
  { id:'s4o', title:'Peraturan BAPETEN 2009', cat:'perka', items:[
    { f:'Perka 1 2009 Sistem Proteksi Fisik IN dan BN.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2009 – Ketentuan Sistem Proteksi Fisik Instalasi dan Bahan Nuklir', tag:['instalasi'] },
    { f:'Perka 2 2009 Penyusunan Daftar Informasi Desain.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2009 – Penyusunan Daftar Informasi Desain', tag:['instalasi'] },
    { f:'Perka 4 2009 Dekomisioning Reaktor Nuklir.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2009 – Dekomisioning Reaktor Nuklir', tag:['instalasi'] },
    { f:'Perka 5 2009 Keselamatan Radiasi Well Logging.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2009 – Keselamatan Radiasi Dalam Penggunaan ZR untuk Well Logging', tag:['industri'] },
    { f:'Perka 6 2009 Keselamatan Radiasi Gauging.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2009 – Keselamatan Radiasi Dalam Penggunaan ZR dan Pesawat Sinar-X untuk Peralatan Gauging', tag:['industri'] },
    { f:'Perka 7 2009 Keselamatan Radiasi Radiografi Industri.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2009 – Keselamatan Radiasi Dalam Penggunaan Peralatan Radiografi Industri', tag:['industri'] },
    { f:'Perka 9 2009 Intervensi Paparan TENORM.pdf',
      t:'Perka BAPETEN No. 9 Tahun 2009 – Intervensi Terhadap Paparan Yang Berasal Dari TENORM', tag:['industri'] },
  ]},

  // PERKA 2008
  { id:'s4p', title:'Peraturan BAPETEN 2008', cat:'perka', items:[
    { f:'Perka 1 2008 Evaluasi Tapak Reaktor Daya Kegempaan.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2008 – Evaluasi Tapak Reaktor Daya untuk Aspek Kegempaan', tag:['instalasi'] },
    { f:'Perka 2 2008 Evaluasi Tapak Reaktor Daya Kegunungapian.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2008 – Evaluasi Tapak Reaktor Daya untuk Aspek Kegunungapian', tag:['instalasi'] },
    { f:'Perka 3 2008 Evaluasi Tapak Dispersi ZR Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2008 – Evaluasi Tapak Reaktor Daya untuk Aspek Penentuan Dispersi Zat Radioaktif Di Udara dan Air', tag:['instalasi'] },
    { f:'Perka 4 2008 Evaluasi Tapak Geoteknik Pondasi Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 4 Tahun 2008 – Evaluasi Tapak Reaktor Daya untuk Aspek Geoteknik dan Pondasi', tag:['instalasi'] },
    { f:'Perka 5 2008 Evaluasi Tapak Meteorologi Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2008 – Pedoman Evaluasi Tapak Reaktor Daya untuk Aspek Meteorologi', tag:['instalasi'] },
    { f:'Perka 6 2008 Evaluasi Tapak Kejadian Eksternal Reaktor Daya.pdf',
      t:'Perka BAPETEN No. 6 Tahun 2008 – Evaluasi Tapak Reaktor Daya untuk Aspek Kejadian Eksternal Akibat Ulah Manusia', tag:['instalasi'] },
    { f:'Perka 8 2008 Keselamatan Manajemen Penuaan Reaktor Nondaya.pdf',
      t:'Perka BAPETEN No. 8 Tahun 2008 – Ketentuan Keselamatan Manajemen Penuaan Reaktor Nondaya', tag:['instalasi'] },
    { f:'Perka 9 2008 Penyusunan Deklarasi Protokol Tambahan.pdf',
      t:'Perka BAPETEN No. 9 Tahun 2008 – Penyusunan dan Format Deklarasi Dalam Pelaksanaan Protokol Tambahan', tag:['instalasi'] },
    { f:'Perka 10 2008 Izin Bekerja Petugas IN dan BN.pdf',
      t:'Perka BAPETEN No. 10 Tahun 2008 – Izin Bekerja Petugas Instalasi dan Bahan Nuklir', tag:['instalasi'] },
    { f:'Perka 15 2008 Persyaratan SIB Petugas Tertentu.pdf',
      t:'Perka BAPETEN No. 15 Tahun 2008 – Persyaratan untuk Memperoleh Surat Izin Bekerja Petugas Tertentu', tag:['industri','medik'] },
  ]},

  // PERKA 2007
  { id:'s4q', title:'Peraturan BAPETEN 2007', cat:'perka', items:[
    { f:'Perka 5 2007 Keselamatan Evaluasi Tapak Reaktor Nuklir.pdf',
      t:'Perka BAPETEN No. 5 Tahun 2007 – Ketentuan Keselamatan Evaluasi Tapak Reaktor Nuklir', tag:['instalasi'] },
    { f:'Perka 7 2007 Keamanan Sumber Radioaktif.pdf',
      t:'Perka BAPETEN No. 7 Tahun 2007 – Keamanan Sumber Radioaktif', tag:['industri','medik'] },
    { f:'Perka 11 2007 Keselamatan INNR.pdf',
      t:'Perka BAPETEN No. 11 Tahun 2007 – Ketentuan Keselamatan Instalasi Nuklir Non Reaktor', tag:['instalasi'] },
    { f:'Perka 14 2007 Satuan Tanggap Darurat.pdf',
      t:'Perka BAPETEN No. 14 Tahun 2007 – Satuan Tanggap Darurat', tag:['industri','medik','instalasi'] },
  ]},

  // PERKA 2006
  { id:'s4r', title:'Peraturan BAPETEN 2006', cat:'perka', items:[
    { f:'Perka 1 2006 Laboratorium Dosimetri Kalibrasi.pdf',
      t:'Perka BAPETEN No. 1 Tahun 2006 – Laboratorium Dosimetri, Kalibrasi Alat Ukur Radiasi dan Keluaran Sumber Radiasi Terapi', tag:['medik','industri'] },
    { f:'Perka 3 2006 Perizinan INNR.pdf',
      t:'Perka BAPETEN No. 3 Tahun 2006 – Perizinan Instalasi Nuklir Non Reaktor', tag:['instalasi'] },
    { f:'Perka 9 2006 Pelaksanaan Protokol Tambahan.pdf',
      t:'Perka BAPETEN No. 9 Tahun 2006 – Pelaksanaan Protokol Tambahan Pada Sistem Pertanggungjawaban dan Pengendalian Bahan Nuklir', tag:['instalasi'] },
    { f:'Perka 10 2006 Pedoman LAK INNR.pdf',
      t:'Perka BAPETEN No. 10 Tahun 2006 – Pedoman Penyusunan Laporan Analisis Keselamatan Instalasi Nuklir Nonreaktor', tag:['instalasi'] },
  ]},

  // PERKA 2005
  { id:'s4s', title:'Peraturan BAPETEN 2005', cat:'perka', items:[
    { f:'Perka 2 2005 Sistem Pertanggungjawaban Pengendalian BN.pdf',
      t:'Perka BAPETEN No. 2 Tahun 2005 – Sistem Pertanggungjawaban dan Pengendalian Bahan Nuklir', tag:['instalasi'] },
  ]},

  // ══════════════════════════════════════════════════════════
  // KEPUTUSAN KEPALA BAPETEN
  // ══════════════════════════════════════════════════════════
  { id:'s5', title:'Keputusan Kepala BAPETEN', cat:'kepka', items:[
    { f:'Kepka 01-P 2003 Pedoman Dosis Pasien Radiodiagnostik.pdf',
      t:'Kepka BAPETEN No. 01-P/Ka-BAPETEN/I-03 – Pedoman Dosis Pasien Radiodiagnostik', tag:['medik'] },
    { f:'Kepka 02-P 2003 Sistem Pelayanan Pemantauan Dosis Eksterna.pdf',
      t:'Kepka BAPETEN No. 02-P/Ka-BAPETEN/I-03 – Sistem Pelayanan Pemantauan Dosis Eksterna Perorangan', tag:['industri','medik'] },
    { f:'Kepka 03-P 2003 Persyaratan Laboratorium Uji Bungkusan ZR.pdf',
      t:'Kepka BAPETEN No. 03-P/Ka-BAPETEN/I-03 – Persyaratan Laboratorium Uji Bungkusan Zat Radioaktif Tipe A dan Tipe B', tag:['industri'] },
    { f:'Kepka 04-P 2003 Pedoman Pelatihan Operator Supervisor Reaktor.pdf',
      t:'Kepka BAPETEN No. 04-P/Ka-BAPETEN/I-03 – Pedoman Pelatihan Operator dan Supervisor Reaktor Nuklir', tag:['instalasi'] },
    { f:'Kepka 05-P 2003 Pedoman Rencana Penanggulangan Kedaruratan.pdf',
      t:'Kepka BAPETEN No. 05-P/Ka-BAPETEN/I-03 – Pedoman Rencana Penanggulangan Keadaan Darurat', tag:['industri','medik','instalasi'] },
    { f:'Kepka 21 2002 Program Jaminan Kualitas Instalasi Radioterapi.pdf',
      t:'Kepka BAPETEN No. 21/Ka-BAPETEN/XII-02 – Program Jaminan Kualitas Instalasi Radioterapi', tag:['medik'] },
    { f:'Kepka 05-P 2000 Pedoman Keselamatan Pengangkutan ZR.pdf',
      t:'Kepka BAPETEN No. 05-P/Ka-BAPETEN/VII-00 – Pedoman Persyaratan untuk Keselamatan Pengangkutan Zat Radioaktif', tag:['industri','medik'] },
    { f:'Kepka 06-P 2000 Pedoman LAK Reaktor Penelitian.pdf',
      t:'Kepka BAPETEN No. 06-P/Ka-Bapeten/XI-00 – Pedoman Pembuatan Laporan Analisis Keselamatan Reaktor Penelitian', tag:['instalasi'] },
    { f:'Kepka 01 1999 Keselamatan Kerja Terhadap Radiasi.pdf',
      t:'Kepka BAPETEN No. 01/Ka-BAPETEN/V-99 – Ketentuan Keselamatan Kerja Terhadap Radiasi', tag:['industri','medik','instalasi'] },
    { f:'Kepka 01-P 1999 Pedoman Penentuan Tapak Reaktor Nuklir.pdf',
      t:'Kepka BAPETEN No. 01-P/Ka-BAPETEN/VI-99 – Pedoman Penentuan Tapak Reaktor Nuklir', tag:['instalasi'] },
    { f:'Kepka 02 1999 Baku Tingkat Radioaktivitas Lingkungan.pdf',
      t:'Kepka BAPETEN No. 02/Ka-BAPETEN/V-99 – Baku Tingkat Radioaktivitas Di Lingkungan', tag:['industri','medik','instalasi'] },
    { f:'Kepka 03 1999 Keselamatan Pengelolaan Limbah Radioaktif.pdf',
      t:'Kepka BAPETEN No. 03/Ka-BAPETEN/V-99 – Ketentuan Keselamatan untuk Pengelolaan Limbah Radioaktif', tag:['industri','medik','instalasi'] },
    { f:'Kepka 04 1999 Keselamatan Pengangkutan ZR.pdf',
      t:'Kepka BAPETEN No. 04/Ka-BAPETEN/V-99 – Ketentuan Keselamatan untuk Pengangkutan Zat Radioaktif', tag:['industri','medik'] },
    { f:'Kepka 04-P 1999 Pedoman AMDAL Instalasi Nuklir.pdf',
      t:'Kepka BAPETEN No. 04-P/Ka-BAPETEN/VI-99 – Pedoman Teknis Penyusunan AMDAL Rencana Pembangunan dan Pengoperasian Instalasi Nuklir', tag:['instalasi'] },
    { f:'Kepka 05 1999 Keselamatan Desain Reaktor Penelitian.pdf',
      t:'Kepka BAPETEN No. 05/Ka-Bapeten/V-99 – Ketentuan Keselamatan Desain Reaktor Penelitian', tag:['instalasi'] },
    { f:'Kepka 06 1999 Pembangunan Operasi Reaktor Nuklir.pdf',
      t:'Kepka BAPETEN No. 06/Ka-BAPETEN/V-99 – Pembangunan dan Pengoperasian Reaktor Nuklir', tag:['instalasi'] },
    { f:'Kepka 07 1999 Jaminan Kualitas Instalasi Nuklir.pdf',
      t:'Kepka BAPETEN No. 07/Ka-BAPETEN/V-99 – Jaminan Kualitas Instalasi Nuklir', tag:['instalasi'] },
    { f:'Kepka 10 1999 Keselamatan Operasi Reaktor Penelitian.pdf',
      t:'Kepka BAPETEN No. 10/Ka-BAPETEN/VI-99 – Ketentuan Keselamatan Operasi Reaktor Penelitian', tag:['instalasi'] },
    { f:'Kepka 11 1999 Izin Konstruksi Operasi Iradiator.pdf',
      t:'Kepka BAPETEN No. 11/Ka-BAPETEN/VI-99 – Izin Konstruksi dan Operasi Iradiator', tag:['industri'] },
    { f:'Kepka 12 1999 Keselamatan Kerja Penambangan Bahan Galian Radioaktif.pdf',
      t:'Kepka BAPETEN No. 12/Ka-BAPETEN/VI-99 – Ketentuan Keselamatan Kerja Penambangan dan Pengolahan Bahan Galian Radioaktif', tag:['industri'] },
    { f:'Kepka 14 1999 Keselamatan Pabrik Kaos Lampu.pdf',
      t:'Kepka BAPETEN No. 14/Ka-BAPETEN/VI-99 – Ketentuan Keselamatan Pabrik Kaos Lampu', tag:['industri'] },
  ]},

];

// ============================================================
// TAG TEMATIK — digunakan oleh filter tab di index.html
// Jangan ubah nama variabel ini
// ============================================================
const TEMATIC_TAGS = ['industri', 'medik', 'instalasi'];
