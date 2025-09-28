// DOM elements
const listContainer = document.getElementById("peraturan-list");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentType = "all";
let currentTheme = "all";
let peraturanData = [];

// Fallback data
const fallbackData = [
  {
    judul: "UU No. 10 Tahun 1997 Tentang Ketenaganukliran",
    tahun: "1997",
    jenis: "instalasi",
    tema: "lainnya",
    link: "https://krumboko.github.io/PeraturanKetenaganukliran_Baru/dokumen/UU%20No.%2010%20Tahun%201997%20Tentang%20Ketenaganukliran.pdf",
    temaAsli: "UU"
  },
  {
    judul: "PP No. 45 Tahun 2023 Tentang Keselamatan Radiasi Pengion dan Keamanan Zat Radioaktif",
    tahun: "2023", 
    jenis: "industri",
    tema: "lainnya",
    link: "https://krumboko.github.io/PeraturanKetenaganukliran_Baru/dokumen/PP%20No.%2045%20Tahun%202023%20Tentang%20Keselamatan%20Radiasi%20Pengion%20dan%20Keamanan%20Zat%20Radioaktif.pdf",
    temaAsli: "PP"
  },
  {
    judul: "Peraturan Bapeten No 4 Tahun 2024 Tentang Izin Pekerja Petugas pada Fasilitas Radiasi",
    tahun: "2024",
    jenis: "industri", 
    tema: "radiografi",
    link: "https://krumboko.github.io/PeraturanKetenaganukliran_Baru/dokumen/Peraturan%20Bapeten%20No%204%20Tahun%202024%20Tentang%20Izin%20Pekerja%20Petugas%20pada%20Fasilitas%20Radiasi.pdf",
    temaAsli: "FRZR"
  }
];

// Try multiple possible JSON URLs
async function fetchData() {
    console.log('🚀 Memulai fetch data...');
    
    const possibleUrls = [
        // Primary - Raw GitHub URL
        'https://raw.githubusercontent.com/krumboko/PeraturanKetenaganukliran_Baru/main/data_github.json',
        // Secondary - GitHub Pages URL
        'https://krumboko.github.io/PeraturanKetenaganukliran_Baru/data_github.json',
        // Tertiary - Root path (if hosted on same domain)
        './data_github.json'
    ];

    for (const url of possibleUrls) {
        try {
            console.log(`🔍 Mencoba: ${url}`);
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                console.log(`✅ SUCCESS: Data loaded from ${url}`);
                console.log(`📊 Total items: ${data.length}`);
                processData(data);
                return;
            } else {
                console.log(`❌ FAILED: ${url} - Status: ${response.status}`);
            }
        } catch (error) {
            console.log(`❌ ERROR: ${url} - ${error.message}`);
        }
    }
    
    // If all URLs fail, use fallback data
    console.log('⚠️ All URLs failed, using fallback data');
    useFallbackData();
}

function processData(data) {
    peraturanData = data.map(item => {
        // Extract tahun from judul
        const tahunMatch = item.judul.match(/\b(19|20)\d{2}\b/);
        const tahun = tahunMatch ? tahunMatch[0] : 'Tidak diketahui';
        
        // Determine jenis based on tema and content
        let jenis = "lainnya";
        const judulLower = item.judul.toLowerCase();
        const temaLower = item.tema ? item.tema.toLowerCase() : '';
        
        if (temaLower === 'medik' || judulLower.includes('medik') || 
            judulLower.includes('radiologi') || judulLower.includes('radioterapi') ||
            judulLower.includes('kedokteran') || judulLower.includes('sinar-x') ||
            judulLower.includes('diagnostik') || judulLower.includes('rumah sakit')) {
            jenis = "medik";
        } else if (temaLower === 'industri' || judulLower.includes('industri') || 
                   judulLower.includes('radiografi') || judulLower.includes('gauging') || 
                   judulLower.includes('well logging') || judulLower.includes('perindustrian') ||
                   judulLower.includes('pabrik')) {
            jenis = "industri";
        } else if (temaLower.includes('instalasi') || judulLower.includes('instalasi nuklir') || 
                   judulLower.includes('reaktor') || judulLower.includes('bahan nuklir') ||
                   judulLower.includes('nuklir')) {
            jenis = "instalasi";
        }
        
        // Determine tema spesifik
        let temaSpesifik = "lainnya";
        if (judulLower.includes('radiografi')) {
            temaSpesifik = "radiografi";
        } else if (judulLower.includes('well logging')) {
            temaSpesifik = "welllogging";
        } else if (judulLower.includes('gauging')) {
            temaSpesifik = "gauging";
        }
        
        return {
            judul: item.judul,
            tahun: tahun,
            jenis: jenis,
            tema: temaSpesifik,
            link: item.link,
            temaAsli: item.tema || 'Tidak ada'
        };
    });
    
    console.log('📈 Data processed successfully:', peraturanData.length, 'items');
    renderList();
}

