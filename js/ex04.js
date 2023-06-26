//4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
//Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

const palabra = "Hola";
const array = Array.from(palabra);
const invert = array.reverse();
const arrayInvert = invert.join("");

console.log(palabra +  " -> " + arrayInvert);