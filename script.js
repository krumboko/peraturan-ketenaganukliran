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
        const response = await fetch('https://krumboko.github.io/PeraturanKetenaganukliran_Baru/data_github.json');
        const data = await response.json();
        
        // Process data to match our structure
        peraturanData = data.map(item => {
            // Extract tahun from judul
            const tahunMatch = item.judul.match(/\b(19|20)\d{2}\b/);
            const tahun = tahunMatch ? tahunMatch[0] : '-';
            
            // Determine jenis based on tema
            let jenis = "lainnya";
            if (item.tema === "Medik" || item.tema === "SE" || item.judul.toLowerCase().includes('medik') || 
                item.judul.toLowerCase().includes('radiologi') || item.judul.toLowerCase().includes('radioterapi')) {
                jenis = "medik";
            } else if (item.tema === "Industri" || item.tema === "INdustri" || item.judul.toLowerCase().includes('industri') || 
                       item.judul.toLowerCase().includes('radiografi') || item.judul.toLowerCase().includes('gauging') || 
                       item.judul.toLowerCase().includes('well logging')) {
                jenis = "industri";
            } else if (item.tema === "Instalasi Nuklir" || item.judul.toLowerCase().includes('instalasi') || 
                       item.judul.toLowerCase().includes('reaktor') || item.judul.toLowerCase().includes('nuklir')) {
                jenis = "instalasi";
            }
            
            // Determine tema spesifik
            let temaSpesifik = "lainnya";
            if (item.judul.toLowerCase().includes('radiografi')) {
                temaSpesifik = "radiografi";
            } else if (item.judul.toLowerCase().includes('well logging')) {
                temaSpesifik = "welllogging";
            } else if (item.judul.toLowerCase().includes('gauging')) {
                temaSpesifik = "gauging";
            }
            
            return {
                judul: item.judul,
                tahun: tahun,
                jenis: jenis,
                tema: temaSpesifik,
                link: item.link
            };
        });
        
        renderList();
    } catch (error) {
        console.error('Error fetching data:', error);
        listContainer.innerHTML = "<p>Gagal memuat data. Silakan refresh halaman.</p>";
    }
}

// Render function
function renderList() {
    listContainer.innerHTML = "";
    
    if (peraturanData.length === 0) {
        listContainer.innerHTML = "<p>Memuat data...</p>";
        return;
    }
    
    let filtered = peraturanData.filter(item => {
        let matchType = (currentType === "all" || item.jenis === currentType);
        let matchTheme = (currentTheme === "all" || item.tema === currentTheme);
        let matchSearch = item.judul.toLowerCase().includes(searchInput.value.toLowerCase());
        return matchType && matchTheme && matchSearch;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = "<p>Tidak ada peraturan ditemukan.</p>";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.judul}</h3>
            <p><strong>Tahun:</strong> ${item.tahun}</p>
            <p><strong>Jenis:</strong> ${item.jenis}</p>
            <p><strong>Tema:</strong> ${item.tema}</p>
            <a href="${item.link}" target="_blank">📂 Lihat Dokumen</a>
        `;
        listContainer.appendChild(card);
    });
}

// Event listeners
searchInput.addEventListener("input", renderList);
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.type) currentType = btn.dataset.type;
        if (btn.dataset.theme) currentTheme = btn.dataset.theme;
        renderList();
    });
});

// Initial fetch
fetchData();
