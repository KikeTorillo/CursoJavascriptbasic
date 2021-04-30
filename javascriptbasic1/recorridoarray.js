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

let nombreArticulos = articulos.map(function (artiulo) {
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

//some no regresa una validacion de verdadero o falso para objetos que cumpla la validacion
//solo regresa como respuesta true o false

let articulosBaratos = articulos.some (function(articulo){
    return articulo.costo <= 700;
});
