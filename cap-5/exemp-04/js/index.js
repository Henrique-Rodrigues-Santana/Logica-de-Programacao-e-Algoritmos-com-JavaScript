var criancas = []

function cadastrar (){
    var inpNome = document.getElementById('inpNome')
    var inpIdade = document.getElementById('inpIdade')

    var nome = inpNome.value 
    var idade = Number(inpIdade.value)

    if(nome == '' || idade == 0 || isNaN(idade)){
        alert('Valores inválidos, favor preencher corretamente os campos')
        return
    }

    criancas.push({nome:nome, idade:idade})

    inpNome = ''
    inpIdade = ''

    listarCriancas()

}

var cadastro = document.getElementById('btCadastrar')
cadastro.addEventListener('click', cadastrar)


function listarCriancas(){

    if(criancas.length == 0){
        alert('Lista vazia')
        return
    }

    var lista = ''

    for(var i = 0; i < criancas.length; i++){
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos. \n" 
    }

    var mostrar = document.getElementById('outListar')

    mostrar.textContent = lista


}

var listar = document.getElementById('btListar')
listar.addEventListener('click', listarCriancas)

function resumirLista(){
    
    if(criancas.length == 0){
        alert('Lista Vazia')
        return
    }

    var copia = criancas.slice()

    copia.sort(function(a,b){return a.idade - b.idade})

    var resumo = ''


    var aux = copia[0].idade
    var nomes = []

    for(var i = 0; i < copia.length; i++){
        if(copia[i].idade == aux){
            nomes.push(copia[i].nome)
        }else{
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
resumo += (nomes.length / copia.length * 100).toFixed(2) +
"%\n";
resumo += "(" + nomes.join(", ") + ")\n\n";
aux = copia[i].idade; // obtém a nova idade na ordem
nomes = []; // limpa o vetor dos nomes
nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
}
}
// adiciona os nomes da última idade ordenada
resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
resumo += "(" + nomes.join(", ") + ")\n\n";
// altera conteúdo de outLista
document.getElementById("outListar").textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);


