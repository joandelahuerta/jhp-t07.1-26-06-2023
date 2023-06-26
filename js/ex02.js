//2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
//los liste y los saque por consola.

const array = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

function listarArray() {
    array.forEach((elemento) => {
        console.log(elemento);
    });
}
listarArray();