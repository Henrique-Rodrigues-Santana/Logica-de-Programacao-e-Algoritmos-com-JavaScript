function calcMedia (){

    var nome = document.getElementById('inpNome').value 
    var nota1 = document.getElementById('inpNota1').value
    var nota2 = document.getElementById('inpNota2').value 

    var outMedia = document.getElementById('outMedia')
    var outMensagem = document.getElementById('outMensagem')



    var media = (Number(nota1) + Number(nota2)) / 2

    outMedia.textContent = `Sua média foi ${media.toFixed(2)}`

    if(media >= 7){
        outMensagem.textContent = `Parabéns ${nome}, você foi aprovado(a)`;
        outMensagem.style.color = 'blue';
    }else if(media >= 4 ){

        outMensagem.textContent = `Da pra se reculperar ${nome}, vamos refazer a prova`;
        outMensagem.style.color = 'green';

    }
    else { 
        outMensagem.textContent = `Que pena ${nome}, você se lascous`;
        outMensagem.style.color = 'red';
    }

}

    var enviar = document.getElementById('enviar')
    enviar.addEventListener('click', calcMedia)