function mostrarNome(){
    var nome = document.getElementById('nome').value
    var tel = document.getElementById('tel').value
    var email = document.getElementById('email').value
    document.getElementById('resposta').textContent = `Olá ${nome}, seu telefone é ${tel}, e seu email é ${email}`
}

    var enviar = document.getElementById('enviar')
    enviar.addEventListener('click', mostrarNome)