// main.js
import { initTabs, renderMenu } from './render.js';

function init() {
  document.getElementById('year').textContent = new Date().getFullYear();
  initTabs();
  renderMenu(); // Optional: render default tab
}
init();
