/* 

1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

*/

let nombreCompleto = "Ulises Alexis Flores Chavez";
let longitudNombre = nombreCompleto.length; // almacenamos la longitud en una variable

let caracteres = nombreCompleto.replace(/ /g, "");

console.log(`Total longitud: ${longitudNombre}`)
console.log(`Total de caracteres: ${caracteres.length}`); // total de caracteres sin contar espacios

/* 
    *************************************************************************************************
*/

console.log("---------------------------------------------");

/* 
    *************************************************************************************************
*/

const insertarFrase = function (frase = null) {

    if (frase == null) {

        console.warn("Ingresa una frase para evaluar su longitud y numero de caracteres");

    } else if (typeof frase == "string") {

        let longitud = frase.length;
        let caracteres = frase.replace(/ /g, "");

        console.info(`Longitud de la frase: ${longitud}`);
        console.info(`Total de caracteres: ${caracteres.length}`);

    } else if (typeof frase == "number") {

        console.warn("Se esperaba una cadena de texto\nIngresa una frase para poder evaluar su longitud y su numero de caracteres!");

    }

}

insertarFrase();