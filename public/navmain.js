$(document).ready(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleclassName('rotate');
    });

    $('.menu-btn').click(function(){
        $('.side-bar').addclassName('active');
        $('.menu-btn').css("visibility", "hidden")
    });


    $('.close-btn').click(function(){
        $('.side-bar').removeclassName('active');
        $('.menu-btn').css("visibility", "visible")
    });
    });