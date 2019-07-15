$(document).ready(
    function(){
        $('.menu-toggler').on('click', function(){
            $(this).toggleClass('open');
            $('.nav-top').toggleClass('open');
        });
        $('.nav-top .nav-link').on('click', function() {
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open');
        });
    }

);