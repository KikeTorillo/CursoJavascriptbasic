//Parametros como referencia o valor

var Enrique = {
    nombre: "Enrique",
    edad: 25
}

//En este caso la edad del objeto original se vera afectado de manera permanente

function cumpleanos (persona){
    persona.edad +=1;
}

//Si solo le pasamos la edad el objeto solo se vera afectado en la funcion

function cumpleanos1 (edad){
    edad +=1
}

//Lo que pdemos hacer es crear otro objeto si no necesitamos que se modifique de manera permanente
function cumpleanos2 (persona) {

    return {
        ...persona,
        edad: persona.edad +1
    }

}

var enriqueviejo = cumpleanos2(Enrique)

