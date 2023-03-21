let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');

decrementBtn.addEventListener('click', decrementClick);
incrementBtn.addEventListener('click', incrementClick);

function decrementClick () {
    counterValue--;
    valueEl.textContent = counterValue;
};

function incrementClick () {
    counterValue++;
    valueEl.textContent = counterValue;
};