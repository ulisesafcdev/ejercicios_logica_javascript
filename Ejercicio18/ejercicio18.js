/* 

18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

*/

const contadorLetras = function (cadena = undefined) {

    if (cadena == undefined || cadena == "") return console.warn("Escribe un texto para continuar...");
    if (!(typeof cadena == "string")) return console.warn("Escribe solo texto...");

    let vocales = 0, consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {

        if (/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(letra)) {
            vocales++;
        }

        if (/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/.test(letra)) {
            consonantes++;
        }

    }

    return console.log({
        cadena,
        vocales,
        consonantes
    });
    
}

contadorLetras("Ulises Alexis Flores Chavez")