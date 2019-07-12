$(document).ready(
    function(){
        $('.menu-toggler').on('click', function(){
            $(this).toggleClass('open');
            $('.nav-top').toggleClass('open');
        });
    }
);