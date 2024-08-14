function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
} 

function login(){
    window.location.href = "./pages/home/home.html"
}

function register(){
    window.location.href = "./pages/register/register.html"
}

function toggleEmailErrors() {
    const email = form.email().value;
    if (!email) {
        form.emailRequiredError().style.display = "block";
    } else {
        form.emailRequiredError().style.display = "none";
    }
    
    if (validateEmail(email) ) {
        form.emailInvalidError().style.display = "none";
    } else {
        form.emailInvalidError().style.display = "block";
    }
}

function togglePasswordErrors() {
    const password = document.getElementById("password").value;
    if (!password) {
       form.passwordRequiredError().style.display = "block";
    } else {
       form.passwordRequiredError().style.display = "none";
    }
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPassword: () => document.getElementById("recover-password-button"),
    loginButton: () => document.getElementById("login-button"),
}