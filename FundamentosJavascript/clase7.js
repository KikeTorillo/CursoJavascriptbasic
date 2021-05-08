var enrique = {
    nombre: "Enrique",
    edad: 25
}

var dario = {
    nombre: "Dario",
    edad: 28
}

var juan = {
    nombre: juan,
    edad: 28
}

function imprimiredadynombre (persona) {
    var {nombre} = persona;
    var {edad} = persona;
    console.log (`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimiredadynombre(enrique);
imprimiredadynombre(dario);