var nombre = function(){
    return "Facundo";
}

var surname = function(){
    return "Marquez";
}

var nombreLista = function(cb1, cb2){
    return cb1() + " " + cb2();
}

var resultado = nombreLista(nombre, surname);
console.log(resultado);

//Segundo ejemplo

var devolverFrase= function(comida){
    return "Hoy quiero comer: " + comida;
}

var hablar = function(comida,cb){
    return cb(comida);
}

var fraseFinal = hablar("Pizza", devolverFrase);
console.log(fraseFinal);