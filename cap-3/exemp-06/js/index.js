function DividirValor (){

        var inpSaque = document.getElementById('inpSaque').value


        var notas_100 = document.getElementById('notas_100')
        var notas_50 = document.getElementById('notas_50')
        var notas_10 = document.getElementById('notas_10')


        var valor = Number(inpSaque)

        console.log(valor)
        if(valor == 0 || isNaN(valor)){
            alert('Digite um valor numerico valido')
            return
        }

        if(!valor % 10 != 0){
            alert('Operação restrita apenas a valores multiplos de 10')
            return
        }

        var mult100 = Math.floor(valor / 100)
        var resto = valor % 100

        var mult50 =Math.floor(resto / 50)
        resto = resto % 50

        var mult10 = resto / 10

        if(mult100 > 0){
            notas_100.textContent = `Notas de 100:${mult100}`
        }

        if(mult50 > 0){
            notas_50.textContent = `Notas de 50:${mult50}`
        } 

        if(mult10 > 0){
            notas_10.textContent = `Notas de 10:${mult10}`
        }

}

    var enviar = document.getElementById('enviar')
    enviar.addEventListener('click', DividirValor)