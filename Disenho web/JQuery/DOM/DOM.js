
$(document).ready(function(){
// //Parent
    $('#tersa').parent().css({
    background: '#aaaaaa'
    });
// // Parents
    // $('#tersa').parents().fadeout();
    // $('#tersa').parents().hide(5000);
    // $('#father').children().fadeIn(3000);
// //Find
    // $('#father').find('div.box').slideUp();
// // hermanos
    // $('#tersa').siblings().slideUp(4000);
    // $('#tersa').prev().css({
    //     background: '#b80040'
    //     });
    // $('#tersa').next().css({
    //    $('#tersa').prevAll().css({
    // $('#tersa').prevAll().css({
    //     background: '#b80040'
    //     });

    // $('.box').first().css({
    //     background: '#b80040'
    // });
    // $('.box').eq(1).css({
    //     background: '#b80040'
    // });
    // $('.box').filter('.lol').css({
    //     background: '#b80040'
    // });
    // $('.box').not('#seconda').css({
    //     background: '#b80040'
    // })
    // $('#btn').click(function(){
    //     alert('Buena Sozi')
    // })
//     $('#btn').on('click',function(){
//         $('#father').children().toggle(3000)
//     })
//     $('#btn').bind('click',function(){
//         alert('Buena Sozi')
//     })
//     var cajaMaster = $('#seconda');
//     cajaMaster.bind('mouseenter', function(){
//         $('#seconda').siblings().slideUp(3000);
//     })
//     cajaMaster.bind('mouseleave', function(){
//         $('#seconda').siblings().slideDown(1000);
//     })
// //-----------------Desactivando los botones
//     $('#antibtn').bind('click',function(){
//         $('#btn').off('click');
//     });
//     // $('#antibtn').bind('click',function(){
//     //     $('#btn').on('click');
//     // });

//     $('.box').bind('click',function(){
//         $(this).toggleClass('color');
//     });
// 

// -----------Remving DOM items

// $("#father").children().remove();
// $("#father").children('#seconda').remove();
$('#father').children().empty();
});