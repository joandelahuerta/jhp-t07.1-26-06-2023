//6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
//uno para pares y otro para impares. A continuación, saca por consola ambos arrays
//resultantes concatenados.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function separar(numeros) {
    const pares = [];
    const impares = [];

    numeros.forEach((numero) => {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    });
    return { pares, impares };
}

const { pares, impares } = separar(numeros);
const concatenado = pares.concat(impares);

console.log("Pares:", pares);
console.log("Impares:", impares);
console.log("Concatenado:", concatenado);