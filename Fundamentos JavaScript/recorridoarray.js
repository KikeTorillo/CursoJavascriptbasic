let articulos = [
  { nombre: "bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

//metodos para recorrer un array

//filter valida si algo es verdad o falso (una condicion) y lo agrega en un nuevo array
//todos los objetos que cumplan esa condicion

let articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

//map me ayuda a mapear ciertos articulos creando un nueo array
//pero sin contenido de objetos solo la informacion pedida

let nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

//find nos va a ayudar a encontrar algo tendro de un array y lo agregara en uno nuevo
//pero solo devolvera la primer coicidendia dentro del arreglo si hay mas objetos que cumplan
//la condicion solo traera el primero que encuentre

let encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

//forEach  este metodo no genera un nuevo array sino que genera un filtrado sobre el array
//ya existente y regresa la informacion

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//some nos regresa una validacion de verdadero o falso para objetos que cumpla la validacion
//solo regresa como respuesta true o false

let articulosBaratos = articulos.some (function(articulo){
    return articulo.costo <= 700;
});


var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  libros: 3
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  libros: 9
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  libros: 7
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  libros: 5
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  libros: 6
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  libros: 8
}

//Este es otro ejemplo de filter

var personas = [sacha,alan,martin,dario,vicky,paula];

const esAlta = ({altura}) => altura > 1.8;

var personasAltas = personas.filter(esAlta);

const esBaja = ({altura}) => altura < 1.8;

var personasBajas = personas.filter(esBaja);


//este es otro ejemplo de Map
//al poner un parentesis despues de la flecha de una arrow function estamos diciendo
//que es un valor que se va a retornar sin poner el return

const pasarAlturaCms = persona => ({
   ...persona,
   altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaCms);

//reduce puende funcionar como acumulador

const reducer = (acum, persona) =>  acum + persona.libros



var cantidadLibros = personas.reduce(reducer, 0)

console.log(cantidadLibros)