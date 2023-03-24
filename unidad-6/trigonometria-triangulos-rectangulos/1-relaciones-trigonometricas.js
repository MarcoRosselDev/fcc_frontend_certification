/* Relaciones Trigonometricas

sen = opuesto/hipotenusa
cos = adyacente/hipotenusa
tan = opuesto/adyacente
csc = hipotenusa/opuesto
sec = hipoetenusa/adyacente
cot = adyacente/opuesto

ejempolo 1          Encuentra ralaciones trigonometricas

Encuentra las sis relaciones trigonometricas del angulo de la figura 3

hipo = 3
adyacente = 5^(1/2)
opuesto = 2

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

realcionesTrigonometricas(3, Math.sqrt(5), 2)

/* 
    seno = 0.7453559924999299
    coseno = 0.6666666666666666
    tangente = 1.118033988749895
    cosecante = 1.3416407864998738
    secante = 1.5
    cotangente = 0.8944271909999159
 */