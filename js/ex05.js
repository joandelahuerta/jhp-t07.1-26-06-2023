//5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
//sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
//3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function intercalar(array1, array2) {
    const array3 = [];
    const longitud = array1.length;

    for (let i = 0; i < longitud; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    array1.length = 0;
    array2.length = 0;
    return array3;
}

const resultado = intercalar(array1, array2);

console.log("array1:", array1);
console.log("array2:", array2);
console.log("Resultado:", resultado);