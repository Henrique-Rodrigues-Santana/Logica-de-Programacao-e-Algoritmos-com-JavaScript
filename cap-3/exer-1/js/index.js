function parImpar(){
    var valor = document.getElementById('outNumero').value

    var resultado = document.getElementById('resultado')


    valor = Number(valor)

    if(valor == 0 || isNaN(valor)){
        alert('Valor invalido, digite novamente ')
        return
    }



    if( valor % 2 == 0 || valor / valor == 0){
        resultado.textContent= `Resposta: ${valor} é par`
    }else{
        resultado.textContent= `Resposta: ${valor} é impar`
    }


    
}

    var enviar = document.getElementById('verificar')
    enviar.addEventListener('click', parImpar)