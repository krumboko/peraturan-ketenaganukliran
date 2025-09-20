// Dummy data
const peraturanData = [
  {judul: "Perka BAPETEN No. 3 Tahun 2021", tahun: 2021, jenis: "industri", tema: "gauging", link: "https://krumboko.github.io/PeraturanKetenaganukliran_Baru/PP%2027%202002%20Pengelolaan%20Limbah%20Radioaktif.pdf"},
  {judul: "Perba BAPETEN No. 4 Tahun 2024", tahun: 2024, jenis: "medik", tema: "radiografi", link: "dokumen/PP 27 2002 Pengelolaan Limbah Radioaktif.pdf"},
  {judul: "UU No. 10 Tahun 1997 tentang Ketenaganukliran", tahun: 1997, jenis: "instalasi", tema: "welllogging", link: "dokumen/UU 10 Tahun 1997 Ketenaganukliran.pdf"},
  {judul: "PP No. 33 Tahun 2007 tentang Keselamatan Radiasi", tahun: 2007, jenis: "industri", tema: "gauging", link: "dokumen/PP 33 Tahun 2007 Keselamatan Radiasi.pdf"},
  {judul: "Perka BAPETEN No. 16 Tahun 2014", tahun: 2014, jenis: "medik", tema: "radiografi", link: "dokumen/UU 10 1997 Ketenaganukliran.pdf"}
];

// DOM elements
const listContainer = document.getElementById("peraturan-list");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentType = "all";
let currentTheme = "all";

// Render function
function renderList() {
  listContainer.innerHTML = "";
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
      <a href="${item.link}" target="_blank">📂 Lihat</a>
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

// Initial render
renderList();
