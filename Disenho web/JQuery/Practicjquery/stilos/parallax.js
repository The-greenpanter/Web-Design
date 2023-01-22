$(document).ready(function () {
    $(window).scroll(function () {
        var windowWidth = $(window).width();
        if(windowWidth > 800){
            //scrollTop es la distancia al top
            var scroll = $(window).scrollTop();

            $('header .container-texto').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
            $('.acerca-de .fotoportada').css({
                'transform': 'translate(0px, -' + scroll / 8+ '%)'
            });
        }
    })
});