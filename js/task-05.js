const textInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

textInput.addEventListener("input", inputEvent);

function inputEvent(event) {
    if (event.currentTarget.value === '') {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = event.currentTarget.value;
    }   
};