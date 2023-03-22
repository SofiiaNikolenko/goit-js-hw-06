function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.getElementsByTagName('body')[0];
const colorBtn = document.getElementsByClassName('change-color')[0];
const colorText = document.getElementsByClassName('color')[0];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
};
