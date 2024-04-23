$(document).ready(function() {
    // Your jQuery code goes here

    // Example: Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Example: Toggle navbar collapse on click
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});
