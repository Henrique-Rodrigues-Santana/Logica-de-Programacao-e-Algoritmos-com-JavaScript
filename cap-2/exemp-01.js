function mostrarOla(){
    // obter o conteudo do input nome 
    var nome = document.getElementById("nome").value;
    // mostrar o conteudo do input no paragrafo com id resposta
    document.getElementById("resposta").textContent = "Olá " + nome;
}
    // cria uma referencia ao botão de id mostrar
    var mostrar = document.getElementById("mostrar");
    // registra ao butão mostrar um ouvinte para o evento click
    // que ao ser clicado irá chamar a função mostrarOla
    mostrar.addEventListener("click", mostrarOla);


