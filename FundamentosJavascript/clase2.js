var nombre = 'Enrique', apellido = 'Arellanes';

var nombreEnMayusculas = nombre.toUpperCase(); //funcion para cambiar un string a ,ayusculas

var apellidoMinusculas = apellido.toLowerCase(); //funcion para cambiar un string a minusculas

var primeraletraNombre = nombre.charAt(0); //funcion para regresar  la letra de un sting especificado por posicion 

var cantidadletraNombre = nombre.length; // contal el tamaño de un string

var nombreCompleto = nombre + '  ' + apellido; //esta es una forma de concatenar

var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`; //esta es otra forma de concatenar se conoce como interpolacion de texto

var str = nombre.substr(1,3); //es posible acceder solo a algunas letras con esta funcion especificando la posicion inicial a la final

var nombreUsuario = prompt ("cual es tu nombre");

alert (nombreUsuario.substr(-1));