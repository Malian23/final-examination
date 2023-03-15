const formButtonEl = document.querySelector('.information_authorization_form_btn');
const formPassword1El = document.getElementById("password1");
const formPassword2El = document.getElementById("password2");

formButtonEl.onclick = (e) => {
    if (formPassword1El.value == "" && formPassword2El.value == "") {
        formPassword1El.classList.add('error');
        formPassword2El.classList.add('error');
        e.preventDefault();
    }
    else if (formPassword1El.value != formPassword2El.value) {
        formPassword1El.classList.add('error');
        formPassword2El.classList.add('error');
        e.preventDefault();
    }
    else if (formPassword1El.value == formPassword2El.value) {
        formPassword1El.classList.remove('error');
        formPassword2El.classList.remove('error');
        formPassword1El.classList.add('correct');
        formPassword2El.classList.add('correct');
        e.preventDefault();
    }
}