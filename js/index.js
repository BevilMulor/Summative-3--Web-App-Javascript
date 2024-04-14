document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    if (name === "") {
        nameError.innerHTML = "Please enter your name.";
    } else {
        nameError.innerHTML = "";
    }

    if (email === "") {
        emailError.innerHTML = "Please enter your email address.";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
    } else {
        emailError.innerHTML = "";
    }

    if (message === "") {
        messageError.innerHTML = "Please enter your message.";
    } else {
        messageError.innerHTML = "";
    }

    if (name && email && message) {
        alert("Form submitted successfully!");
        this.reset();
    }
});