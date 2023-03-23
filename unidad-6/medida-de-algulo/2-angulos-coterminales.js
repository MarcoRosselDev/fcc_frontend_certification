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

function coterminalRadian(radian, multiplo) {
    respuesta = radian + 2*Math.PI*multiplo;
    console.log(`${respuesta} radianes`);
}

coterminalRadian(Math.PI/3, 2) // 13.61356816555577 radianes
coterminalRadian(Math.PI/3, 3) // 19.896753472735355 radianes

// ahora intenta realizar los ejercicios 29 y 31