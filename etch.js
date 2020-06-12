
const container = document.querySelector('.grid');

let width = 16;
let height = 16;

function initialGrid() {
  for (let x = 0; x < width*height; x++) {
      let pixelDot = document.createElement('div');
      pixelDot.classList.add('pixel');
      pixelDot.addEventListener('mouseenter', pixelActivate);
      container.appendChild(pixelDot);
    }

    container.setAttribute('style', `grid-template-rows: repeat(${height}, 1fr);`);
    container.setAttribute('style', `grid-template-columns: repeat(${width}, 1fr);`);
}

function newGrid() {

  // let userChoice = prompt('Choose between 16-64 pixels');
  let width = height = prompt('Choose between 16-64 pixels');
  container.innerHTML = "";

  for (let x = 0; x < width*height; x++) {
      let pixelDot = document.createElement('div');
      pixelDot.classList.add('pixel');
      pixelDot.addEventListener('mouseenter', pixelActivate);
      container.appendChild(pixelDot);
    }

  container.setAttribute('style', `grid-template-rows: repeat(${height}, 1fr);`);
  container.setAttribute('style', `grid-template-columns: repeat(${width}, 1fr);`);
}

function pixelActivate (e) {
  e.target.classList.add('hovered');
}

function pixelColor (target) {
  // choose a random hex color
  // set setAttribute from there
  console.log(target);
  target.style.backgroundColor = 'blue';
}

function toggleColor (e) {

  let addColor = function (e) {
    // add event listener with pixel color
    // it should toggle the 'color' class and then add the event listener
    e.classList.toggle('color');

    let passTarget = function() {
      pixelColor(e);
    }

    if (e.classList.contains('color')) {
      e.addEventListener('mouseenter', passTarget);
    } else {
      e.removeEventListener('mouseenter', passTarget);
    }

  }

  let which = e.target.value
  let pixels = Array.from(container.querySelectorAll('.pixel'));

  // depending on the value of var. which, it either passes the function
  // that calls for the color or the shade
  pixels.forEach(addColor);
}


const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('.color');
const shadeBtn = document.querySelector('.shade');

clearBtn.addEventListener('click', newGrid);
colorBtn.addEventListener('click', toggleColor);



initialGrid();
