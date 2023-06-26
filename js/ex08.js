//8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
//["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
//elemento y lo saque por consola.

const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

function encontrarElementoRepetido(array1, array2) {
const repetidos = [];
array1.forEach((elemento) => {
if (array2.includes(elemento)) {
    repetidos.push(elemento);
}
});

if (repetidos.length > 0) {
    console.log("Elemento repetido:", repetidos);
    } else {
    console.log("No hay ningun elemento repetido.");
    }
}

encontrarElementoRepetido(javascript1, javascript2);
