function diferenca(lista) {
    
    let ultimo = lista[lista.length - 1]
    let arrDif = []

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++){
            if (i !== j) {
                if (lista[i] - lista[j] === ultimo ) {
                    arrDif.push([lista[i], lista[j]])
                }

            }
        }
    }

    console.log(arrDif.length)

}

diferenca([1, 5, 3, 4, 2])
