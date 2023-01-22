// $(document).ready(function(){
//     //$('selector').animate({parametros}, velocidad, Callback)
//     // $('#btn').bind('mouseenter', function(){
//     //     $('#box').animate({
//     //         opacity: '10%'
//     //     },0);
//     // });
//     // $('#btn').on('click', function(){
//     //     $('#box').animate({
//     //         opacity: '+=20%',
            
//     //         // width: '300px',
//     //         opacity: '+=20%',
//     //         width: '+=20px'
//     //     }, 3000, function(){
//     //         // alert('Buena Champion')
//     //     }); 
//     // });
//     $('#btn').on('click', function(){
//         $('#box').animate({
//             // No olvidar camel case
//             marginLeft:'+=20px',
//             // cambiar de color no es una anumacion 
//             backgroundColor: '#000'
//         },2000,function(){
//             $('.box').addClass('animacion')
//         });
//     });  
// });
//---------------------------- Agregando elementos al Documento
// $(document).ready(function(){
//     var container = $('#container');
//     var contador = 1;
//     $('#btn').bind('click', function(){
//        let boxCrea =  $('<div></div>').attr('class','box').text(contador);
//         contador ++;
//         container.append(boxCrea);
//         container.prepend(boxCrea);
//     });
// });

//---------------------------- Eliminando elementos al Documento
$(document).ready(function(){
    let button = $('#btn');
    button.bind('click', function () {
    $('#container').remove();   
    });
});