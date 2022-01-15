/* 

17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

*/

const rangoFecha = function (fecha = undefined) {

    if (fecha == undefined) return console.warn("Ingresa una fecha para continuar...");

    // si es diferente de fecha
    if (!(fecha instanceof Date)) return console.warn("Ingresa una fecha valida...");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
    let aniosTotal = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosTotal) === -1) 
        ? console.log(`Faltan ${Math.abs(aniosTotal)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosTotal) === 1)
            ? console.log(`Han pasado ${aniosTotal} años, desde ${fecha.getFullYear()}`)
            : console.log(`Estamos en la fecha actual ${fecha.getFullYear()}`);
}

rangoFecha(new Date(1999, 3, 3))