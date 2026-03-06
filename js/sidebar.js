/* 
 * Handle all the sidebar JS
 * First part is the price min/max filter 
 * Second part is the miles min/max filter
 * Third part is the year min/max filter
 * Fourth part is the Manufacturer filter, 
 *  It will check for all checked boxes, the checkboxes 
 *  available will be dynamically presented depending on the available car
 * */

import { usedCars } from './usedCars-TH-1.js';
import { renderCars } from './cars.js';

// Price
const minPriceInput = document.getElementById('min-price'); 
const maxPriceInput = document.getElementById('max-price');

// Miles
const minMileInput = document.getElementById('min-mile');
const maxMileInput = document.getElementById('max-mile');

// Year
const minYearInput = document.getElementById('min-year');
const maxYearInput = document.getElementById('max-year');


const applyBtn = document.getElementById('apply-filter');
applyBtn.addEventListener('click', () => {
  
  console.log("Filter Has been loaded");


  // Price Input
  const minPrice = parseFloat(minPriceInput.value) || 0;
  const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

  // Mile Input
  const minMile = parseFloat(minMileInput.value) || 0;
  const maxMile = parseFloat(maxMileInput.value) || Infinity;

  // Year Input
  const minYear = parseFloat(minYearInput.value) || 0;
  const maxYear = parseFloat(maxYearInput.value) || Infinity; 
  
  // Make
  const selectedMakes = Array.from(document.querySelectorAll('.make-checkbox:checked'))
                             .map(cb => cb.value);

  // Color
  const selectedColors = Array.from(document.querySelectorAll('.color-checkbox:checked'))
                              .map(cb => cb.value);

  console.log(selectedMakes);
  console.log(selectedColors);


  const filteredCars = usedCars.filter(car => {
    const matchPrice = car.price >= minPrice && car.price <= maxPrice;
    const matchMileage = car.mileage >= minMile && car.mileage <= maxMile;
    const matchYear = car.year >= minYear && car.year <= maxYear;

    const matchMake = selectedMakes.length === 0 || selectedMakes.includes(car.make);
    const matchColor = selectedColors.length === 0 || selectedColors.includes(car.color);
    
    console.log("matchPrice: " + matchPrice + "matchMileage: " + matchMileage + "matchYear: " + matchYear + "mathMake: " + matchMake + "matchColor: " + matchColor);
    console.log("car.make:", car.make);
    console.log("selectedMakes:", selectedMakes);
    
    return matchPrice && matchMileage && matchYear && matchMake && matchColor;
  });
  renderCars(filteredCars);
});
