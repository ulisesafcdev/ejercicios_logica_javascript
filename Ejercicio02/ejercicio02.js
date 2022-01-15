/* 

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

*/

console.log("///////////////////////////////");

const cutText = function (texto = undefined, inicio = undefined, fin = undefined) {

    if (texto == undefined) {
        console.warn("Digita un texto para seguir con la ejecucion!");
    } else if (typeof texto !== "string") {
        console.warn("Se esperaba una cadena de texto, ingresa un texto para continuar!");
    } else {
        console.log(`Texto ingresado: ${texto}`);
        console.log(`Frase extraida del texto ingresado: ${texto.slice(inicio, fin)}`);
    }

}

cutText("Hola Mundo", 0, 5);