//Funciones que retornan valor

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
function validarMayoriaDeEdad (persona) {

    return persona.edad >= MAYORIA_DE_EDAD;

}

//funcion que imprime si na persona es mayor de edad o no 

function imprimirMayoriaDeEdad (person) {

    if  (validarMayoriaDeEdad(person)){

        console.log(`${person.nombre} es mayor de edad`);
        
    }

    else {
        console.log(`${person.nombre} es menor de edad`);
    }

    }
