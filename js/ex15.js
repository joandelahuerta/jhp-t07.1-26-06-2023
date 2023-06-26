//15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
//recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
//anterior para sacarlas por consola.

class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
        this.nombre = nombre;
        this.tiempoPreparacion = tiempoPreparacion;
        this.ingredientes = ingredientes;
    }
}

const receta1 = new Receta(
    "Pizza Barbacoa",
    "40 minutos",
    ["300 g de carne picada", "100 g de bacon", "1 pimiento verde", "etc"]
);
const receta2 = new Receta(
    "Ensaladilla rusa",
    "25 minutos",
    ["2 huevos", "perejil", "2-3 patatas (450g)", "etc"]
);
const receta3 = new Receta(
    "Espaguetis Carbonara",
    "40 minutos",
    ["400g de espagueti", "2 huevos", "120g de bacon o panceta", "etc"]
);

const recetas = [receta1, receta2, receta3];

function imprimirReceta(receta) {
    console.log("Nombre: " + receta.nombre);
    console.log("Tiempo de preparación: " + receta.tiempoPreparacion);
    console.log("Ingredientes:");
    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log("+ " + receta.ingredientes[i]);
    }
}
  
  // Función para imprimir todas las recetas
  function imprimirTodasLasRecetas(recetas) {
    for (let i = 0; i < recetas.length; i++) {
      imprimirReceta(recetas[i]);
    }
  }
  
  // Llamamos a la función para imprimir todas las recetas
  imprimirTodasLasRecetas(recetas);