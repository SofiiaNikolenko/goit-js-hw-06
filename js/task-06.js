const nameInput = document.getElementById('validation-input');
const lengthInput = nameInput.dataset.length;

const inputEvent = (event) => { 
    if (event.currentTarget.value.length >= lengthInput) {
        console.log("hello");
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
    } else {
        console.log("no hello");
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
    }
}

nameInput.addEventListener("blur", inputEvent);