//1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
//consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
//array y lo saque por consola.

const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function longitud(i) {
    console.log("Longitud total: " + i.length);
}
function aleatorio(i) {
    const mathLongitud = Math.floor(Math.random() * i.length);
    const elementoRandom = i[mathLongitud];
    console.log("Array aleatorio: " + elementoRandom);
}
longitud(array);
aleatorio(array);