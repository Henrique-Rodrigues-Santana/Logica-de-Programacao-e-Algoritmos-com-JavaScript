function proVeiculos(){

    var inVeiculo = document.getElementById('inVeiculo').value

    var inPreco = document.getElementById('inPreco').value

    document.getElementById('outVeiculo').textContent = `Veículo escolhido ${inVeiculo}`

    var entrada = inPreco / 2

    document.getElementById('outPrecoEntrada').textContent = `Entrada de R$:${entrada.toFixed(3)}`

    var parce = entrada / 12

    

    document.getElementById('outParcelas').textContent = `+ 12x de R$:${parce.toFixed(3)}`

}

    var enviar = document.getElementById('enviar')

    enviar.addEventListener("click", proVeiculos)