//tipos de datos
// String: "Hola Mundo"
//String: 'Hola Mundo'
//Números: 1000 800 500 10.1 20.5 -2.3
//Boolean:  true false

//Ítems arreglos o ARRAYS: Listas de strings, o números
//Array: ['joe','ryan','martha'] --- [1, 5, 3] --- [true, false, true, false]

//Objetos: Representación abstracta de un objeto
//Object: Se crean con llaves. Agrupan muchos datos de un sólo ítem:
//
//{
//  "username":'ryan',
//  "score":70.4,
//  "hours":14,
//  "proffesional": true,
//  "friends":['carlos', 'martha'],
//
//}


//Objeto escrito en consola
//console.log({"username":'ryan', "score":0.7, "hours":3});

//===============================================================================//
//Declarar variables
/*
var userName = 'John';
let lastName = 'Carter';
console.log(lastName);

*/

//Al declarar Constantes, no se afecta por cambios más adeklante
//Las variables no pueden iniciarcon un número
//Las variables no puenden empezar por caracteres especiales
//Las variables se escriben para mejor práctica en Camel Case

//===============================================================================//
/*
Operadodes

La suma es la concatenación
*/

//var numberOne = 20;
//var numberTwo = 12;

//var result = numberOne * numberTwo;

//console.log(result);

//var name = 'John';
//var lastName = 'Carter';

//var completeName = name + ' ' + lastName;
//console.log(completeName);


//===============================================================================//
/*
Comparadores
< Menor que, > Mayor que, == Igual que, != Diferencia
<= Menor o Igual, >= Mayor o igual
*/

//var numberOne = 100;
//var numberTwo = 500;

//var resultado = numberOne != numberTwo;

//console.log(resultado);

//===============================================================================//
/*
Condicionales

IF / else = Condición, OR =
*/
//var passwordDB = 'pepe123';
//var input = 'pepe123';

//var result = input == passwordDB;
//if (result == true){
//  console.log('Loging correcto');
//} else{
//  console.log('Contraseña incorrecta');
//}

//var score = 60;
//if (score > 30){
//  console.log('Sigue así, mejora jugando aún más');
//} else if (score > 15){
//  console.log('Primeros pasos, vas bien');
//}
//else {
//  console.log('Primero sigue el tutorial antes de seguir jugando');
//}

/*
Condicionales

SWITCH = */

//var cardType = 'Codensa';
//switch (cardType) {
//  case 'Débito':
//    console.log('Esta es una tarjeta de débito');
//    break;
//  case 'Crédito':
//    console.log('Esta es una tarjeta de crédito');
//    break;
//  default:
//    console.log('No tienes una tarjéta válida');
//
//}
//===============================================================================//
/*
Bucles:::

While
*/
//Restando
//var contador = 50;
//while (contador > 0) {
//  console.log(contador);
//  contador = contador - 1;
//}

////Sumando
//var contador = 1;
//while (contador <= 50) {
//  console.log(contador);
//  contador++;
//}

/*
Bucles:::

For
*/

//var names = ['Ryan','Joe','John','María','Carlos','Ester',];
//console.log(names[5]);//Obtener un elemento del arreglo
//console.log(names.length);//Obtener la cantidad elementos del arreglo
//Agregando desde 0
/*
for (var i = 0; i < names.length; i++) {
  console.log('Hola querido(a)' + ' ' + names[i]);

}
*/

//Restando FOR según el largo de la cadena
//var names = ['Ryan','Joe','John','María','Carlos','Ester',];

//for (var i = names.length - 1; i >= 0; i--) {
//  console.log('Hola querido(a)' + ' ' + names[i]);

//}

//===============================================================================//
/*
Funciones
*/
// ------> Se crea la función
// ---> Dentro de los paréntesis van los parámetros de la función
function greeting(name){
  console.log('Hello ' + name);
}
// ------> Se llama la función creada
greeting('Fabrizzio');

function suma(n1, n2) {
  console.log(n1 + n2);
}

suma(5, 6);
suma(100, 156);
suma('Mi perro es de ', 156);
