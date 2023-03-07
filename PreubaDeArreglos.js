/*

let listaDeJuegos = ["Fortnite", "Fifa21", "The Witcher"];
listaDeJuegos.push("Plantas vs Zombies");
listaDeJuegos.push("Residetn Evil 7");
listaDeJuegos.push("Pepsi Man");
listaDeJuegos.pop();//se elimina el Pepsi man qu estaba al ultimo de la lista.

listaDeJuegos.unshift("Pay day 2", "Unravel");//Este agrega 1 o mas al principio
listaDeJuegos.shift(); // Elimina el primero
listaDeJuegos.shift();
//console.log(listaDeJuegos);

let incluyePVZ = listaDeJuegos.includes("Plantas vs Zombies"); // revisa si hay un elemento en el array con esas caracteristicas o nombre, devuelve un true o un false.
console.log(incluyePVZ);
*/
/*
var numeros = [1,2,3,4,5];
var cumple = numeros.every(num => {return num >5});

 console.log(cumple); 


let numeritos = [0,0,0,0];
let sonIguales = numeritos.every(num =>{return num == 0 }) // esto lo que hace es ver si todos los numeros o elementos cumplen una funcion. Estudiar la sintaxis para este metodo.

console.log(sonIguales);



let palabra = ('Messy');
let palabraSeparada = palabra.split(''); // las dos comillas separan cada caracter, si pusieramos espacio en blanco, separa cuando encuentre un espacio, si pusieramos la letra a , separa cuando encuentre una letra a.
palabraSeparada.pop();
palabraSeparada.push('i')

let palabraArreglada = palabraSeparada.join('');//Al igual que en el caso de split colocamos las comillas para que junte las palabras en cada letra.
console.log(palabraArreglada);



let precio = [20,45,68];
//precio.forEach(num => console.log(num)); // Por cada numero en la lista, me imprime ese numero correspondiente.

precio.forEach(num => {if (num == 45){ // aqui se le puede aplicar unos parametros con if, para que devuelva los numero que coinciden
    console.log(num);
}})



let espacios=[2,4,6];
let masUno = espacios.map(num => {return num + 1}); // Se puede modificar la lista anterior.
console.log(masUno);


var arr = [1,2,3,4]; // esta es la variable con los elementos
for (var i = 0 ; i < arr.length; i++){ // este es el ciclo for, variable de iteracion, condicion ( i sea menor a la longitud de arr), que aumente de a 1.
    console.log(arr[i]); // para que nos imprima debe estar acompanado de console.log(var[i]);
}

function contieneP(string){
    var palabra = string.split('');

    for(var i=0; i < palabra.length; i++){
        if(palabra[i]==='p'|| palabra[i]==='P'){
            console.log("Si hay letra p");
        }
    }

}

contieneP("Perro");
contieneP("perdon");
contieneP('savitar');
*/
var arr = [];

while(arr.length < 5){ // ciclo while (cuando arr.longitud sea menor a 5 se ejecuta el ciclo) 
    arr.push('BOOM');// arr push lo que hace es agregar un BOOM en todas las vueltas del ciclo.
}

console.log(arr);