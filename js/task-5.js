function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const colorState = new FormData();

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorState.set('color', color);
  span.textContent = colorState.get('color');
});



/*function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

function updateColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
}

btn.addEventListener('click', updateColor);*/


/*function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', function() {
  const newColor = getRandomHexColor(); 
  document.body.style.backgroundColor = newColor; 
  colorSpan.textContent = newColor;               
});*/
