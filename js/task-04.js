let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');


const decrementClick = () => {
    counterValue--;
    valueEl.textContent = counterValue;
};

const incrementClick = () => {
    counterValue++;
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementClick);
incrementBtn.addEventListener('click', incrementClick);
