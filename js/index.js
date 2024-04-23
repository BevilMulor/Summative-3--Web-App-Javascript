
document.addEventListener("DOMContentLoaded", function () {
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');
    navItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.add('slide-in');
        }, index * 150);
    });
});






document.addEventListener("DOMContentLoaded", function() {
    var sectionContent = document.querySelectorAll('.section-content');
    sectionContent.forEach(function(item) {
        setTimeout(function() {
            item.classList.add('fade-in');
        }, 300);
    });

    var buttons = document.querySelectorAll('.section-content button');
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            button.classList.add('slide-in');
        });

        button.addEventListener('mouseleave', function() {
            button.classList.remove('slide-in');
        });
    });
});





const cards = document.querySelectorAll('.card-0');

cards.forEach((card) => {
  const img = card.querySelector('.card-img-top');

  card.addEventListener('mouseenter', () => {
    img.classList.add('dimmed');
  });

  card.addEventListener('mouseleave', () => {
    img.classList.remove('dimmed');
  });
});











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













  