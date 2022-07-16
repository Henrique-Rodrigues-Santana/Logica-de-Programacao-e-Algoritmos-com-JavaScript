var numeros = []

function adicionarNumeros(){
    var numero = Number(document.getElementById('inpNumero').value)

    if(numero == 0 || isNaN(numero)){
        alert('Digite um valor Válido')
        return
    }
    var consta = 0

    for(var i = 0;i<numeros.length;i++){
        if(numeros[i] == numero){
            consta = 1
            
        }
    }

    if(consta == 0){
        numeros.push(numero)
    }else{
        alert('Número já existente, adicione outro')
        return
    }
    

    listarDados()
    
}

var adicionar = document.getElementById('btAdicionar')
adicionar.addEventListener('click', adicionarNumeros)


function listarDados(){
    if(numeros.length == 0){
        alert('Lista Vazia')
        return
    }

    var acumulador = ''

    for(var i = 0; i < numeros.length; i++){
        acumulador += numeros[i] + ','
    }

    var outNumeros = document.getElementById('outNumeros')
    outNumeros.textContent = acumulador
}

function verificarOrdem(){

    var outResposta = document.getElementById('outResposta')
    
    if(numeros.length == 0){
        alert('Lista Vazia')
        return
    }

    var resposta = 0

    for(var i = 0; i < numeros.length; i++){
        var num1 = Number(numeros[i])
        i++
        var num2 = Number(numeros[i])
        if(num1 > num2){
            resposta = 1
        }  

    }

    if(resposta == 0){
        outResposta.textContent = 'Números em ordem'
    }else{
        outResposta.textContent = 'Números fora de  ordem'
    }
    

}

var ordem = document.getElementById('btVerificarOrdem')
ordem.addEventListener('click', verificarOrdem)