
var valorTotal = 0
var quantidadeProduto = 0
var resposta = ''


function calcularCarrinho(){

    var produto = document.getElementById('inpProduto').value
    var valor = Number(document.getElementById('inpValor').value)
    var quantidade = Number(document.getElementById('inpQuantidade').value)

    var outResposta = document.getElementById('outResposta')
    var outValorTotal = document.getElementById('outValorTotal')

    
    if(valor == '' || quantidade == '' || produto == '' || isNaN(valor) || isNaN(quantidade)){
        alert('Favor preencher os campos corretamente')
        return
    }

    
    valor = valor * quantidade
    valorTotal = valorTotal  + valor
    quantidadeProduto = quantidadeProduto + quantidade


    resposta = `${resposta} ${quantidade}  ${produto} - R$${valor.toFixed(2)} \n`

    outResposta.textContent = `${resposta} -------------------------`

    outValorTotal.textContent = `${quantidadeProduto} - R$${valorTotal.toFixed(2)}`


}

    var calc = document.getElementById('btnAdd')
    calc.addEventListener('click',calcularCarrinho )