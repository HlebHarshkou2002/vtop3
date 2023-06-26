let form = document.querySelector(".main-form"),
	formInputs = document.querySelectorAll(".js-input"),
	inputEmail = document.querySelector(".js-input-email"),
	inputPassword = document.querySelector(".js-input-password"),
	inputConfirmPassword = document.querySelector(".js-input-confirm-password"),
	passwordErrorModals = document.querySelectorAll(".password-error-modal"),
	submitButton = document.querySelector(".submit-button");

console.log(submitButton);
function validatePassword(password) {
	let reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g;
	return reg.test(String(password));
}

function showPasswordErrorModals() {
	passwordErrorModals.forEach(function (modal) {
		modal.style.display = "block";
	});
}

function animateErrorSubmit() {
	submitButton.classList.add("animate-error-submit");
	setTimeout(() => {
		submitButton.classList.remove("animate-error-submit");
	}, 100);
}


//Функция, которая вызывается после успешной регистрации
function accessSubmit() {
	//Очищает все поля формы
	formInputs.forEach(function (input) {
		input.value = "";
	});
	setTimeout(() => {
		window.location.href = 'server-ok.html';
	}, 500);
}

form.onsubmit = function () {
	let emailVal = inputEmail.value,
		passwordVal = inputPassword.value,
		passwordConfirmVal = inputConfirmPassword.value,
		emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

	//Проверка на пустые инпуты
	formInputs.forEach(function (input) {
		if (input.value === "") {
			input.classList.add("error");
			animateErrorSubmit();
		} else {
			input.classList.remove("error");
		}
	});

	//Проверка на то есть ли пустые инпуты
	if (emptyInputs.length !== 0) {
		// alert("Inputs not filled")
		animateErrorSubmit();
		return false;
	}

	//Валидация пароля
	if (passwordVal.length < 8) {
		inputPassword.classList.add("error");
		showPasswordErrorModals();
		animateErrorSubmit();
		return false;
	} else {
		if (!validatePassword(passwordVal)) {
			inputPassword.classList.add("error");
			showPasswordErrorModals();
			animateErrorSubmit();
			return false;
		} else {
			inputPassword.classList.remove("error");
			passwordErrorModals.forEach(function (modal) {
				modal.style.display = "none";
			});
		}
	}

	//Сравнения пароля и пароля введённого повторно
	if (passwordVal !== passwordConfirmVal) {
		inputConfirmPassword.classList.add("error");
		animateErrorSubmit();
		return false;
	} else {
		inputConfirmPassword.classList.remove("error");
	}

	accessSubmit();
	return false;
};
