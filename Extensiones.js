//Extensiones: nos permite extender el poder de algunas clases y poder usarlas en otras instancias.
//Nos permite Extender mas de una vez y tener entidades relacionadas a nuestro codigo.

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;

    }

    saludo (){
        console.log("Hola, mi nombre es "+ this.nombre+". Tengo "+this.edad+" años.");
    }
}

class Programador extends Persona{
    constructor(nombre, edad, anosDeExperiencia){
        super(nombre,edad);
        this.anosDeExperiencia = anosDeExperiencia;
    }

    codear(){
        console.log("Mi nombre es "+this.nombre+". Codeo desde hace "+this.anosDeExperiencia+" años");
    }
}


var programador = new Programador("Facundo", 27,2);
programador.codear();


var Facundo = new Persona("Facundo", 27);
Facundo.saludo();