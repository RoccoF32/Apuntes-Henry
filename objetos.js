/* var deportes = {
    sinBalon:['Futbol', 'Tenis', 'Rugby'], 
    conBalon:['Box', 'Mma', 'Ciclismo'],
};

var persona = {
    nombre:'Lorenzo', 
    Edad: 3, 
    estudios:{ asisteAlJardin: true}
};

//Para acceder a la info del objeto. solo imprimimos en consola. con nombre del objeto y si queremos una  key especifica ponemos objeto.key.
//console.log(persona.Edad);

//Para agregar un key dentro del objeto ponemos.
//persona.altura = "115 cm";
//console.log(persona);

//Para eliminar una key hacemos lo siguiente.
//delete persona.altura;
//console.log(persona);

//Ahora para modificar un valor dentro de una key hacemos esto.
persona.Edad = 4;
console.log(persona);

var misFunciones = {
    saludar : function () {
        console.log("Hola");
    }
};

misFunciones.saludar();

//En este ejemplo asignamos una fuincion a una key.

//Dot-notation
var perros = {raza:['Cocker', 'Basset Houdn', 'Labrador'], tamaño:['pequeño','mediano','grande']};
console.log(perros);

//Bracket-notation
var gatos=[];
gatos['dibujos'] = ['Garfiel', 'Silvestre', 'Felix', 'Tom'];
console.log(gatos);

hasOwnProperty

var libro={autor:"Zapkowsky",nombre:"The Witcher",};
//Vamos a utilizar una propiedad llamada hasOwnProperty la cual nos va a indicar mediante booleano si existe una propiedad
var existe = libro.hasOwnProperty("loy"); //Siempre entre parentesis

Object.Keys

var todasLasPropiedades = Object.keys(libro);//La propiedad Keys nos permite saber todas las keys dentros de un objeto.
//object(siempre en mayuscula la O) indicamos el objeto global . Key es la propiedad (el nombre del objeto a analizar).
console.log(todasLasPropiedades);



For In
var mundo = {continentes:5, oceanos:5, paises:195,};
for(var prop in mundo){
    console.log("Esta es la propiedad: "+prop);
    console.log("Este es el valor: "+ mundo[prop]);
}


this: es un elemento de contexto

var mascota = {
    raza: "Labrador",
    nombre:"Rocco",
    amistoso: true,
    info: function(){
        console.log(this.nombre+" es un perro "+ this.raza);
    }
}

mascota.info();

*/