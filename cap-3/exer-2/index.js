function medirVer(){

    var inpVeloPerm = document.getElementById('inpVeloPerm').value 
    var inpVeloCond = document.getElementById('inpVeloCond').value

    var resposta = document.getElementById('resposta')

    var velPermitida = Number(inpVeloPerm)
    var velCondutor = Number(inpVeloCond)

    var multa = (velPermitida * 20) / 100
    multa = multa + velPermitida
    
    

    

     

     if(velPermitida >= velCondutor){
        resposta.textContent = 'Sem Multa'
     }else if(velCondutor > velPermitida && velCondutor <= multa){
        resposta.textContent = 'Multa Leve'
        console.log(velPermitida)
        console.log(velCondutor)
        console.log(multa)
     }else if(velCondutor > multa){
        resposta.textContent = 'Multa Alta'
     }
   
    
    
}

    var enviar = document.getElementById('medir')
    enviar.addEventListener('click', medirVer)