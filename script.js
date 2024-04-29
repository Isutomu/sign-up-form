const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#confirm-password');
const alert = document.querySelector('.incorrect-password');

function add_remove_alert() {
    if (password.value === passwordConfirmation.value) {
        alert.classList.remove("dont-match");
        password.classList.remove("dont-match");
    }
    else {
        alert.classList.add("dont-match");
        password.classList.add("dont-match");
    }
}

password.addEventListener("input", add_remove_alert);
passwordConfirmation.addEventListener("input", add_remove_alert);