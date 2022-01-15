/* 

Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

*/

const invertText = function (texto = "") {

    if (texto == undefined || texto == "") {
        console.warn("Debes introducir un texto para continuar...");
    } else if (typeof texto !== "string") {
        console.warn("Ingresa en formato de texto...");
    } else {
        console.log(`Texto ingresado: ${texto}`);
        console.log(`Texto invertido: ${texto.split("").reverse().join("")}`);
    }

}

invertText("0123456789");