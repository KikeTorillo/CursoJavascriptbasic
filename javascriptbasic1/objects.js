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

