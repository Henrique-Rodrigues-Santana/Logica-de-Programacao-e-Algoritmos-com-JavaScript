var clubes = []

function adicionarClube(){
    var inpClub = document.getElementById('inpClub')

    var clube = inpClub.value 

    if(clube == ''){
        alert('O input Clube não pode está vazio')
        return
    }

    clubes.push(clube)
    listarClubes()


}

    var btAdicionar = document.getElementById('btAdicionar')
    btAdicionar.addEventListener('click', adicionarClube)


function listarClubes(){

    var outLista = document.getElementById('outLista')

    if(clubes.length == 0){
        alert('A lista de clubes está vazia')
        return
    }

    var lista = ''

    for(var i = 0;i < clubes.length;i++){
        lista += `${i+1} - ${clubes[i]} \n`
    }

    outLista.textContent = lista

    
}

    var listar = document.getElementById('btListar')
    listar.addEventListener('click', listarClubes)


function tabelaDeJogos(){
    
    if(clubes.length == 0){
        alert('A lista de Clubes está vazia')
        return
    }

    var clone = clubes.slice()
    var lista = ''

    var validar = clone.length % 2

    if(validar == 0){
    
    for(var i = 0;i < clone.length;i++){
        var time1 = clone[0]
        var time2 = clone[clone.length - 1]
        lista += time1 + ' x ' +time2 + '\n'
        clone.pop()
        clone.shift()
        
    }
}else{
    alert('falta um time')
    return
}

    outLista.textContent = lista + clone.join(' x ') + '\n'
    
     
    
}

    var partidas = document.getElementById('btTabelar')
    partidas.addEventListener('click', tabelaDeJogos)