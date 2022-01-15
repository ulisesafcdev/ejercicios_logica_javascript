/* 

11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

*/

const factorialNum = function (num = undefined) {

    if (num == undefined || num == "") {
        console.warn("Introduce un numero para continuar");
    } else if (typeof num == "string" || typeof num == "number") {
        let numero = parseInt(num);

        if (numero < 0) {
            console.warn("Introduce solo numeros positivos!");
        } else {
            let result = 1;

            for (i = 1; i <= num; i++) {
                result = result * i;
                
            }

            console.log(result);

        }
    }

}

factorialNum("5");