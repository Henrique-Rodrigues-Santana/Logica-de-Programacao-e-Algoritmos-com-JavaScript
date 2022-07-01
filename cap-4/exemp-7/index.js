function verificarPrimo(){
    var numero = Number(document.getElementById('inpNumero').value)
    var resposta = document.getElementById('outResposta')


    if(numero == '' || isNaN(numero)){
        alert('Favor digitar um numero válido')
        return
    }

    var numDifisores = 0
    var temDivisor = 0
    for(var i = 1; i <= numero; i++){
        if(numero % i == 0){
            numDifisores++
            
        }

        if(numDifisores == 2){
            resposta.textContent =`${numero} é primo`
        }else{
            resposta.textContent =`${numero} não é primo`
        }
    }
}

    var verificar = document.getElementById('verificar')
    verificar.addEventListener('click', verificarPrimo)