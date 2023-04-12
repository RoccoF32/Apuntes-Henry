/*//Clases: las clases de JavaScript proveen una sintaxis mucho mas clara y 
//simple para crear objetos y lidiar con la herencia.
//Hay dos formas de crear una clase:

//Funcion constructora:

function Auto(puertas, color, marca,){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;

    this.informacion = function(){
        console.log("Este es un "+ this.marca+"de color "+ this.color);
    }
}

let miPrimerAuto = new Auto(5, 'Verde','Peugeot');
miPrimerAuto.informacion();



// Expresion de calse

class Auto {
    constructor(puertas, color, marca){
        this.puertas = puertas;
        this.color = color;
        this.marcar = marca;
    }
}

let miSegundoAuto= new Auto(4,'Gris', 'Chevrolet');
console.log(miSegundoAuto);



class Player{
    constructor(nombre, media){
        this.nombre = nombre;
        this.media = media;
    }
}

let argentina = new Player('Messi', 99);
let brasil = new Player('Neymar', 98);

console.log(argentina.nombre);
console.log(brasil.nombre);

*/