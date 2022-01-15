/* 

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

*/

const numberRandom = function (min = undefined, max = undefined) {

    if (min == undefined || min == "") {
        console.warn("Introduce un numero minimo para continuar...");
    } else if (max == undefined || max == "") {
        console.warn("Introduce un numero maximo para continuar...");
    } else if (typeof min !== "number" || typeof max !== "number") {
        console.warn("Introduce solo numeros para poder validar...");
    } else {
        let random = Math.round(Math.random() * (max - min) + min);
        console.log(`Numero Aleatorio: ${random}`);
    }

}

numberRandom(500, 600)