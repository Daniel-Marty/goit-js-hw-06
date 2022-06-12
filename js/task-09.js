function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColorBtn = document.querySelector('.change-color') 
const bodyColor = document.querySelector('body')
const spanColor = document.querySelector('.color')
randomColorBtn.addEventListener('click', backGroundChange);

function backGroundChange() {
  let hexColor = getRandomHexColor();
  bodyColor.style.backgroundColor = hexColor;
  spanColor.textContent = hexColor;
  console.log(hexColor);
}