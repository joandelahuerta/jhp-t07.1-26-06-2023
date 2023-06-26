//3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
//array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
//su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
//últimos dos elementos. Obtén el índice del elemento "Funciones".

const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

// Eliminar "DOM" del array
javascript1.shift();

// Añadir "Objetos" en lugar de "DOM"
javascript1.push("Objetos");

// Eliminar "Arrays" del array
javascript1.length - 1;

// Añadir "ArraysDifíciles" en lugar de "Arrays"
javascript1.push("ArraysDifíciles");

// Crear una copia del array con los últimos dos elementos
const javascript2 = javascript1.slice(-2);

// Obtener el índice del elemento "Funciones"
const indice = javascript1.indexOf("Funciones");

console.log(javascript1);
console.log(javascript2);
console.log(indice);