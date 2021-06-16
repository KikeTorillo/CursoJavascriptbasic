//Funciones que se pueden realizar con los Strings

var nombre = 'Enrique', apellido = 'Arellanes';

var nombreEnMayusculas = nombre.toUpperCase(); //funcion para cambiar un string a mayusculas

var apellidoMinusculas = apellido.toLowerCase(); //funcion para cambiar un string a minusculas

var primeraletraNombre = nombre.charAt(0); //funcion para regresar  la letra de un sting especificado por posicion 

var cantidadletraNombre = nombre.length; // contar el tamaño de un string

var nombreCompleto = nombre + '  ' + apellido; //esta es una forma de concatenar

var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`; //esta es otra forma de concatenar se conoce como interpolacion de texto

var str = nombre.substr(1,3); //es posible acceder solo a algunas letras con esta funcion especificando la posicion inicial a la final

var nombreUsuario = prompt ("cual es tu nombre");

alert (nombreUsuario.substr(-1));

//Funciones que se pueden realizar con los numeros

var edad = 27;

//edad = edad + 1;

edad +=1;   //esto significa lo mismo de arriba

var peso =70;

//peso = peso -2;

peso -=2;  //esto resultara en 68

var sandwich = 1;

peso += sandwich; // pero tendra el valor de 69

var jugarFutbol = 3;

peso-= jugarFutbol;  //peso tendra el valor de 66

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3)/100;  //ze hace de esta manera la operacion por que javascript no es tan preciso con los decimales y al multiplicar por 100 ya no hay problema

var totalSrt = String(total); //solo lo cambia a string

var  totalSrt2 = total.toFixed(2); //lo cambia a string pero con las decimales que le agreguemos en los parametros

var totalnum = parseFloat(totalSrt2);  //cambiar de string a numero con decimales

var pizza = 8;

var persona = 2;

var cantidadPorcionesPersona = pizza / persona;  //division javascript