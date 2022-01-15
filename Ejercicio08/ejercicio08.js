/* 

8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/

const deletePatern = function (texto = undefined, patron = undefined) {

    if (texto == undefined || texto == undefined) {
        console.warn("Introduce un texto para continuar...");
    } else if (patron == undefined || patron == undefined) {
        console.warn("Introduce un patron para validar...");
    } else {
        console.log(texto.replaceAll(patron, ""));
    }

}

deletePatern("ma mata al pana da rapanta", "a");