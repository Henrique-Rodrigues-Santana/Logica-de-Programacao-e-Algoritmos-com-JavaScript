function gerarCrachar(){
    var nome = document.getElementById('inpNome').value

    var outCrachar = document.getElementById('outCrachar')


    if(nome == '' || nome.indexOf(' ') == -1 ){
        alert('Digite um nome completo')
        return
    }


    var primeiroNome = nome.indexOf(' ')
    var segundoNome = nome.lastIndexOf(' ')

    var crachar = nome.substr(0, primeiroNome) + ' ' + nome.substr(segundoNome)

    outCrachar.textContent = crachar


}

    var enviar = document.getElementById('btGerar')
    enviar.addEventListener('click', gerarCrachar)