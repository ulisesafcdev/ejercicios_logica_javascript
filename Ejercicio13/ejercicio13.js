/* 

13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

*/

const parImpar = function (numero = undefined) {

    // if simplificado
    if (numero == undefined) return console.warn("Introduce un numero para continuar...");

    if (numero < 0) return console.warn("Introduce solo numeros positivos...");

    if (typeof numero == "string" || typeof numero == "number") {
        num = parseInt(numero); // si introducimos en formato texto

        (num % 2 == 0) ? console.log(`El numero ${num} es PAR`) : console.log(`El numero ${num} es IMPAR`);

    }

}

parImpar(11);