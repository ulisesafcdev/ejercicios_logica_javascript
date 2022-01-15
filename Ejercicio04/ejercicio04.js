/* 

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

*/

const repeatText = function (texto = undefined, xveces = undefined) {

    if (texto == undefined || xveces == undefined) {

        console.warn(`Debes ingresar un texto y una X cantidad de veces para continuar!`);

    } else if (typeof texto !== "string" || typeof xveces !== "number") {

        console.warn(`Asegurate que el texto ingresado sea una cadena de texto y que X cantidad de veces sea un numero!`);

    } else {

        for (i = 1; i <= xveces; i++) {

            console.log(`${i}: ${texto}`);

        }

    }

}

repeatText("Ulises Flores", 5);