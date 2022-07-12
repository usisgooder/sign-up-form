const form = document.getElementById('signup-form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('user_email');
const phone_number = document.getElementById('phone_number');
const password = document.getElementById('user_password');
const confirm_password = document.getElementById('confirm_password');
const fields = [first_name, last_name, email, phone_number, password, confirm_password];

function checkPassword(event) {
    if (password.value !== confirm_password.value) {
        this.setCustomValidity("Passwords do not match!");
        this.reportValidity();
    } else {
        password.setCustomValidity("");
        confirm_password.setCustomValidity("");
    }
}

function submit() {
    fields.forEach(field => {
        field.required = true;
    });
    return !fields.some((field) => {
        return field.value === "";
    });
}

fields.forEach(field => {
    field.addEventListener('focusout', function (event) { this.required = true; });
});
password.addEventListener('input', checkPassword);
confirm_password.addEventListener('input', checkPassword);
form.onsubmit = submit;
