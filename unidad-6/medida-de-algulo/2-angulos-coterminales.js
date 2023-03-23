/* dos angulso en posicion estandar son conterminales si sus lado scoinciden.

angulos:
    sumamos cualquier multiplo de 360.

radianes:
    sumamos cualquier multiplo de 2pi.

*/

function coterminalAngulo(angulo, multiplo) {
    respuesta = angulo + 360*multiplo;
    console.log(respuesta);
}

coterminalAngulo(30, 2) // 750
coterminalAngulo(30, 3) // 1110
coterminalAngulo(30, -2) // -690
coterminalAngulo(30, -3) // -1050