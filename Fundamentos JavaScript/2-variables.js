//Clase1 
// a las variables no se les asigna tipo

// declarar
var edad;
//inicializar la variable declarada
edad = 30;

var nombre = 'Enrique' , apellido = 'arellanes';  //se pueden declarar e inicializar al mismo tiempo 

console.log('Hola ' + nombre + ' ' + apellido );

//javascript en un lenguaje debilmente tipado 
//por lo cual las variables pueden cambiar de tipo
//ejemplo

var edad = 25; //comienza como numero

edad = '25años' //puede volverse un string

//Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar 
//operaciones de recorrido y de mutación.

var elementos = ["Computadora", "celular"];   //esto se conoce como un array


//En JavaScript, un objeto es un entidad independiente con propiedades y tipos. 
//Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. 
//Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. 
//Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

var persona = {
    nombre: "Luis",
    edad: 30
};