const main = document.getElementById("main");
const homeBtn = document.getElementById("homeBtn");
const searchBtn = document.getElementById("searchBtn");

homeBtn.addEventListener("click", loadHome);
searchBtn.addEventListener("click", showSearch);

// Lista de títulos iniciales
const initialTitles = ["Breaking bad", "Chernobyl", "The Office", "Friends", "Game of Thrones", "The Sopranos", "Sherlock", "The Wire", "Stranger Things"];

async function loadHome() {
  main.innerHTML = `<h2 style="text-align:center;">Películas / Series Populares</h2><div class="movie-grid" id="movies"></div>`;
  const container = document.getElementById("movies");

  for (const title of initialTitles) {
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(title)}`);
      const data = await res.json();
      if (data.length > 0) {
        const show = data[0].show;
        renderCard(show, container);
      }
    } catch (err) {
      console.error("Error cargando:", title, err);
    }
  }
}

function showSearch() {
  main.innerHTML = `
    <div class="search-container">
      <h2>Buscar Película o Serie</h2>
      <input type="text" id="searchInput" placeholder="Ejemplo: Arcane">
      <button onclick="searchMovie()">Buscar</button>
    </div>
    <div id="searchResults" class="movie-grid"></div>
  `;
}

async function searchMovie() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsContainer = document.getElementById("searchResults");
  if (!query) return;

  resultsContainer.innerHTML = "<p>Buscando...</p>";
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (data.length > 0) {
      resultsContainer.innerHTML = "";
      data.forEach(item => renderCard(item.show, resultsContainer));
    } else {
      resultsContainer.innerHTML = `<p>No se encontraron resultados.</p>`;
    }
  } catch (err) {
    resultsContainer.innerHTML = `<p>Error al buscar.</p>`;
  }
}

function renderCard(show, container) {
  const img = show.image ? show.image.medium : "https://via.placeholder.com/210x295?text=Sin+imagen";
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
    <img src="${img}" alt="${show.name}">
    <h3>${show.name}</h3>
  `;
  card.onclick = () => showDetails(show);
  container.appendChild(card);
}

function showDetails(show) {
  const img = show.image ? show.image.original : "https://via.placeholder.com/400x600?text=Sin+imagen";
  const cleanSummary = cleanText(show.summary || "Sin descripción disponible.");

  main.innerHTML = `
    <button onclick="loadHome()" style="margin:10px;">⬅ Volver</button>
    <div class="movie-details" style="padding:20px;">
      <h2>${show.name}</h2>
      <img src="${img}" alt="${show.name}" style="width:300px;">
      <p><strong>Género:</strong> ${show.genres?.join(", ") || "N/A"}</p>
      <p><strong>Idioma:</strong> ${show.language || "N/A"}</p>
      <p><strong>Calificación:</strong> ⭐${show.rating?.average || "N/A"}</p>
      <p><strong>Sinopsis:</strong> ${cleanSummary}</p>
      ${show.officialSite ? `<a href="${show.officialSite}" target="_blank">🌐 Sitio oficial</a>` : ""}
    </div>
  `;
}

// Limpia HTML, JSON y otros caracteres raros
function cleanText(text) {
  try {
    // Elimina etiquetas HTML
    let cleaned = text.replace(/<[^>]*>?/gm, "");
    // Elimina restos de JSON o corchetes
    cleaned = cleaned.replace(/(\{.*\}|\[.*\])/g, "");
    // Quita espacios extras
    return cleaned.trim();
  } catch {
    return "Sin descripción disponible.";
  }
}

// Cargar inicio automáticamente
loadHome();
