// DOM elements
const listContainer = document.getElementById("peraturan-list");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let peraturanData = [];
let currentTheme = "all";

// Ambil data dari JSON
fetch("data_github.json")
  .then(res => res.json())
  .then(data => {
    peraturanData = data;
    renderList();
  })
  .catch(err => {
    console.error("Gagal memuat data JSON:", err);
    listContainer.innerHTML = "<p>⚠️ Gagal memuat data peraturan.</p>";
  });

// Render function
function renderList() {
  listContainer.innerHTML = "";
  let filtered = peraturanData.filter(item => {
    let matchTheme = (currentTheme === "all" || item.tema.toLowerCase() === currentTheme.toLowerCase());
    let matchSearch = item.judul.toLowerCase().includes(searchInput.value.toLowerCase());
    return matchTheme && matchSearch;
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
    if (btn.dataset.theme) currentTheme = btn.dataset.theme;
    renderList();
  });
});
