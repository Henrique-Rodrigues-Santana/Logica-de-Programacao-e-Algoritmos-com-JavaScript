var carros = []

function adicionarCarros(){
    var inpModelo = document.getElementById('inpModelo')
    var inpPreco = document.getElementById('inpPreco')

    var modelo = inpModelo.value 
    var preco = Number(inpPreco.value)


    if(modelo == "" || preco == 0 || isNaN(preco)){
        alert('Adicione um valor válido nos campos')
        return
    }

    carros.push({modelo:modelo, preco:preco})
    

    listarCarros()
    
}

    var cadastrar = document.getElementById('btAdicionar')
    cadastrar.addEventListener('click', adicionarCarros)

function listarCarros(){

        var outListar = document.getElementById('outListar')

        if(carros.length == 0){
            alert('Lista de carros Vazia')
            return
        }
        var lista = ""

        for(var i = 0; i < carros.length; i++){
          lista += `${carros[i].modelo} - R$${carros[i].preco.toFixed(2)} \n`
        }

        outListar.textContent=lista
    }

    var btListar = document.getElementById('btListar')
    btListar.addEventListener('click', listarCarros)


function filtarCarros(){

    var maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))

    if(maximo == 0 || isNaN(maximo)){
        alert('Digite um valor Válido')
        return
    }

    var lista = ''

    for(var i = 0; i < carros.length; i++){
        if(carros[i].preco <= maximo){
            lista += `${carros[i].modelo} - R$${carros[i].preco.toFixed(2)} \n`
        }

    }

    

    if(lista == ""){
        outListar.textContent=`Não temos carros abaixo do valor : ${maximo.toFixed(2)}`    
    }else{
        outListar.textContent=lista
    }

}

    var btFiltrar = document.getElementById('btFiltrar')
    btFiltrar.addEventListener('click', filtarCarros)