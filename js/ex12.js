//12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//propiedades para todos los objetos.

const personajes = [
    {
        nombre: "Cloud",
        apellido: "Strife",
        juego: "Final Fantasy VII"
    },
    {
        nombre: "Noctis",
        apellido: "Lucis Caelum",
        juego: "Final Fantasy XV"
    },
    {
        nombre: "Clive",
        apellido: "Rosfield",
        juego: "Final Fantasy XVI"
    }
];

function sacarApellidos(personajes) {
    for (let i = 0; i < personajes.length; i++) {
    console.log(personajes[i].apellido);
    }
}

sacarApellidos(personajes, "propiedad2");