var estudiantes = ["Maria","Sergio","Rosa","kike"];

function saludarEstudiantes(estudiante){
    console.log ("Hola," + estudiante);
}

//for convencional para generar un loop

for (var i = 0; i < estudiantes.length;  i++) {
    saludarEstudiantes(estudiantes[i]);
}

//el parametro que se le pasa al for of  es el singular del array el cual 
//se convertira en el index  sin especificar la variable i

for (var estudiante of estudiantes) {
    saludarEstudiantes (estudiante);
}

//otro ejemplo de for
Enrique = {
    nombre: `enrique`,
    peso: 70 
}

console.log(`Al inicio de año ${Enrique.nombre} pesa ${Enrique.peso}kg`)

//creacion de constante para variar el peso

const  VARIACION_PESO = 0.2;
const DIAS_DEL_ANO = 365;

//reacion de funciones para aumentar y reducir peso

const aumentarPeso = persona => persona.peso += VARIACION_PESO;
const bajarPeso = persona => persona.peso -= VARIACION_PESO;


//loop for para realizar una tarea siempre que una condicion se cumpla

for (i=1; i<=DIAS_DEL_ANO; i++) {

var random = Math.random()

if (random < 0.25) {
    bajarPeso (Enrique)
}
else if (random < 0.5) {
    aumentarPeso(Enrique)
}

}

console.log (`Al final del año ${Enrique.nombre} pesa ${Enrique.peso.toFixed(2)}`);


//while para usar este loop es parecido a entrar en condicion con IF 
//mientras lo que eta dentro del parentesis se cumpla se seguira ejecutando
//el while

var estudiantes = ["Maria","Sergio","Rosa","kike"];

function saludarEstudiantes(estudiante){
    console.log ("Hola," + estudiante);
}

while (estudiantes.length > 0) { //
    var estudiante = estudiantes.shift(); //va a estar sacando el primer valor del arreglo
    saludarEstudiantes(estudiante);
}

//otro ejemplo de while

persona = {
    nombre: 'fernanda',
    peso: 65
}

const META_PESO = persona.peso - 3;
const VARIACION_PESO = 0.3;

function aumentarPeso (persona) {
    persona.peso += VARIACION_PESO
}

const bajarPeso = (persona) => persona.peso -= VARIACION_PESO

const comeMucho = ( ) => Math.random () < 0.3;
const hacerEjercicio = ( ) => Math.random () < 0.4 ;

var dias = 0;

while (persona.peso > META_PESO) {

    if (comeMucho()) {
        aumentarPeso (persona)
    }
    if (hacerEjercicio()) {
        bajarPeso(persona)
    }
    
    dias +=1

}

console.log (`pasaron ${dias} dias para que ${persona.nombre} bajara 3kg`)


//Do while

var contador = 0;

function llueve () {
    return Math.random() < 0.25
}

do {
    contador++
}
while(!llueve())

if (contador ===1) {
    
    console.log(`Fui a ver si llovia ${contador} vez`)

}
else {
    console.log(`Fui a ver si llovia ${contador} veces`)
}


