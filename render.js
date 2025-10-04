// render.js
import { MENU } from './menu.js';

const menuGrid = document.getElementById('menuGrid');
const tabs = document.querySelectorAll('.tab');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');

let activeTab = null;
let searchTimeout = null; // for debouncing
let lastQuery = ''; // track last search to prevent repeated scrolling

// Price template
const priceTemplate = (val = '') => {
  const text = val || '—';
  return `<span class="price-pill">${text}</span>`;
};

// Render menu items
export function renderMenu() {
  menuGrid.innerHTML = '';
  const query = (searchInput?.value || '').trim().toLowerCase();
  let items = [];

  // Filter items based on search or active tab
  if (query) {
    const allItems = Object.values(MENU).flat();
    items = allItems.filter(it => {
      const ar = (it.ar || '').toLowerCase();
      const en = (it.en || '').toLowerCase();
      const matches = ar.includes(query) || en.includes(query);
      if (activeTab) return matches && (MENU[activeTab] || []).includes(it);
      return matches;
    });
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

  // Create cards for each item
  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'menu-item-card p-3 sm:p-4 border border-[color:rgba(107,79,58,0.12)] rounded-2xl flex flex-col gap-2';

    const imgHTML = item.img 
      ? `<div class="img-container rounded-xl overflow-hidden">
           <img class="img-cover" src="${item.img}" alt="${item.ar} - ${item.en || ''}" 
                onerror="this.src='https://via.placeholder.com/112x112?text=No+Image'; this.alt='Image failed to load';">
         </div>` 
      : `<div class="img-container rounded-xl bg-white flex items-center justify-center text-sm text-[color:rgba(81,60,45,0.6)]">No Image</div>`;

    card.innerHTML = `
      ${imgHTML}
      <div class="item-name">${item.ar}</div>
      ${item.en ? `<div class="text-sm text-[color:rgba(81,60,45,0.7)] text-center">${item.en}</div>` : ''}
      ${priceTemplate(item.price)}
    `;

    menuGrid.appendChild(card);

    // Scroll the first item only if query changed or no previous query
    if (index === 0 && (query !== lastQuery || !activeTab)) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  lastQuery = query; // update lastQuery
  if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !query);
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

  // Debounced search input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        renderMenu();
      }, 300); // adjust delay if needed
    });
  }

  // Clear button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      renderMenu();
    });
  }
}

// Optional slider (for your quotes or hero section)
const track = document.getElementById('sliderTrack');
if (track) {
  const slides = track.children;
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}
