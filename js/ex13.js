//13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
//nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
//el nombre, el tiempo y una lista de los ingredientes.

const receta = {
    nombre: "Pizza Barbacoa",
    tiempoPreparacion: "40 minutos",
    ingredientes: ["300 g de carne picada", "100 g de bacon", "1 pimiento verde", "etc"]
};

function imprimirReceta(receta) {
    console.log("Nombre: " + receta.nombre);
    console.log("Tiempo de preparación: " + receta.tiempoPreparacion);
    console.log("Ingredientes:");
    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log("+ " + receta.ingredientes[i]);
    }
}

imprimirReceta(receta);