/* un lote rectangular para construccion mide 8 pies mas de largo de lo que mide de ancho y tiene un area de 2900 pies cuadrados.

    --> encuentre las dimensiones del lote.

*/

function dimensionesLote(area, variable) {
    
    const resultado = variable*(variable + 8) - area

    console.log(resultado);
}

dimensionesLote(2900, null)