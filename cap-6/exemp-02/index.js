function fatiarFrutas(){

    var inpFruta = document.getElementById('inpFruta')
    var outDica = document.getElementById('outDica')

    var fruta = inpFruta.value 

    if(fruta == '' ){
        alert('Digite um valor válido')
        return
    }

    var resposta = ''

    var estrela = '*'

    var tamanho = fruta.length

    for( var i = 0; i < tamanho; i++){
        if(fruta.charAt(i) == fruta.charAt(0)){
          
            resposta += fruta.charAt(0)
        }else{
            resposta += '_'
        }
        estrela += '*'
    }

    outDica.textContent = resposta
    inpFruta.value = estrela

}

    var btDica = document.getElementById('btDica')
    btDica.addEventListener('click', fatiarFrutas)