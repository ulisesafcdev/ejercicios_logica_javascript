/* 

21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

*/

const devolverCuadrado = function (arr = undefined) {

    if (arr === undefined) return console.warn("Ingresa un Arreglo para continuar...");
    if (!(arr instanceof Array)) return console.warn("No has ingresado un Arreglo...");
    if (arr.length === 0) return console.warn("El Arreglo esta vacio...");

    for (let num of arr) {
        if (typeof num !== "number") return console.warn("Los valores del arreglo deben ser numeros...");
    }

    // esta es una forma
    for (let n of arr) {
        let alcuadrado = Array.of(Math.pow(n,2));

        for (let c of alcuadrado) {
            console.log(c);
        }
    }

    // otra forma
    console.log("-----------------------");
    const newArr = arr.map(el => el * el);
    console.log(newArr);

}

devolverCuadrado([1,2,4])