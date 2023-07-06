function ordenar(item) {
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{

            if (item === 'taza') {
                resolve("La taza esta lista para el envio !")
            } else {
                reject("no quedan tazas :C")
            }
        }, 2000)
    })
}

const compra = new Promise((resolve, reject) =>{
    console.log("Iniciando la Compra");

    setTimeout(()=>{

        if (ordenar()) {
            resolve('procesando compra')
        } else{
            reject("reject compra")
        }
        return  ordenar('taza')
        .then(msj => console.log(msj))
        .catch(err => console.log(err))
    }, 4000)
});

