/* 

15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

*/

const binaryToDecimal = function (valor = undefined) {

    if (valor == undefined) return console.warn("Ingresa un valor para continuar");

    if (typeof valor == "string" || typeof valor == "number") {

        v = parseInt(valor);

        binary = parseInt(valor, 2);
        decimal = binary.toString(2);

        console.log(`${valor} base 2 igual a = ${binary}`);
        console.log(`${binary} base 10 igual a = ${decimal}`);

    } else {
        console.warn("Ingresa solo numeros...");
    }

}

binaryToDecimal(101)