/* 

20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

*/

const validarEmail = function (email = undefined) {

    if (email == undefined || email == "") return console.warn("Ingresa un email para continuar...");
    if (!(typeof email == "string")) return console.warn("Ingresa en formato texto...");

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) ? console.log(`Email Valido: ${email}`)
        : console.log(`Email NO VALIDO: ${email}`);;
}

validarEmail("uafc99@gmail")