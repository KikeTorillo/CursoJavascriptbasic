Enrique = {
    nombre: 'Enrique',
    edad: 25
}

function imprimirSiEsMayorDeEdad  (persona){
    if (persona.edad >= 18){
        console.log (`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log (`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(Enrique);