var Enrique = {
    nombre: 'Enrique',
    apellido: 'Arellanes',
    edad: 25
}

//primer forma de desglosar un objeto
function imprimirNombre1 (nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombre1(Enrique.nombre);

//segunda forma de desglosar un objeto
function imprimirNombre2 (persona) {
   var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombre2(Enrique);


//tercer forma de desglosar un objeto

function imprimirNombre ({nombre}) {
console.log(nombre);
}

imprimirNombre(Enrique);

//se hace un cambio de prueba

