/* 

10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

*/

const reverseNumber = function (num = undefined) {

    let numero;

    if (num == undefined || num == "") {

        console.warn("Por favor introduce un numero para continuar...");

    } else if (typeof num == "number" || typeof num == "string") {

        numero = String(num);

        let reverseNum = numero.split("").reverse().join("");

        if (numero == reverseNum) {
            console.log(`El numero: ${numero} , se lee igual al reves: ${reverseNum}`);
        } else {
            console.log(`El numero: ${numero} , NO se lee igual al reves: ${reverseNum}`);
        }

    } 

}

reverseNumber("2002")