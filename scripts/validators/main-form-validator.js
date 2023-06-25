let form = document.querySelector('.main-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPassword = document.querySelector('.js-input-password'),
    inputConfirmPassword = document.querySelector('.js-input-confirm-password'),
    passwordErrorModals = document.querySelectorAll('.password-error-modal');


function validatePassword(password) {
    let reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g;
    return reg.test(String(password));
}

function showPasswordErrorModals() {
    passwordErrorModals.forEach(function (modal) {
        modal.style.display = 'block';
    })
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        passwordVal = inputPassword.value,
        passwordConfirmVal = inputConfirmPassword.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })

    if (emptyInputs.length !== 0) {
        // alert("Inputs not filled")
        // return false;
    }

    if (passwordVal.length < 8) {
        inputPassword.classList.add('error');
        showPasswordErrorModals();
        return false;
    } else {
        console.log(passwordVal)
        if (!validatePassword(passwordVal)) {
            inputPassword.classList.add('error');
            showPasswordErrorModals();
            return false;
        } else {
            inputPassword.classList.remove('error');
            passwordErrorModals.forEach(function (modal) {
                modal.style.display = 'none';
            })
        }
    }

    if (passwordVal !== passwordConfirmVal) {
        inputConfirmPassword.classList.add('error');
        return false;
    } else {
        inputConfirmPassword.classList.remove('error')
    }

    console.log(formInputs)
    return false;
}