import { MENU } from './menu.js';

const menuGrid = document.getElementById('menuGrid');
const tabs = document.querySelectorAll('.tab');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchBtn = document.getElementById('searchBtn'); // optional mobile button

let activeTab = null;

// Price template
const priceTemplate = (val = '') => `<span class="price-pill">${val || '—'}</span>`;

// Create menu card
function createMenuCard(item, isCold = false) {
  const card = document.createElement('div');
  card.className = `
    menu-item-card p-3 sm:p-4 border border-[color:rgba(107,79,58,0.12)]
    rounded-2xl flex flex-col gap-3
  `;

  // Cold drinks slightly larger
  const imgHeightClass = isCold ? 'h-56 sm:h-64' : 'h-48 sm:h-56';

  const imgHTML = item.img
    ? `<div class="img-container rounded-xl overflow-hidden ${imgHeightClass}">
         <img class="img-cover w-full h-full object-cover" src="${item.img}" alt="${item.ar || item.en}" 
              onerror="this.src='https://via.placeholder.com/300x300?text=No+Image';">
       </div>`
    : `<div class="img-container rounded-xl bg-white flex items-center justify-center text-sm text-[color:rgba(81,60,45,0.6)] ${imgHeightClass}">No Image</div>`;

  card.innerHTML = `
    ${imgHTML}
    <div class="item-name font-semibold text-lg">${item.ar || item.name}</div>
    ${item.en ? `<div class="text-sm text-[color:rgba(81,60,45,0.7)] text-center">${item.en}</div>` : ''}
    ${item.description ? `<div class="text-[color:rgba(81,60,45,0.6)] text-sm break-words">${item.description}</div>` : ''}
    ${priceTemplate(item.price)}
  `;

  menuGrid.appendChild(card);
}

// Render menu items
export function renderMenu() {
  menuGrid.innerHTML = '';
  const query = (searchInput?.value || '').trim().toLowerCase();
  let items = [];

  // Determine items based on search or active tab
  if (query) {
    const allItems = Object.values(MENU).flat();
    items = allItems.filter(it =>
      (it.en || it.name || '').toLowerCase().includes(query) ||
      (it.ar || '').toLowerCase().includes(query)
    );
  } else if (activeTab) {
    items = MENU[activeTab] || [];
  } else return;

  // Show "No items" if empty
  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'text-center text-[color:rgba(81,60,45,0.7)] py-6 col-span-full';
    empty.textContent = query ? 'No results found.' : 'No items.';
    menuGrid.appendChild(empty);
    return;
  }

  // Cold drinks grouped by category
  if (activeTab === 'cold') {
    const categories = [...new Set(items.map(i => i.category))];
    categories.forEach(cat => {
      const title = document.createElement('div');
      title.className = 'text-2xl sm:text-3xl font-bold my-4 col-span-full';
      title.textContent = cat;
      menuGrid.appendChild(title);

      const catItems = items.filter(i => i.category === cat);
      catItems.forEach(item => createMenuCard(item, true)); // all cold drinks slightly bigger
    });
  } else {
    items.forEach(item => createMenuCard(item, false));
  }

  // Show/hide clear button
  if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !query);

  // Scroll first card into view for search or tab click
  if (menuGrid.firstChild) {
    menuGrid.firstChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Render tabs
export function renderTabs() {
  tabs.forEach(btn => {
    const isActive = btn.dataset.tab === activeTab;
    btn.classList.toggle('tab-active', isActive);
    btn.classList.toggle('tab-inactive', !isActive);
  });
}

// Initialize tabs and search
export function initTabs() {
  // Tab click
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = activeTab === btn.dataset.tab ? null : btn.dataset.tab;
      renderTabs();
      renderMenu();
    });
  });

  // Search: Enter/Go key
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === 'Go') renderMenu();
    });
  }

  // Mobile search button
  if (searchBtn) searchBtn.addEventListener('click', renderMenu);

  // Clear search button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      renderMenu();
    });
  }
}

// Optional slider (hero or quotes)
const track = document.getElementById('sliderTrack');
if (track) {
  const slides = track.children;
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}
