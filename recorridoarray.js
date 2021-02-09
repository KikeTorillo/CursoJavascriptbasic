let articulos = [
    { nombre: "bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

//metodos para recorrer un array

//filter valida si algo es verdad o falso y lo agrega en un nuevo array

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//map me ayuda a mapear ciertos articulos creando un nueo array

let nombreArticulos = articulos.map (function(artiulo){
    return articulo.nombre;
})