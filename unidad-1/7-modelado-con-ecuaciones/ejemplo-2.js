/* INTERES SOBRE UNA INVERSION

maria hereda 100 000 dolares y los invierte en dos certificados de deposito.
uno de los certificados paga 6% y el otro 4.5% de interes simple al agno.

    si el interes total de maria es 5025 dolares al agnio.

---> cuanto dinero se ivierte a cada una de las tasas de interes ?
*/

const interesX = 0.06
const interesY = 0.045
const herencia = 100000
const gananciaTotal = 5025

function invercionesHerencia() {
    
    const totalInvercion = gananciaTotal/(interesX - interesY);
    const gananciaY = interesY * herencia;

    invercionY = gananciaY/totalInvercion;
    console.log(invercionY);

}

invercionesHerencia()