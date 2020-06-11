
const container = document.querySelector('.grid');

const width = 450;
const height = 450;

const area = width * height;

function initialGrid() {
  for (let y = 0; y < 16; y++) {
    let gridLine = document.createElement('div');
    gridLine.classList.add('grid-line');

    for(let x = 0; x < 16; x++) {
      let pixelDot = document.createElement('div');
      pixelDot.classList.add('pixel');
      gridLine.appendChild(pixelDot);
      pixelDot.addEventListener('mouseenter', pixelActivate);
    }
    container.appendChild(gridLine);
  }
}

function newGrid() {

  let userChoice = prompt('Choose between 16-64 pixels');

  container.innerHTML = "";

  let padding = area / (userChoice) ** 2;

  for (let y = 0; y < 16; y++) {
    let gridLine = document.createElement('div');
    gridLine.classList.add('grid-line');

    for(let x = 0; x < +userChoice; x++) {
      let pixelDot = document.createElement('div');
      pixelDot.classList.add('pixel');
      gridLine.appendChild(pixelDot);
      pixelDot.addEventListener('mouseenter', pixelActivate);
    }
    container.appendChild(gridLine);
  }
}

function pixelActivate (e) {
  e.target.classList.add('hovered');
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', newGrid);

initialGrid();
