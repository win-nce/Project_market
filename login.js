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

function Add_user(event) {
    event.preventDefault();

    let login = nameInput.value.trim();
    let password = passwordInput.value.trim();
    const regExEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let isValid = true;

    if (!regExEmail.test(login)) {
        nameInput.classList.add("error");
        alert("invalid email");
        isValid = false;
    } else {
        nameInput.classList.remove("error");
    }

    if (!regExPassword.test(password)) {
        passwordInput.classList.add("error");
        alert("the password must consist of at least 6 nums and one letter");
        isValid = false;
    } else {
        passwordInput.classList.remove("error");
    }


    
    if (!isValid) return;

    if (localStorage.getItem(login)) {
        alert("User is already logged in");
        return;
    }

    let user_data = { login, password, number };
    localStorage.setItem(login, JSON.stringify(user_data));
    alert("User was already registrated");
}
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

backButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'registration.html'; 
});
