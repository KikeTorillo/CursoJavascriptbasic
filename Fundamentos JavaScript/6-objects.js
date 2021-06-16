//al crear objetos es como llevamos cosas del mundo real 
//al paradima ed objetos de javascript

var miAuto = {                      //a diferencia de los arreglos se inicializa con llaves
    marca:  "toyota",
    modelo: "corolla",
    annio: 2021,
    detallesDelAuto: function () {  //cuando se crea una funcion dentro de un objeto se conoce como metodo de objeto
        console.log (`modelo: ${this.modelo}, annio: ${this.annio}`); //this es una variable que hace referencia al objeto padre
    }
}

//para poder acceder a un objeto usamos la siguiente sintaxis

miAuto.annio //haciendo referencia a una caracteristica existente en el objeto

//para poder acceder a un metodo de un objeto se hace de la siguiente manera

miAuto.detallesDelAuto(); // se accede al metodo especificando como funcion al final

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

//cuarta forma para destructurar un objeto
function imprimirNombre4 (persona) {
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
    }
    
    imprimirNombre4(Enrique);

//Parametros como referencia o valor

var Enrique = {
    nombre: "Enrique",
    edad: 25
}

//En este caso la edad del objeto original se vera afectado de manera permanente

function cumpleanos (persona){
    persona.edad +=1;
}

//Si solo le pasamos la edad el objeto solo se vera afectado en la funcion

function cumpleanos1 (edad){
    edad +=1
}

//Lo que pdemos hacer es crear otro objeto si no necesitamos que se modifique de manera permanente
function cumpleanos2 (persona) {

    return {
        ...persona,
        edad: persona.edad +1
    }

}

var enriqueviejo = cumpleanos2(Enrique)
