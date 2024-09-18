const email = document.getElementById('mail');
const error = document.querySelector('#mail + span.error');
const valid = document.getElementById('validText');


email.addEventListener('input', () => {
    if (email.validity.valid){
        error.textContent = "";
        error.className = "error";
        showValid();
    }else {
        valid.textContent = ""
        showError();
    }
})

function showError() {
    if (email.validity.valueMissing) {
        error.textContent = "Please insert email";
    } else if (email.validity.tooShort) {
        error.textContent = "Minimum of 10 characters";
    } else if (email.validity.typeMismatch) {
        error.textContent = "Please enter a valid email";
    }
}

function showValid() {
    if (email.validity.valid) {
        valid.textContent = "OK";
    }
}

showError();