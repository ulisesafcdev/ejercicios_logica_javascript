/* 

14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/

const convertidorCF = function (valor = undefined, conv = undefined) {

    if (valor == undefined || conv == undefined) return console.warn("Introduce los datos necesarios...");

    if (typeof valor == "string" || typeof valor == "number") {
        v = parseFloat(valor); // convertimos

        if (typeof conv != "string") {
            console.warn("Seleccione una opcion valida: C/F");
        } else if (conv == "F") {

            let F = v * 1.8000 + 32.00;
            console.log(`${v} Cº a Farenheit: ${F} ºF`);

        } else if (conv == "C") {
            let C = (v - 32) / 1.8000;
            console.log(`${v} ºF a Celsius: ${C} Cº`);
        }
    }

}

convertidorCF(12, "C")