import { initTabs, renderMenu } from './render.js';

function init() {
  document.getElementById('year').textContent = new Date().getFullYear();
  initTabs();
  renderMenu(); // Optional: render default tab

  // 👇 Mobile menu toggle logic
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileLinks = document.getElementById('mobileLinks');

  if (mobileBtn && mobileLinks) {
    mobileBtn.addEventListener('click', () => {
      mobileLinks.classList.toggle('hidden');
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  init();
});


