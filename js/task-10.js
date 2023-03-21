function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberIpput = document.getElementsByTagName('input')[0];
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBox = document.getElementById('boxes');

createBtn.addEventListener('click',createBoxes);
destroyBtn.addEventListener('click',destroyBoxes);

function createBoxes(amount) {
  amount.value = numberIpput.value;

  let allDivBoxHTML = '';
  let widthHeight = 20;

  for (let i = 0; i < amount.value; i++) {  
    widthHeight += 10;

    let bgcolor = getRandomHexColor();
    let divBoxHTML = `<div class="divBoxHTML" style = "background-color:${bgcolor};
    width:${widthHeight}px; height:${widthHeight}px;"></div>`;

    allDivBoxHTML += divBoxHTML;     
  }
  divBox.insertAdjacentHTML("beforeend", allDivBoxHTML);
}

function destroyBoxes() {
  numberIpput.value = 0;
  divBox.innerHTML = "";
}