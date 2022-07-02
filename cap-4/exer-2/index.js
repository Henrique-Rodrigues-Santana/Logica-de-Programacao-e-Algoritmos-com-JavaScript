
var resultado = ''


function CalcChinchila(){
    
   

    var numChinchilas =Number(document.getElementById('inpNumero').value)
    var numAno = Number(document.getElementById('inpAnos').value)

    var resposta = document.getElementById('outMostrar')


    if(numChinchilas == '' ||  isNaN(numChinchilas)  || numAno == '' || isNaN(numAno)){
        alert('Digite um valor válido ')
        return
    }

    if(numChinchilas < 2 ){
        alert('O numero de chinchilas tem que ser maior que dois')
        return
    }
        

    for(var i = 1; i <= numAno; i++){

        resultado = resultado + `${i}° Ano: ${numChinchilas} Chinchilas \n`

        numChinchilas  = numChinchilas * 3

    }

    resposta.textContent = resultado

   

}

    var enviar = document.getElementById('enviar')
    enviar.addEventListener('click', CalcChinchila)
