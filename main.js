$(document).ready(
    function(){
        $('.menu-toggler').on('click', function(){
            $(this).toggleClass('open');
            $('.nav-top').toggleClass('open');
        });
        $('.nav-top .nav-link').on('click', function() {
            $('.menu-toggler').removeClass('open');
            $('.nav-top').removeClass('open');
        });
        $('nav a[href*="#"]').on('click', function() {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 2000);
        });
    }

);