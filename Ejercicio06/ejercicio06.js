/* 

Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2

*/

const countWorld = function (texto = undefined, count = undefined) {

    if (texto == undefined || texto == "") {
        console.warn(`Introduce una cadena de texto para continuar!...`);
    } else if (count == undefined || count == "") {
        console.warn(`Introduce la palabra que se repite para continuar!...`);
    } else if (typeof texto !== "string" || typeof count !== "string") {
        console.warn(`Introduce en formato de texto!...`);
    } else {
        console.log(`Texto ingresado: ${texto}`);
        console.log(`Palabra a buscar: ${count}`);

        let i = 0;
        let contador = 0;

        while (i !== -1) {
            i = texto.indexOf(count, i);

            if (i !== -1) {

                i++;
                contador++;

            }
        }

        return console.log(`La palabra ${count} se repite ${contador} veces!`);
    }

}

countWorld("ULISES ALEXIS FLORES CHAVEZ ULISES", "ULISES");