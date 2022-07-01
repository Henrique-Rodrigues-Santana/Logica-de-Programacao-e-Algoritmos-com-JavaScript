var estrelas = '*'
var contador = 0

function Fabricar(){

    var numero = Number(document.getElementById('inpEstrelas').value)
    var resposta = document.getElementById('outEstrelas')

    if(numero == '' || isNaN(numero)){
        alert('Digite um Número de estrelas valido')
        return
    }

    
    for(var i = 0; i < numero; i++){
        if(i % 2 == 1){
            estrelas = estrelas + '*'
        }else{
            estrelas = estrelas + '-'
        }
    }

    resposta.textContent = estrelas
}   
    var enviar = document.getElementById('fabricar')
    enviar.addEventListener('click', Fabricar)