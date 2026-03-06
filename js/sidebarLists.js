/* 
 * File to initialize checkboxes, 
 * just tryna keep it somewhat organized for my sanity
 *
*/
import { usedCars } from './usedCars-TH-1.js';

const manufacturerContainer = document.getElementById('manufacturer-list');
const colorContainer = document.getElementById('color-list');

// Manufacturer
const uniqueMakes = [...new Set(usedCars.map(car => car.make))];
manufacturerContainer.innerHTML = uniqueMakes.map(make => `
  <div class="checkboxes">
    <input type="checkbox" class="make-checkbox" value="${make}" id="chk-${make.replace(/\s+/g, '-')}">
    <label for="chk-${make}">${make}</label>
  </div>
`).join('');

// Color
const uniqueColors = [... new Set(usedCars.map(car => car.color))];
colorContainer.innerHTML = uniqueColors.map(color => `
  <div class="checkboxes">
    <input type="checkbox" class="color-checkbox" value="${color}" id="chk-${color}">
    <label for="chk-${color}">${color}</label>
  </div>
`).join('');

