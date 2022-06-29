function CalcRaiz () {

    var inpNumero = document.getElementById('inpNumero')
    var outResposta = document.getElementById('outResposta')


    var numero = Number(inpNumero.value)

    if(numero == "" || isNaN(numero)){
        alert("Digita essa merda direito poha, bota numero ai")
        return
    }

    var raiz = Math.sqrt(numero)

    if(raiz == Math.floor(raiz)){
        outResposta.textContent = `A raiz exata é ${raiz}`
    }else{
        outResposta.textContent = `A raiz não é exata ${raiz.toFixed(2)}`
    }
}

 var enviar = document.getElementById('exibir')
 enviar.addEventListener('click', CalcRaiz)