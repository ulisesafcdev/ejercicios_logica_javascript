/* 

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

*/

const numPrimo = function (num = undefined) {

    if (num == undefined || num == "") {
        console.warn("Por favor introduce un numero para continuar...");
    } else if (typeof num == "string" || typeof num == "number") {
        let numero = parseInt(num);

        cont = 0;

        for (i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                cont = cont + 1;
            }
        }

        if (cont == 2) {
            console.log("Es primo");
        } else {
            console.log("No es primo");
        }
    }

}

numPrimo(43)