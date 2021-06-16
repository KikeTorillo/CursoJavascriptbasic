// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.

// Tenemos dos tipo de funciones en js, function Declaration y function Expression 

// el nombre reservado de function y parametros que recibira esa function 

function miFuncion() { // function declaration Declarativas  
    return 3; 
}

miFuncion(); // mandamos llamar la funcion

var miFuncion = function(a,b) {  // function Expression (también conocidas como funciones anónimas)
    return a + b;
}

miFuncion(); // mandamos llamar la variable como funcion


/* ============================= */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}


function suma(a,b) {  // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
    var resultado = a + b; 
}

// Return, cómo regresamos un valor con una function. 



function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

function suma(a,b) {
    return a + b; 
}

suma(20, 30); 

//Arrow functions
//son tipos de funciones mas cortas

Enrique = {
    nombre: 'Enrique',
    edad: 25
}

Diego = {
    nombre: 'Diego',
    edad: 17
}

//una buena practica al crear constantes es crearlas con mayusculas y con guiones bajos
const MAYORIA_DE_EDAD =18;

//Funcion que valida el argumento y retornara un true o un false
//function validarMayoriaDeEdad (persona) {

 //   return persona.edad >= MAYORIA_DE_EDAD;

//}

//esto es una arrow function
var validarMAyoriaEdad = (persona) => {

    return persona.edad >= MAYORIA_DE_EDAD;
}

//esta es una forma mas corta de escrbirla cuando solo se pasa un argumento

var validarMayoriaDeEdad2 = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
}

// javascript nos permite que si una funcion lo unico que hara es retornar algo reducirla aun mas
//quitando return y las llaves

var validarMayoriaDeEdad3 = persona =>  persona.edad >= MAYORIA_DE_EDAD;

// algo mas que se puede hacer es desestructurar el parametro

var validarMayoriaDeEdad4 = ({edad}) =>  edad >= MAYORIA_DE_EDAD;

//funcion de ejemplo para denegar acceso cuando sea mayor de edad

var permitirAcceso = ({edad}) => {
    if (!validarMayoriaDeEdad4({edad})) {
        
        console.log('acceso denegado');

    }
}

//funciones como parametros, es posible pasar una funcion como parametro dentro de otra funcion

