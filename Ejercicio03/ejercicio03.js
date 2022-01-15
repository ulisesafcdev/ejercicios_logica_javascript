/* 

3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

*/

const convertToArray = function (texto = undefined, separador = undefined) {

    if (texto == undefined && separador == undefined) {
        console.warn("Introduce un texto y un separador para proceder con la ejecucion!");
    } else if (typeof texto !== "string") {
        console.warn("Haz introducido numeros, ingresalos en formato de texto con un separador valido! Un espacio o una coma.");
    } else if (separador == " " || separador == ",") {
        // console.warn("Separador no valido, ingresa un espacio o una coma como separador para continuar!");
        console.log(texto.split(separador));
    } else {
        // console.log(texto.split(separador));
        console.warn("Separador no valido, ingresa un espacio o una coma como separador para continuar!");
    }
}

convertToArray("1,23,12,3123123", ",");