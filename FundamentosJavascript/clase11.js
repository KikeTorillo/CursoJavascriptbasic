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