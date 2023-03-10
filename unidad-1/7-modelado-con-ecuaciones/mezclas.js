/* Porblemas de mezclas

    un fabricante de bebidas gaseosas nuncia su refresco de naranja como "con sabor natural".
    pero solo contiene un 5% de jugo de naranja.
    un nuevo reglamento federal establece que para ser llamada natural, una bebida debe contener al menos 10% de jugo de fruta.

    --> cuanto jugo de naranja puro debe gregrar este fabricante a 900 galones de refresco de naranga para apegarse al nuevo relgamento ?

*/

function jugoNatural(jugoInicial, porcentajeInicial, nuevoPorcentaje) {
    const cantidadInicial = porcentajeInicial * jugoInicial
    const cantidadNeta = jugoInicial * nuevoPorcentaje
    const resultado = (cantidadNeta - cantidadInicial) / (1- nuevoPorcentaje);

    console.log(`prueba ${resultado}`);
} 

jugoNatural(900, 0.05, 0.1)