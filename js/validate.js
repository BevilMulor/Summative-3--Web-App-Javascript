const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset errors
    nameError.innerText = '';
    emailError.innerText = '';
    messageError.innerText = '';

    // Remove previous classes
    name.classList.remove('invalid', 'valid');
    email.classList.remove('invalid', 'valid');
    message.classList.remove('invalid', 'valid');

    // Remove leading and trailing whitespaces
    const trimmedName = name.value.trim();
    const trimmedEmail = email.value.trim();
    const trimmedMessage = message.value.trim();

    // Name validation
    if (trimmedName === '') {
        nameError.innerText = 'Please enter your name.';
        name.classList.add('invalid');
    } else {
        name.classList.add('valid');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedEmail === '') {
        emailError.innerText = 'Please enter your email.';
        email.classList.add('invalid');
    } else if (!emailRegex.test(trimmedEmail)) {
        emailError.innerText = 'Please enter a valid email address.';
        email.classList.add('invalid');
    } else {
        email.classList.add('valid');
    }

    // Message validation
    if (trimmedMessage === '') {
        messageError.innerText = 'Please enter your message.';
        message.classList.add('invalid');
    } else if (trimmedMessage.length <= 10) {
        messageError.innerText = 'Your message must be longer than 10 characters.';
        message.classList.add('invalid');
    } else {
        message.classList.add('valid');
    }

    // If all fields are valid, display success alert and reset form
    if (name.classList.contains('valid') && email.classList.contains('valid') && message.classList.contains('valid')) {
        alert('Your message has been sent successfully!');
        form.reset();
    }
});