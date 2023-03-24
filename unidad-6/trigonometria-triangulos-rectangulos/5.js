/* 5        Encuentre los valores exactos de los seis realciones trigonometricas del angulo en el triangulo.

hipotenusa = 41
adyacente = x
opuesto = 40

*/

function realcionesTrigonometricas(hipotenusa, opuesto, adyacente) {
    const seno = opuesto/hipotenusa;
    const coseno = adyacente/hipotenusa;
    const tangente = opuesto/adyacente;
    const cosecante = hipotenusa/opuesto;
    const secante = hipotenusa/adyacente;
    const cotangente = adyacente/opuesto;

    console.log(`
    seno = ${seno}
    coseno = ${coseno}
    tangente = ${tangente}
    cosecante = ${cosecante}
    secante = ${secante}
    cotangente = ${cotangente}
    `);
}