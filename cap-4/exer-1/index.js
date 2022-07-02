

function calcFrutras(){

    var frutaRepetir = ''

    var fruta = document.getElementById('inpFrutas').value
    var quantidade = Number(document.getElementById('inpQuantidade').value)
    
    var resposta = document.getElementById('outResposta')


    if(fruta == '' || quantidade == '' || isNaN(quantidade)){
        alert('Digite valores válidos')
        return
    }
     

    for(var i = 0; i < quantidade; i++){
            
         frutaRepetir += `${fruta}*`
    }

    resposta.textContent = frutaRepetir
    

}

    var calc = document.getElementById('calc')
    calc.addEventListener('click', calcFrutras)