function destinoViaje(dinero){
    if (dinero >= 100) {
        return ("Vamos a Disney");
    } else if (dinero >= 75 & dinero <= 99){
        return ("Vamos a Colombia");
    } else if (dinero >= 50 & dinero <= 74) {
        return ("Vamos a Brasil");
    } else if (dinero >= 25 & dinero <= 49){
        return ("Vamos a Bariloche");
    } else if (dinero >= 1 & dinero <= 24) {
        return ("Vamos a Tafi");
    } else {return("No podemos ir de vacas");}
}