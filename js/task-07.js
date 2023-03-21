const nameInput = document.getElementById('font-size-control');
const text = document.getElementById('text');

nameInput.addEventListener('input',sizeChange);

function sizeChange(event){ 
    text.style.fontSize = event.currentTarget.value + "px";
};