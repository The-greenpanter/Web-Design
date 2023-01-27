

// alert('linkedsuccesfully');
// //---------------------------------ACCEDIENDO A COMPONENTES DE LA PAGINA DESDE JS Y LA CONSOLA (NODOS)
var cajas = document.getElementsByTagName('div');
var boxes = document.getElementsByClassName('caja');
var primeraBox = document.getElementById('Boxnum1');

//---------------------------------CREANDO NODOS
//1. Creando el elemento
var box = document.createElement('div');
// 2. Creando el nodo de texto
var content = document.createTextNode('Creando versos');
// 3. Anhadir el nodo de texto al elemento 
box.appendChild(content);
// 4. Agregar los atributos a la cajas
box.setAttribute('class','caja naranja');
// 5. - Agregar el elemento al documento
var contenedor = document.getElementById('container');
contenedor.appendChild(box);
//-----------------------
box.id = 'first';
document.getElementById('Boxnum1').className = 'caja naranja';

var padreCajas = boxes[2].parentNode;

padreCajas.insertBefore(box, Boxnum1 );

padreCajas.replaceChild(box, boxes[3]);

padreCajas.removeChild(boxes[1]);
