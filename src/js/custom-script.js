$(document).ready(function () {
    // jQuery for add/remove class on fixed header on scroll.
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 88) {
        $('.main-header').addClass('scrolled-header');
        } else {
        $('.main-header').removeClass('scrolled-header');
        }
    });

    // jQuery for hide navbar wrapper on click of nav link in small devices.
    $('header #navbarNav .nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('show');
        // $('.navbar-toggler').addClass('collapsed');
    });
});