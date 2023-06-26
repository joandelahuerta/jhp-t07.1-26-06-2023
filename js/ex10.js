//10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//nombre completo (nombre y apellidos) de la persona a modo de string.

const persona = {
    nombre: "Frank",
    apellidos: "West",
    edad: 52,
    añoNacimiento: 1970,
    direccion: "Willamette Parkview Mall",
    ciudad: "Willamette, Colorado",
    pais: "Estados Unidos",
    ocupacion: "Fotorreportero e investigador"
};

function mostrarNombre(persona) {
    const nombreCompleto = `${persona.nombre} ${persona.apellidos}`;
    console.log("Nombre completo:", nombreCompleto);
}

mostrarNombre(persona);