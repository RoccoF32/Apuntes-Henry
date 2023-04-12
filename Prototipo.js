//Transformar todos los numero mayores a 3 que tenga el arreglo
/*
Array.prototype.mayoresATres = function(){
    var arregloModificado = [];

    for(var i=0;i < this.length; i++){ //El this se refierer al arreglo dentro de la funcion.

        if(this[i] > 3){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]);
        }

    }
    return(arregloModificado);
}

var numero = [1,2,3,4,5,6];
var nuevoArreglo = numero.mayoresATres(); // parentesis vacio para indicar la funcion
console.log(nuevoArreglo);


Array.prototype.esPositivo = function(){
    var guardadito = [];

    for(var i=0; i < this.length; i++){
        if(this[i] < 0){
            guardadito.push(this[i]);
        }
    }
    return guardadito;
}

var numeritos=[1,-2,1,-3,4,6,8,-2,-5,8,0];

var nuevito = numeritos.esPositivo();
console.log(nuevito);

*/
/*

class LatinoAmerica{
    constructor(){
        this.paises= [];
    }
}

LatinoAmerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
};

var continente = new LatinoAmerica();
continente.agregarPais("Argentina");
console.log(continente.paises);
*/


