const nameInput = document.getElementById('validation-input');
const lengthInput = nameInput.dataset.length;

nameInput.addEventListener("blur", inputEvent);

function inputEvent(event) { 
    if (event.currentTarget.value.length >= lengthInput) {
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
    } else {
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
    }
};