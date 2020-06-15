
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
  // e.target.classList.add('hovered');
  console.log(e);
  e.target.setAttribute('style', 'background-color: rgba(40, 40, 40, 0.1);');
}

function pixelColor (e) {
  // e.target.classList.remove('hovered');
  let rand1 = Math.floor(Math.random() * 360);

  e.target.style.backgroundColor = `hsla(${rand1}, 100%, 70%, 0.6)`;
}

function pixelShade (e) {
  let color = e.target.style.backgroundColor;

  if (color == "") {
    pixelActivate(e);
  } else {
    let colorSplit = color.split(',');
    let last = colorSplit.pop();
    last = last.substring(0, last.length-1)
    let newAlpha = +last + 0.1;
    // console.log(`${colorSplit.join(', ')}, ${newAlpha})`);
    e.target.style.backgroundColor = `${colorSplit.join(', ')}, ${newAlpha})`
  }

}

function toggleColor () {
  let pixels = Array.from(container.querySelectorAll('.pixel'));
  pixels.forEach( function(e) {
    e.classList.toggle('color');
    if (e.classList.contains('color')) {
      e.classList.remove('shade')
      e.removeEventListener('mouseenter', pixelShade);
      e.addEventListener('mouseenter', pixelColor);
    } else if (!(e.classList.contains('color'))) {
      e.removeEventListener('mouseenter', pixelColor);
    }
  });
}

function toggleShading () {
  shadeBtn.innerText = `${shadeBtn.innerText}: On`;
  shadeBtn.innerText = 'Shade';
  
  let pixels = Array.from(container.querySelectorAll('.pixel'));
  pixels.forEach( function(e) {
    e.classList.toggle('shade');

    if (e.classList.contains('shade')) {

      e.removeEventListener('mouseenter', pixelActivate);
      e.removeEventListener('mouseenter', pixelColor);
      e.addEventListener('mouseenter', pixelShade);

    } else if (!(e.classList.contains('shade'))) {

      e.removeEventListener('mouseenter', pixelShade);

      if (e.classList.contains('color')) {
        e.addEventListener('mouseenter', pixelShade);
        e.addEventListener('mouseenter', pixelcolor);
      } else {
        e.addEventListener('mouseenter', pixelShade);
      }

    }
  });
}

const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('.color');
const shadeBtn = document.querySelector('.shade');

clearBtn.addEventListener('click', newGrid);
colorBtn.addEventListener('click', toggleColor);
shadeBtn.addEventListener('click', toggleShading);

initialGrid();
