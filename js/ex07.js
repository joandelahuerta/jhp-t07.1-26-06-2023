//7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
//únicamente los números mayores que 5

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mayores(numeros) {
    const mayor5 = [];

    numeros.forEach((numero) => {
        if (numero > 5) {
            mayor5.push(numero);
        }});
    return { mayor5};
}

const { mayor5} = mayores(numeros);
console.log("Numeros mas grandes de 5:", mayor5);