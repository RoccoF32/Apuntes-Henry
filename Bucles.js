/*Blucles

*For: bucle de repeticion que cuenta con 3 partes en su sintaxis
1- Variable de iteración (pivote)
2-condicion de cumplimiento : mientras esta condición sea verdadera el cliclo se reinicia hasta que sea falso. Por ejemplo, que mientras una condición sea > a 10 continua, cuando llega a la repe 9 termina el proceso.
3- Que sucede: la acción del bucle. Por ejemplo que con cada vuelta sume 1 a una variable.
*/


var suma = 0;

for (var i=0; i<10; i++){
    suma = suma +1;
    console.log(suma);
}
/*
 //Lo que hace esta variables es verificar el valor de i, luego que la condicion se cumpla, si es verdadero suma 1.
*/




/* While: 
cosnta de un solo elemento entre parentesis, el cual es la condicion que debe cumplirse. Por ejemplo:
*/

var suma=0;

while (suma-10){
    suma= suma +1;
    console.log(suma);
}

/* expresiones adicionales 
Esta expresion lo que hace es comparar las expresiones una por una hasta llegar a una coincidencia o terminar el cilo
cada valor esta acompanado de un case
si ese valor case es identido a la exresion que le atribuimos, termina en un break saliendo del switch
si no encuentra un break sigue con las demas declaraciones.
Ahora bien, tambien podemos incluir un default que en caso de que no se encuentren valores identicos, se ejecute algo por defecto.*/
switch ('ninja') {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");
  
 
  /* que pasa si olvido el case?*/

  var foo = 0;
switch (foo) {
  case -1:
    console.log('1 negativo');
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0)
    // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

/*
Bucle Do/While
*/
