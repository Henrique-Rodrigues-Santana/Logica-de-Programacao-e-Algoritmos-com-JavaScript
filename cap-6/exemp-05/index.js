function gerarEmail(){
    var nome = document.getElementById('inpNome').value.toLowerCase()
    var outEmail = document.getElementById('outEmail')


    if(nome == ''|| nome.indexOf(' ') == -1){
        alert('Nome Incompleto, digite uma peste Válida')
        return
    }

    var partes = nome.split(' ')
    var letras = ''
    var tam = partes.length

    for(var i = 0; i < tam; i++){
        letras += partes[i].charAt(0) 
    }

    var emailFinal = letras.charAt(0) + letras.charAt(1)

    outEmail.textContent =emailFinal + '@empresa.com.br'

}

    var gerar = document.getElementById('btGerar')
    gerar.addEventListener('click', gerarEmail)