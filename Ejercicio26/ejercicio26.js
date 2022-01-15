/* 

26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

*/

const promedyArray = function (arreglo = undefined) {

    if (arreglo == undefined) return console.warn("Ingresa un arreglo para continuar...");
    if (!(arreglo instanceof Array)) return console.warn("Debes ingresar un arreglo...");
    if (arreglo.length === 0) return console.warn("El arreglo se encuentra vacio...");

    for (let arr of arreglo) {
        if (typeof arr !== "number") return console.warn("El arreglo debe incluir solo numeros...");
    }

    return console.log(
        arreglo.reduce((total, num, index, arreglo) => {
            total += num;
            if (index === arreglo.length -1){
                return `El promedio de ${arreglo.join("+")} es ${total / arreglo.length}`;
            } else {
                return total;
            }
        })
    );

}

promedyArray([8,5,6,8,5])