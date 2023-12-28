//questão 1 (qual o retorno dessa função?)

function teste () {
    const numeros = [26,41,32,99,59,83,3,60,19,4]
    let retorno = []
   
    // entendendo o código: todo número par ficaria com o resto zero - if(!(numero % 2)
    // na condicional seguinte seria o número menor a largura do array

    numeros.forEach(numero => { 
        if(!(numero % 2) || numero <= numeros.length) {
            retorno.push(numero)
        }
    })

    return retorno
}

console.log(teste())