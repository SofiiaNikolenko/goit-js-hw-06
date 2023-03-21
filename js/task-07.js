const nameInput = document.getElementById('font-size-control');
const text = document.getElementById('text');

const sizeChange = (event) => { 
    text.style.fontSize = event.currentTarget.value + "px";
};

nameInput.addEventListener('input',sizeChange);
