$(document).ready(function(){
    //Efecto menu
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 200 + (index * 500));
    });
    //Efecto header
    if($(window).width() > 800){
        $('header .container-texto').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .container-texto').animate({
            opacity: 1,
            marginTop:'-52px'
        }, 3000);
    }

    //Scroll Elementos Menu

    var acercaDe = $('#generalInfo').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    })
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 90
        }, 500);
    })
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 80
        }, 500);
    })
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion - 100
        }, 500);
    })
});