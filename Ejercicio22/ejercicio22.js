/* 

22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

*/

const mayorMenor = function (arreglo = undefined) {

    if (arreglo == undefined) return console.warn("Ingresa un arreglo para continuar...");
    if (!(arreglo instanceof Array)) return console.warn("Debes ingresar un arreglo para continuar...");
    if (arreglo.length === 0) return console.warn("El arreglo se encuentra vacio...");

    for (let arr of arreglo) {
        if (typeof arr !== "number") return console.warn("Los valores del arreglo deben ser numeros...");
    }

    return console.log(`Arreglo: ${arreglo}\nNumero Mayor: ${Math.max(...arreglo)}\nNumero Menor: ${Math.min(...arreglo)}`);

}

mayorMenor([1,34,100,-12])