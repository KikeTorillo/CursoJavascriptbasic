var edad = 27;

//edad = edad + 1;

edad +=1;   //esto significa lo mismo de arriba

var peso =70;

//peso = peso -2;

peso -=2;

var sandwiich = 1;

peso += sandwiich;

var jugarFutbol = 3;

peso-= jugarFutbol;

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3)/100;  //ze hace de esta manera la operacion por que javascript no es tan preciso con los decimales y al multiplicar por 100 ya no hay problema

var totalSrt = String(total); //solo lo cambia a string

var  totalSrt2 = total.toFixed(2); //lo cambia a string pero con las decimales que le agreguemos en los parametros

var totalnum = parseFloat(totalSrt2);  //cambiar de string a numero con decimales

var pizza = 8;

var persona = 2;

var cantidadPorcionesPersona = pizza / persona;  //division javascript
