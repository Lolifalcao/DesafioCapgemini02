function retornaMediana(arrNumeros) {
    let meio = Math.trunc(arrNumeros.length / 2)
    let arrOrdenado = arrNumeros.sort()
    console.log(arrOrdenado[meio])
}

retornaMediana([9, 2, 1, 4, 6])
