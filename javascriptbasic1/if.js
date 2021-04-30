  //la condicion en el if siempre tiene que ser verdadero para que entre a la condicion
if (true) {
  console.log("Hola");
}
//else if es usado cuando se quiere aceptar una condicion distinta a la primera en el if
//se pueden tener tantos else if como necesitemos
else if (){
}
//la condicion else se usa cuando el if es falso
else {
  console.log("soy falso");
}

var edad = 18;

if (edad === 18) { //es aconsejable no usar asignaciones simples 
                                //en una expresion condicional, por que la asignacion 
                                //puede ser confundida con igualdad
    console.log("puedes votar");
}
else if (edad > 18) {
    console.log("no es la primera vez que votas");
}
else {
    console.log("no puedes votar");
}

//Operador ternario el cual es como generar un if y else en una sola linea

condition ? true : false;
//ejemplo
var numero = 1;
var resultado = numero === 1 ? "si, soy un uno" : "no, no soy uno"; 
console.log(resultado);

//ejercicio piedra papel o tijera

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

function resultado (user,cpu){
if (user === op1 && cpu === op3) {
    console.log ("Gana el usuario con " + op1);
}
else if (user === op2 && cpu === op1) {
    console.log ("Gana el usuario con " + op2);
}
else if (user === op3 && cpu === op2) {
    console.log ("Gana el usuario con " + op3);
}
else if (user === cpu) {
    console.log ("es un empate");
}
else {
    console.log ("Gana el CPU")
}
}

resultado (op1,op2);

