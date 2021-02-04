var miNombre;    //se declara una variable sin inicializar
console.log(miNombre); // se genera console a una variable sin inicializar
miNombre = "Luis"; // se inicializa una variable

//eso va a generar hoisting ya que el navegador inicializara  la variable como 
//undefined debido a que se le genera un console antes de inicializarla y ya despues
//tambien imprimira le valor Luis  debido a que despues se le asigno ese valor 
//teniendo como resultado lo valores undefined y Luis
