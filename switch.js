var numero = 1;

switch (numero) {
  case 1:
    console.log("soy 1");
    break;
  case 10:
    console.log("soy un 10");
    break;
  case 100:
    console.log("soy un 100");
    break;
  default:
    console.log("no soy nada");
}

// ejercicio de piedra papel o tijera
// opciones piedra = 1 papel = 2 tijera = 3

function resultado(user, pc) {
  switch (user) {
    case 1:
      switch (pc) {
        case 1:
          console.log("Empate");
          break;
        case 2:
          console.log("Gana el CPU");
          break;
        case 3:
          console.log("Ganaste");
          break;
      }
      break;
    case 2:
      switch (pc) {
        case 1:
          console.log("Ganaste");
          break;
        case 2:
          console.log("Empate");
          break;
        case 3:
          console.log("Gana el CPU");
          break;
      }
      break;
    case 3:
      switch (pc) {
        case 1:
          console.log("Gana el CPU");
          break;
        case 2:
          console.log("Ganaste");
          break;
        case 3:
          console.log("Empate");
          break;
      }
      break;
  }
}

resultado (1,2);