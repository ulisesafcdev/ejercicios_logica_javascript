/* 

23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

*/

const parImpar = function (arreglo = undefined) {

    if (arreglo == undefined) return console.warn("Ingresa un arreglo para continuar...");
    if (!(arreglo instanceof Array)) return console.warn("Debes ingresar un arreglo...");
    if (arreglo.length === 0) return console.warn("El arreglo se encuentra vacio...");

    for (let arr of arreglo) {

        if (typeof arr !== "number") return console.log("Debes ingresar solo numeros...");

    }

    return console.log({
        arreglo,
        pares: arreglo.filter(num => num % 2 === 0),
        impares: arreglo.filter(num => num % 2 === 1)
    });

}

parImpar([1,2,3,4,5,6,7,8,9,0])