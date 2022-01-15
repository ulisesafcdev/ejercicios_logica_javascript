/* 

24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

*/

const ascDesc = function (arreglo = undefined) {

    if (arreglo == undefined) return console.warn("Ingresa un arreglo para continuar...");
    if (!(arreglo instanceof Array)) return console.warn("Debes ingresar un arreglo para continuar..."); 
    if (arreglo.length === 0) return console.warn("El arreglo se encuentra vacio...");

    for (let arr of arreglo) {
        if (typeof arr !== "number") {
            console.warn("El arreglo debe incluir solo numeros...");
        }
    }

    return console.log({
        arreglo,
        ascendente: arreglo.map(el => el).sort(),
        descendiente: arreglo.map(el => el).sort().reverse()
    });

}

ascDesc([1,5,9,7,7,2,8])