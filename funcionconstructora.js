function auto (marca, modelo, annio) { //funcion constructora que sera el template para mis nuevos objetos
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = [] ;  //se declara una variable como array en la cual se guardaran los objetos que se crearan

let datos = prompt ("cual es la cantidad de autos"); 

let numero = Number(datos);

for (i = 0; i < numero; i++) { //se genera un loop con el cual se crearan los objetos nuevos
    let marca = prompt ("cual es la marca del auto");
    let modelo = prompt ("cual es el modelo del auto");
    let annio = prompt ("cual es el año de auto");
    autoNuevo.push (new auto (marca, modelo, annio)); //se le hace un push al arreglo para añadir el objeto nuevo
}

for (i = 0; i < autoNuevo.length; i++) { //se genera un loop para la impresion de cada objeto dentro del arreglo
    console.log (autoNuevo [i]);
}


var auto1  = new auto ("marca","modelo", 2000);



