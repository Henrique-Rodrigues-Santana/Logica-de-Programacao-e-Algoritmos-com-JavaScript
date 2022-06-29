function medirTempo (){
    var valor = document.getElementById('valor').value
    var outTempo = document.getElementById('outTempo')
    var outTroco = document.getElementById('outTroco')

    var dinheiro = Number(valor)
    var tempoDispo
    var troco = 0

    if(dinheiro < 1 || isNaN(dinheiro) ){
        alert('Deixe de ser pão duro, menor valor é R$1,00')
        return
    }

    if(dinheiro == 1 || dinheiro <= 1.74){
        tempoDispo = '30 min'
        troco = dinheiro - 1
        outTempo.textContent = `Tempo :${tempoDispo}`
        console.log(troco)
        if(!troco == 0){
            outTroco.textContent = `Troco R$${troco.toFixed(2)}`
        }

    }else if(dinheiro >= 1.75 && dinheiro <= 2.99){
        tempoDispo = '60 min'
        troco = dinheiro - 1.75
        outTempo.textContent = `Tempo :${tempoDispo}`
        console.log(troco)
        if(!troco ==  0){
            outTroco.textContent = `Troco R$${troco.toFixed(2)}` 
        }
    }else if(dinheiro >= 3){
        tempoDispo = '120 min'
        troco = dinheiro - 3
        outTempo.textContent = `Tempo :${tempoDispo}`
        console.log(troco)
        if(!troco == 0){
            outTroco.textContent = `Troco R$${troco.toFixed(2)}` 
        }
    }


}

    var btDeposito = document.getElementById('btDeposito')
    btDeposito.addEventListener('click', medirTempo)