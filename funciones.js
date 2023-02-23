/* function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5);
*/ 

//Hay tres formas de declarar una funcion

//Primero

function sumaTres(x) {
    return x + 3;
}

//Segundo
var sumaTres= function (x) {
    return x + 3;
}

//Tercero
var sumaTres = (x) => {
    return x+3;
}

/* NOp confundir return con console.log()
console.log: ayuda visual para saber cual es el valor de una variable o el valor que devuelve una linea de codigo.
Ninguna aplicacion o programa 'real' deberia tener un console.log() dentro de su codigo.

return: Fundamental para toda funcion ya que es la instruccion que va a indicar que valor nos debe
devolver.
 

*/
