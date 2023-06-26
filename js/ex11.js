//11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
//a tres de esas propiedades.

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

const { nombre, ciudad, ocupacion } = persona;

console.log("Nombre:", nombre);
console.log("Ciudad:", ciudad);
console.log("Ocupacion:", ocupacion);