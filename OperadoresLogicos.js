// Este operador se llama and &&
function haceFrio(clima, lluvia)  {
    if (clima === "frio" && lluvia == true){
        return ("Hace frio");
    } else {return("Hace calor");}
}

// Este operador se llama or || 

function esFinDeSemana (dia) {
    if (dia === "Sabado" || dia === "Domingo" ) {
        return ("Es fin de Semana");
    } else {
        return ("Es dia de Semana");
    }
}

//Este operador se llama de negacion !(condicion)

function negar(num) {
    if (!(num > 10)) {
        return "negamos";
    }
}

