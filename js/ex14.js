//14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
//similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
//saca por consola todas las recetas de tu array.

const receta1 = {
    nombre: "Pizza Barbacoa",
    tiempoPreparacion: "40 minutos",
    ingredientes: ["300 g de carne picada", "100 g de bacon", "1 pimiento verde", "etc"]
};
const receta2 = {
    nombre: "Ensaladilla rusa",
    tiempoPreparacion: "25 minutos",
    ingredientes: ["2 huevos", "perejil", "2-3 patatas (450g)", "etc"]
};
const receta3 = {
    nombre: "Espaguetis Carbonara",
    tiempoPreparacion: "40 minutos",
    ingredientes: ["400g de espagueti", "2 huevos", "120g de bacon o panceta", "etc"]
};

const recetas = [receta1, receta2, receta3];

function imprimirReceta(receta) {
    console.log("Nombre: " + receta.nombre);
    console.log("Tiempo de preparación: " + receta.tiempoPreparacion);
    console.log("Ingredientes:");
    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log("+ " + receta.ingredientes[i]);
    }
}

function imprimirTodasLasRecetas(recetas) {
    for (let i = 0; i < recetas.length; i++) {
        imprimirReceta(recetas[i]);
    }
}

imprimirTodasLasRecetas(recetas);