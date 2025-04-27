const form = document.forms['register'];
const nameInput = form.elements[0];
const passwordInput = form.elements[1];
const eye = document.getElementById('eye');
const submitButton = form.querySelector('.submit-btn');
const backButton = document.querySelector('.back-btn');

let isPasswordVisible = false;

eye.addEventListener("mouseenter", () => {
    passwordInput.type = "text";
});

eye.addEventListener("mouseleave", () => {
    if (!isPasswordVisible) {
        passwordInput.type = "password";
    }
});

eye.addEventListener("click", () => {
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? "text" : "password";
});

function loginUser(event) {
    event.preventDefault();

    let login = nameInput.value.trim();
    let password = passwordInput.value.trim();
    const regExEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let isValid = true;

    if (!regExEmail.test(login)) {
        nameInput.classList.add("error");
        alert("Invalid email");
        isValid = false;
    } else {
        nameInput.classList.remove("error");
    }

    if (!regExPassword.test(password)) {
        passwordInput.classList.add("error");
        alert("The password must consist of at least 6 characters and one number");
        isValid = false;
    } else {
        passwordInput.classList.remove("error");
    }

    if (!isValid) return;

    const storedUser = localStorage.getItem(login);

    if (!storedUser) {
        alert("User not found. Please register first.");
        return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.password !== password) {
        alert("Incorrect password.");
        return;
    }

    alert("Login successful!");
    window.location.href = 'home.html';
}

submitButton.addEventListener('click', loginUser);

backButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'registration.html'; 
});
