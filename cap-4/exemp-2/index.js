function Decrescer (){

    var inpNumero = document.getElementById("inpNumero").value
    var inpNumeroDecrescer = document.getElementById("inpNumeroDecrescer").value

    var outResposta = document.getElementById('outResposta')

    inpNumero = Number(inpNumero);
    inpNumeroDecrescer = Number(inpNumeroDecrescer);


    if(inpNumero == "" || isNaN(inpNumero) || inpNumeroDecrescer == "" || isNaN(inpNumeroDecrescer)){
        alert(`Digite um numero valido nos campos`)
        return
    }   

    if(inpNumero < inpNumeroDecrescer){
        alert('Valor de Decrescimo inválido, o numero precisa ser menor do que o campo anterior')
        return
    }

    var resposta = `Entre ${inpNumero} e ${inpNumeroDecrescer}: `

    for(var i = inpNumero; i > 0; i = i - inpNumeroDecrescer){
        resposta = `${resposta} ${i} ,`
    }
    resposta = `${resposta} ${i} .`

    outResposta.textContent = `${resposta}`


}

    var btDecrescer = document.getElementById('btDecrescer')
    btDecrescer.addEventListener('click', Decrescer)