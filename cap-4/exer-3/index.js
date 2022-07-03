
 var inpNumero = document.getElementById('inpNumero')

 var resposta1 = document.getElementById('outResposta01')
 var resposta2 = document.getElementById('outResposta02')

function verificarPerfeito(){

    var numero = Number(inpNumero.value)

    var divisor = `Divisores do ${numero} : 1`;

    var soma = 1

    if(numero == '' || isNaN(numero)){
        alert('Digite um valor válido')
        return
    }



   
    
    for(var i = 2; i <= numero / 2 ; i++){
        if(numero % i == 0){
            divisor += `, ${i}`
            soma += i
        }
    }

    divisor += `.(Soma):${soma}`
    resposta1.textContent = divisor

    if(numero == soma){
        resposta2.textContent = `${divisor}. Logo é um numero perfeito`

    }else{
        resposta2.textContent = `${divisor}. Logo não é um numero perfeito`
    }


}

    var enviar = document.getElementById('verificar')
    enviar.addEventListener('click', verificarPerfeito)