function useFallbackData() {
    peraturanData = fallbackData;
    renderList();
    
    // Show warning message
    const warning = document.createElement('div');
    warning.className = 'warning-message';
    warning.innerHTML = `
        <p>⚠️ Menggunakan data contoh. File JSON tidak dapat diakses.</p>
        <p>Pastikan file <strong>data_github.json</strong> ada di root repository.</p>
    `;
    listContainer.parentNode.insertBefore(warning, listContainer);
}

// Render function
function renderList() {
    listContainer.innerHTML = "";
    
    if (peraturanData.length === 0) {
        listContainer.innerHTML = "<p class='loading'>Memuat data...</p>";
        return;
    }
    
    let filtered = peraturanData.filter(item => {
        let matchType = (currentType === "all" || item.jenis === currentType);
        let matchTheme = (currentTheme === "all" || item.tema === currentTheme);
        let matchSearch = item.judul.toLowerCase().includes(searchInput.value.toLowerCase());
        return matchType && matchTheme && matchSearch;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="no-results">
                <p>😔 Tidak ada peraturan ditemukan.</p>
                <p>Coba gunakan kata kunci lain atau reset filter.</p>
                <button onclick="resetFilters()" class="reset-btn">Reset Filter</button>
            </div>
        `;
        return;
    }

    // Show results count
    const resultsInfo = document.createElement('div');
    resultsInfo.className = 'results-info';
    resultsInfo.textContent = `Menampilkan ${filtered.length} dari ${peraturanData.length} peraturan`;
    listContainer.appendChild(resultsInfo);

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.judul}</h3>
            <div class="card-meta">
                <span class="year">📅 ${item.tahun}</span>
                <span class="type">🏷️ ${capitalizeFirstLetter(item.jenis)}</span>
                <span class="theme">📚 ${capitalizeFirstLetter(item.tema)}</span>
            </div>
            <p class="original-theme"><small>Tema Asli: ${item.temaAsli}</small></p>
            <a href="${item.link}" target="_blank" class="doc-link">📂 Buka Dokumen PDF</a>
        `;
        listContainer.appendChild(card);
    });
}

// Helper function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Reset filters
function resetFilters() {
    currentType = "all";
    currentTheme = "all";
    searchInput.value = "";
    
    // Update active states
    filterButtons.forEach(btn => {
        if (btn.dataset.type === "all" || btn.dataset.theme === "all") {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderList();
}

// Event listeners
searchInput.addEventListener("input", renderList);
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all buttons in the same group
        if (btn.dataset.type) {
            document.querySelectorAll(`[data-type]`).forEach(b => b.classList.remove('active'));
        }
        if (btn.dataset.theme) {
            document.querySelectorAll(`[data-theme]`).forEach(b => b.classList.remove('active'));
        }
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        if (btn.dataset.type) currentType = btn.dataset.type;
        if (btn.dataset.theme) currentTheme = btn.dataset.theme;
        
        console.log(`Filter: type=${currentType}, theme=${currentTheme}`);
        renderList();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, starting data fetch...');
    fetchData();
});
