var erro = []

var sorteado = Math.floor(Math.random()*100)+1

const CHANCE = 6

function apostarNumero(){
    var inpValor = document.getElementById('inpValor')
    var numero = Number(inpValor.value)
    
    if(numero <= 0 || numero > 100 || isNaN(numero)){
        alert('Informe um numero válido')
        return
    }

    var outChances = document.getElementById('outChances')
    var outErro = document.getElementById('outErro')

    if(numero == sorteado){
        alert('Parabéns, você acertou')
    }else{
        if(erro.indexOf(numero)>= 0){
            alert('Você já apostou o numero: '+numero+ ', tente outro')
        }else{
            erro.push(numero)
            var numErros = erro.length
            var numChances = CHANCE - numErros
            outErro.textContent = numErros + "(" + erro.join(",") + ")"

            outChances.textContent = numChances

            if(numChances == 0 ){
                alert("Suas chances acabaram")

            }
        }
    }

}

var aposta = document.getElementById('Apostar')
aposta.addEventListener('click', apostarNumero)