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