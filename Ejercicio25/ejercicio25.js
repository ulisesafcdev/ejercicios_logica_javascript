/* 

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

*/

const deleteDuplicados = function (arreglo = undefined) {

    if (arreglo == undefined) return console.warn("Ingresa un arreglo...");
    if (!(arreglo instanceof Array)) return console.warn("Debes ingresar un arreglo...");
    if (arreglo.length === 0) return console.warn("El arreglo esta vacio...");

    return console.log({
        arreglo,
        nuevoArreglo: arreglo.filter((value,index,self) => self.indexOf(value) === index)
    });

}

deleteDuplicados([1,1,5,8,"hola",true,true,5])