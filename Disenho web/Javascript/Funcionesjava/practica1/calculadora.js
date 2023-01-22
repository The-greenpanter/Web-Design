function suma(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('resultado').value = result;
}

// funciones autoinvocadas
//convierte las varialbes globales de nuestra las variables interas de una funcion en variables locales

(function(){
   var mensaje = 'Hola mundo';
}()) 

var nombre = 'Juan Diego Peña Castillo';
var numCharacters = nombre.length;
var segundoNombre = nombre.substring();
//console.log("El nombre Juan Diego tiene"+ numCharacters);
var segundoNombre = nombre.substring(5,10);
var apellido = nombre.substr(10,24);
var mayusculas = 'ESTO ESTA EN MAYUSCULAS';
var newName = nombre.replace('Juan Diego Peña Castillo','The Green Panter');
console.log(newName.toUpperCase());
console.log(mayusculas.toLowerCase());
var posicionInicial = nombre.lastIndexOf('o');
console.log(posicionInicial);
var posicionfinal = nombre.lastIndexOf('i');
console.log(posicionfinal);