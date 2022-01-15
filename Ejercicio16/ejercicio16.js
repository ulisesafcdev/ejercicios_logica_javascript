/* 

16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

*/

const totalDesc = function (monto = undefined, descuento = undefined) {

    if (monto == undefined || descuento == undefined) return console.warn("Ingresa todos los datos para continuar");
    if (typeof monto !== "number") return console.warn("El monto debe ser solo numeros...");
    if (typeof descuento !== "number") return console.warn("El valor del descuento debe ser solo numeros...");

    desc = descuento / 100;

    subtotal = monto;
    valor_descuento = monto * desc;
    total = subtotal - valor_descuento;

    console.log(`Subtotal de compra: $${subtotal}\nValor descuento: $${valor_descuento}\nPorcentaje descuento: ${descuento}%\nTOTAL: $${total}`);


}

totalDesc(120, 50)