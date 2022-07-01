var numConta = 0
var valTotal = 0


var resposta = ''


function registrarConta(){
    var inDescricao = document.getElementById('inpDescriConta')
    var inValor = document.getElementById('inpValor')

    var outListaContas = document.getElementById('outListaContas')
    var outTotal = document.getElementById('outTotal')

    var descricao = inDescricao.value
    var valor = Number(inValor.value)

    if(descricao == '' || valor == '' || isNaN(valor)){
        alert('Preencha corretamente os campos')
        return
    }

    numConta++
    valTotal = valTotal + valor


    resposta = `${resposta} + ${descricao} - R$:${valor.toFixed(2)} `

    outListaContas.textContent = `${resposta} ---------------------------------------`
    outTotal.textContent=`${numConta} Conta(as) - total R$${valTotal.toFixed(2)}`

    inDescricao = ''
    inValor = ''


}

    var checar = document.getElementById('btnRegistrar')
    checar.addEventListener('click',registrarConta )