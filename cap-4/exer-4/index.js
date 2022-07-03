


var estrela = ''

function fabricar(){
    var inpNumero = Number(document.getElementById('inpNumero').value)  
    var outEstrelas = document.getElementById('outEstrelas')


    if(inpNumero == '' || isNaN(inpNumero)){
        alert('Preencha o campo')
        return
    }

    for(var i = 1; i <= inpNumero; i++){
       for(var n = 1; n < i; n++){
            estrela += '*'
       }
       estrela += '\n'
        
    }

    

    outEstrelas.textContent = estrela 

}

    var enviar = document.getElementById('btCalc')
    enviar.addEventListener('click', fabricar)