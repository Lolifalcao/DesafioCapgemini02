function encript(texto) {
    let textoSemEspaco = texto.replace(/\s/g, "")
    let qtdCaracteres = textoSemEspaco.length
    let qtd = Math.ceil(Math.sqrt(qtdCaracteres))
    let palavras = []
    let cripto = ''
    let x = 0
    let y = qtd

    for (let i = 0; i < qtd; i++) {
        palavras.push(textoSemEspaco.slice(x,y))
        x+= qtd
        y+= qtd
    }

    for (let i = 0; i < qtd; i++) {

        for (let j = 0; j < qtd; j++) {
            if (palavras[j][i]){
                cripto = cripto + palavras[j][i]
            }
        }

        cripto = cripto + ' '
        
    }

    return cripto
}
