// ============================================================
// DATA PERATURAN KETENAGANUKLIRAN
// Edit file ini untuk menambah/mengubah daftar peraturan
// Nama file (f) harus PERSIS sama dengan nama file di folder dokumen/
// ============================================================

const SECTIONS = [

  { id:'s1', title:'Undang-Undang', cat:'uu', items:[
    { f:'UU 10 1997 Ketenaganukliran.pdf',                                t:'UU No. 10 Tahun 1997 – Ketenaganukliran' },
    { f:'UU 11 2020 Cipta Kerja.pdf',                                     t:'UU No. 11 Tahun 2020 – Cipta Kerja' },
    { f:'UU 8 1978 Pengesahan Pencegahan Penyebaran Senjata Nuklir.pdf',  t:'UU No. 8 Tahun 1978 – Pengesahan Perjanjian Pencegahan Penyebaran Senjata Nuklir (NPT)' },
    { f:'UU 9 1997 Pengesahan Traktat Kawasan Bebas Senjata Nuklir.pdf',  t:'UU No. 9 Tahun 1997 – Pengesahan Traktat Kawasan Bebas Senjata Nuklir (SEANWFZ)' },
    { f:'UU 10 2012 Pengesahan Konvensi Penanggulangan Terorisme Nuklir.pdf', t:'UU No. 10 Tahun 2012 – Pengesahan Konvensi Penanggulangan Terorisme Nuklir' },
  ]},

  { id:'s2', title:'Peraturan Pemerintah', cat:'pp', items:[
    { f:'PP 2 2014 Perizinan IN dan BN.pdf',                              t:'PP No. 2 Tahun 2014 – Perizinan Instalasi Nuklir dan Pemanfaatan Bahan Nuklir' },
    { f:'PP 5 2021 Penyelenggaraan Perizinan Berusaha Berbasis Risiko.pdf', t:'PP No. 5 Tahun 2021 – Penyelenggaraan Perizinan Berusaha Berbasis Risiko' },
    { f:'PP 26 2002 Keselamatan Pengangkutan ZR.pdf',                     t:'PP No. 26 Tahun 2002 – Keselamatan Pengangkutan Zat Radioaktif' },
    { f:'PP 27 2002 Pengelolaan Limbah Radioaktif.pdf',                   t:'PP No. 27 Tahun 2002 – Pengelolaan Limbah Radioaktif' },
    { f:'PP 27 2009 Jenis dan Tarif Atas Jenis PNBP.pdf',                t:'PP No. 27 Tahun 2009 – Jenis dan Tarif PNBP yang Berlaku Pada BAPETEN' },
    { f:'PP 28 Tahun 2025 Penyelenggaraan perizinan berusaha.pdf',        t:'PP No. 28 Tahun 2025 – Penyelenggaraan Perizinan Berusaha' },
    { f:'PP 29 2008 Perizinan Pemanfaatan SRP dan BN.pdf',               t:'PP No. 29 Tahun 2008 – Perizinan Pemanfaatan Sumber Radiasi Pengion dan Bahan Nuklir' },
    { f:'PP 29 2009 Tata Cara Penetuan Jumlah Pembayaran, dan Penyetoran PNBP Terutang.pdf', t:'PP No. 29 Tahun 2009 – Tata Cara Penentuan Jumlah, Pembayaran, dan Penyetoran PNBP Terutang' },
    { f:'PP 33 2007 Keselamatan Radiasi Pengion dan Keamanan ZR.pdf',    t:'PP No. 33 Tahun 2007 – Keselamatan Radiasi Pengion dan Keamanan Sumber Radioaktif' },
    { f:'PP 42 2022 Jenis dan Tarif Atas Jenis PNBP.pdf',               t:'PP No. 42 Tahun 2022 – Jenis dan Tarif PNBP Pada BAPETEN' },
    { f:'PP 43 2006 Perizinan RN.pdf',                                    t:'PP No. 43 Tahun 2006 – Perizinan Reaktor Nuklir' },
    { f:'PP 45 2023 Keselamatan Radiasi Pengion dan Keamanan ZR.pdf',    t:'PP No. 45 Tahun 2023 – Keselamatan Radiasi Pengion dan Keamanan Zat Radioaktif' },
    { f:'PP 46 2009 Batas Pertanggungjawaban Kerugian Nuklir.pdf',       t:'PP No. 46 Tahun 2009 – Batas Pertanggungjawaban Kerugian Nuklir' },
    { f:'PP 52 2022 Keselamatan dan Keamanan Pertambangan Bahan Galian Nuklir.pdf', t:'PP No. 52 Tahun 2022 – Keselamatan dan Keamanan Pertambangan Bahan Galian Nuklir' },
    { f:'PP 54 2012 Keselamatan dan Keamanan Instasi Nuklir.pdf',        t:'PP No. 54 Tahun 2012 – Keselamatan dan Keamanan Instalasi Nuklir' },
    { f:'PP 56 2014 Jenis dan Tarif Atas Jenis PNBP.pdf',               t:'PP No. 56 Tahun 2014 – Jenis dan Tarif PNBP yang Berlaku Pada BAPETEN' },
    { f:'PP 58 2015 Keselamatan dan Keamanan dalam Pengangkutan ZR.pdf', t:'PP No. 58 Tahun 2015 – Keselamatan dan Keamanan Dalam Pengangkutan Zat Radioaktif' },
    { f:'PP 61 2012 Pengelolaan Limbah Radioaaktif.pdf',                 t:'PP No. 61 Tahun 2013 – Pengelolaan Limbah Radioaktif' },
  ]},

  { id:'s3', title:'Peraturan Presiden & Keputusan Presiden', cat:'perpres', items:[
    { f:'Perpres 46 2009 Pengesahan Perubahan Konvensi Proteksi Fisik Bahan Nuklir.pdf', t:'PERPRES No. 46 Tahun 2009 – Pengesahan Perubahan Konvensi Proteksi Fisik Bahan Nuklir' },
    { f:'Perpres 60 2019 Kebijakan dan Strategis Nasional Nuklir.pdf',   t:'PERPRES No. 60 Tahun 2019 – Kebijakan dan Strategi Nasional Keselamatan Nuklir Dan Radiasi' },
    { f:'Perpres 74 2012 Pertanggungjawaban Kerugian Nuklir.pdf',        t:'PERPRES No. 74 Tahun 2012 – Pertanggungjawaban Kerugian Nuklir' },
    { f:'Perpres 84 2010 Pengesahan JC Spent fuel dan Radioactive waste.pdf', t:'PERPRES No. 84 Tahun 2010 – Pengesahan Joint Convention on The Safety of Spent Fuel Management' },
    { f:'Perpres 87 2014 Peraturan Pelaksanaan UU 12 2011 Pembantukan PUU.pdf', t:'PERPRES No. 87 Tahun 2014 – Peraturan Pelaksanaan UU No. 12 Tahun 2011' },
  ]},

  // ── PERKA ── tambahkan setelah file diupload ke dokumen/
  { id:'s4', title:'Peraturan BAPETEN (Perka)', cat:'perka', items:[
    // Contoh format:
    // { f:'Perka 1 2022 Perizinan Berusaha.pdf', t:'Perka BAPETEN No. 1 Tahun 2022 – ...' },
  ]},

  // ── KEPKA ── tambahkan setelah file diupload ke dokumen/
  { id:'s5', title:'Keputusan Kepala BAPETEN', cat:'kepka', items:[
    // { f:'Kepka 01 2003 Pedoman Dosis Pasien.pdf', t:'Kepka BAPETEN No. 01 Tahun 2003 – ...' },
  ]},

  // ── SE ── tambahkan setelah file diupload ke dokumen/
  { id:'s6', title:'Surat Edaran', cat:'se', items:[
    // { f:'SE 0555 2020 Protokol Keamanan ZR.pdf', t:'SE Kepala BAPETEN No. 0555 Tahun 2020 – ...' },
  ]},

  // ── PANDUAN & IK ── tambahkan setelah file diupload ke dokumen/
  { id:'s7', title:'Panduan & Instruksi Kerja', cat:'panduan', items:[
    // { f:'IK 01 Evaluasi Izin Impor PRP.pdf', t:'IK-01 – Evaluasi Izin Impor PRP' },
  ]},

];
