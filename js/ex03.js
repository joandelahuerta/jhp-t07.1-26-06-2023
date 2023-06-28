//3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
//array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
//su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
//últimos dos elementos. Obtén el índice del elemento "Funciones".

const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.shift();
javascript1.push("Objetos");
javascript1.length - 1;
javascript1.push("ArraysDifíciles");

const javascript2 = javascript1.slice(-2);
const indice = javascript1.indexOf("Funciones");

console.log(javascript1);
console.log(javascript2);
console.log(indice);