// DOM elements
const listContainer = document.getElementById("peraturan-list");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentType = "all";
let currentTheme = "all";
let peraturanData = [];

// Fetch data from GitHub JSON
async function fetchData() {
    try {
        console.log('Memulai fetch data...');
        
        // URL yang benar untuk file JSON di GitHub
        const response = await fetch('https://raw.githubusercontent.com/krumboko/PeraturanKetenaganukliran_Baru/main/data_github.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data berhasil di-fetch:', data.length, 'item');
        
        // Process data
        peraturanData = data.map(item => {
            // Extract tahun from judul
            const tahunMatch = item.judul.match(/\b(19|20)\d{2}\b/);
            const tahun = tahunMatch ? tahunMatch[0] : 'Tidak diketahui';
            
            // Determine jenis based on tema and content
            let jenis = "lainnya";
            const judulLower = item.judul.toLowerCase();
            
            if (item.tema === "Medik" || judulLower.includes('medik') || 
                judulLower.includes('radiologi') || judulLower.includes('radioterapi') ||
                judulLower.includes('kedokteran') || judulLower.includes('sinar-x') ||
                judulLower.includes('diagnostik')) {
                jenis = "medik";
            } else if (item.tema === "Industri" || item.tema === "INdustri" || 
                       judulLower.includes('industri') || judulLower.includes('radiografi') || 
                       judulLower.includes('gauging') || judulLower.includes('well logging') ||
                       judulLower.includes('perindustrian')) {
                jenis = "industri";
            } else if (item.tema === "Instalasi Nuklir" || judulLower.includes('instalasi nuklir') || 
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
                temaAsli: item.tema // Simpan tema asli untuk debugging
            };
        });
        
        console.log('Data berhasil diproses:', peraturanData);
        renderList();
        
    } catch (error) {
        console.error('Error fetching data:', error);
        listContainer.innerHTML = `
            <div class="error-message">
                <p>Gagal memuat data: ${error.message}</p>
                <p>Pastikan file data_github.json ada di repository GitHub Anda.</p>
                <button onclick="fetchData()" class="retry-btn">Coba Lagi</button>
            </div>
        `;
    }
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
                <p>Tidak ada peraturan ditemukan.</p>
                <p>Coba gunakan kata kunci lain atau reset filter.</p>
                <button onclick="resetFilters()" class="reset-btn">Reset Filter</button>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.judul}</h3>
            <p><strong>Tahun:</strong> ${item.tahun}</p>
            <p><strong>Jenis:</strong> ${capitalizeFirstLetter(item.jenis)}</p>
            <p><strong>Tema:</strong> ${capitalizeFirstLetter(item.tema)}</p>
            <p><small>Tema Asli: ${item.temaAsli}</small></p>
            <a href="${item.link}" target="_blank" class="doc-link">📂 Lihat Dokumen PDF</a>
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
    renderList();
}

// Event listeners
searchInput.addEventListener("input", renderList);
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        if (btn.dataset.type) currentType = btn.dataset.type;
        if (btn.dataset.theme) currentTheme = btn.dataset.theme;
        renderList();
    });
});

// Set initial active state for "all" buttons
window.addEventListener('load', () => {
    document.querySelector('[data-type="all"]').classList.add('active');
    document.querySelector('[data-theme="all"]').classList.add('active');
});

// Initial fetch
fetchData();
