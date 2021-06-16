 //estructura de datos que tambien se conoce como lista de datos que guarda valores de cualquier tipo

 var frutas = ["Manzana" , "Platano" , "Cereza" , "Fresa"];

 console.log(frutas[0]);  //el resultado seria Manzana 

 //metodos en los arrays que sirven para mutar el contenido del array
 //se pueden hacer con otra variable como en estos ejemplo o 
 //directamente sobre el arreglo como frutas.push("uvas");

 var masFrutas = frutas.push("Uvas"); //el metodo push agregara uvas al final del array

var ultimo = frutas.pop(); // el metodo pop quitara el ultimo elemento del array

var nuevaLongitud = frutas.unshift ("Sandia"); //el metodo unshift agregara Sandia al inicio del arrray

var borrarfruta =  frutas.shift(); // el metodo shift eliminara el primer elemento del array

var posicion = frutas.indexOf("Cereza"); // el metodo indexOf sirve para buscar la posicion de un elemento en un array cuando conocemos el nombre




