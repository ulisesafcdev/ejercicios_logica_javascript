/* 

7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

*/

const reverseWord = function (word = undefined) {

    if (word == undefined || word == "") {
        console.warn(`Introduce una palabra para continuar...`);
    } else if (typeof word == "number") {
        console.warn(`Haz ingresado numeros, ingresa en formato de texto...`);
    } else {
        wordToReverse = word.split("").reverse().join("");

        if (word == wordToReverse) {
            console.log(`La palabra ingresada: ${word}\nSe lee igual al reves: ${wordToReverse}`);
        } else {
            console.log(`La palabra ingresada: ${word}\nNO se lee igual al reves: ${wordToReverse}`);
        }
    }

}

reverseWord("salas");