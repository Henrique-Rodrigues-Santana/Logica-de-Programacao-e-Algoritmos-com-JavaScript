function ExibirConteudo(){

    var nomeFilme = document.getElementById('inTitulo').value
    var duracao = document.getElementById('inDuracao').value


    document.getElementById('outTitulo-filme').textContent = nomeFilme

    var horas = Math.floor(duracao / 60)

    var min = duracao % 60

    document.getElementById('outHoras-minutos').textContent = `${horas} Horas e ${min} minutos`

    }

    var enviar = document.getElementById('enviar')

    enviar.addEventListener("click", ExibirConteudo)
