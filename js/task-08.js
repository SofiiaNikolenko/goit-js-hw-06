const form = document.querySelector('.login-form');

function formSubmit(event){
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Fill in all data!");
        return;
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};

form.addEventListener("submit", formSubmit);