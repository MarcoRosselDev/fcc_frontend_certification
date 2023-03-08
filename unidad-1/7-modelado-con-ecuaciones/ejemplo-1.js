/* una compagnia de renta de autos cobra 30 dolares al dia y 15 centavos por milla para rentar un auto.
    Helen renta un auto durante dos dias  su cuenta llega a 108 dolares. 
    -- cuantas millas recorrio ?

*/

/* constantes de valores de la compagnia */

const dia = 30
const milla = 0.15

/* funcion para calcular solo con una incognita */

const calcularVariablesCompagnia = (dias, millas, totalDolares) {
    if(dias && millas) {
        const total =  (dia*dias) + (milla*millas);
        return console.log(`el total es ${total}`);
    }

    if (dias && totalDolares) {
        const total = (totalDolares - (dia*dias)) / milla
        return console.log(` se recorrieron ${total} millas`);
    }
}