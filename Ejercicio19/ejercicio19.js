/* 

19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

*/

const validarNombre = function (nombre = undefined) {

    if (nombre == undefined || nombre == "") return console.warn("Ingresa un nombre valido para continuar...");
    if (!(typeof nombre == "string")) return console.warn("Ingresa solo cadena de texto...");

    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(nombre);

    return (expReg) ? console.log(`Nombre Valido: ${nombre}`) 
        : console.log(`Nombre NO VALIDO: ${nombre}`);

}

validarNombre("Pana Keiki")