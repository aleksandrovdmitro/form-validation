document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let message = document.getElementById("message");

    [name, email, password, confirmPassword].forEach(input => {
        input.style.border = "none";
    });

    if (name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === "") {

        message.style.color = "yellow";
        message.textContent = "Будь ласка, заповніть всі поля!";
        return;
    }

    if (!email.value.includes("@")) {
        email.style.border = "2px solid red";
        message.style.color = "yellow";
        message.textContent = "Email повинен містити @";
        return;
    }

    if (password.value.length < 6) {
        password.style.border = "2px solid red";
        message.style.color = "yellow";
        message.textContent = "Пароль мінімум 6 символів";
        return;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = "2px solid red";
        message.style.color = "yellow";
        message.textContent = "Паролі не співпадають";
        return;
    }

    message.style.color = "lightgreen";
    message.textContent = "Реєстрація успішна!";
});
