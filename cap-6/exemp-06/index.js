function Validador(){
    var senha = document.getElementById('inpSenha').value
    var resposta = document.getElementById('outResposta')

    if(senha == ''){
        alert('Digite uma senha')
    }

    var erro = [] 

    if(senha < 8 || senha > 15){
        erro.push('Possuir entre ou e 15 caracteres')
    }

    if(senha.match(/[0-9]/g) == null){
        erro.push('Precisa Possuir números (no minimo 1)')
    } 

    if(!senha.match(/[a-z]/g)){
        erro.push('Possuir letras minusculas (no minimo 1)')
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erro.push('Possuir letras Maiusculas (no minimo 2)')
    }

    if(!senha.match(/[\W|_]/g)){
        erro.push('Possuir caracteres especiais (no minimo 1)') 
    }

    if(erro.length == 0){
        resposta.textContent = 'Ok, senha correta'
    }else{
        resposta.textContent = 'Erro, a senha precisa de : ' + erro.join(',')
    }
}

    var validar = document.getElementById('btValidar')
    validar.addEventListener('click', Validador)