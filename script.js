// Konfigurasi
const REPO_URL = 'https://krumboko.github.io/PeraturanKetenaganukliran_Baru/';
const PDF_FOLDER = 'pdf/'; // Sesuaikan dengan struktur folder
let allRegulations = [];

// Fungsi utama
async function loadRegulations() {
    showLoading(true);
    
    try {
        // Fetch daftar PDF (ganti dengan API jika perlu)
        const response = await fetch(`${REPO_URL}pdf_list.json`);
        const data = await response.json();
        
        allRegulations = data.map(pdf => ({
            title: formatTitle(pdf.name),
            url: `${REPO_URL}${pdf.path}`,
            type: pdf.type || 'Umum',
            year: pdf.year || ''
        }));
        
        renderList(allRegulations);
        initSearch();
    } catch (error) {
        console.error("Gagal memuat data:", error);
        alert("Gagal memuat daftar peraturan. Silakan coba lagi.");
    } finally {
        showLoading(false);
    }
}

// Format judul PDF
function formatTitle(filename) {
    return filename
        .replace('.pdf', '')
        .replace(/_/g, ' ')
        .replace(/(PP|UU|Perpres) (\d+)/, '$1 No. $2');
}

// Render daftar
function renderList(regulations) {
    const container = document.getElementById('regulation-list');
    container.innerHTML = regulations.map(item => `
        <div class="regulation-item" data-type="${item.type}" data-year="${item.year}">
            <a href="${item.url}" target="_blank" onclick="openPdf(event, '${item.url}')">
                ${item.title} ${item.year ? `(${item.year})` : ''}
            </a>
        </div>
    `).join('');
}

// Buka PDF dengan optimasi
function openPdf(event, url) {
    event.preventDefault();
    const newTab = window.open('', '_blank');
    newTab.location.href = url; // Langsung buka PDF di tab baru
}

// Pencarian
function initSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allRegulations.filter(item => 
            item.title.toLowerCase().includes(term) || 
            (item.year && item.year.includes(term))
        );
        renderList(filtered);
    });
}

// Filter
function filterByType(type) {
    const filtered = type ? 
        allRegulations.filter(item => item.type === type) : 
        allRegulations;
    renderList(filtered);
}

// Tampilkan loading
function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadRegulations);
