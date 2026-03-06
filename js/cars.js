/* 
 * render Cars into a container, basically a helper function? if you could call it that 
 * @param {array} Data
 *
 */
import { usedCars } from './usedCars-TH-1.js';


export function renderCars(data) {
  const container = document.getElementById('car-container');


  const carHTML = data.map(car => {

    const mpgSplit = car.gasMileage.split(',');

    return `
      <div class="car-card">
        <img src="images/${car.model.replace(/\s+/g, '-')}.jpg" alt="${car.year} ${car.make} ${car.model}">
      
        <div class="car-header">
          <h2>${car.year} ${car.make} ${car.model}</h2>
        </div>

        <div class="card-body">
          <div class="left-body">
            <p class="price">${car.price.toLocaleString()}</p>
            <p class="color">${car.color}</p>
          </div>
        
          <div class="right-body">
            <p><strong>${car.mileage.toLocaleString()}</strong> miles</p>
            <p>${mpgSplit[0].trim()}</p>
            <p>${mpgSplit[1] ? mpgSplit[1].trim() : ''}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = carHTML;
}

// Init olad
renderCars(usedCars);
