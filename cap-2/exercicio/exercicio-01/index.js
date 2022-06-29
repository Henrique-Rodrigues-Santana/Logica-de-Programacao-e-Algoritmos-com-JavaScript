function calcPromocao(){

    var inpMedicamento = document.getElementById('inpMedicamento').ariaValueMax

    var inpPreco = document.getElementById('inpPreco').value 

    var preco2 = inpPreco * 2

    document.getElementById('outProduto').textContent = `Promoção de ${inpMedicamento}`
    document.getElementById('outPromocao').textContent = `Levi dois por apenas R$${Math.floor(preco2)}`
}

    var enviar = document.getElementById('enviar')

    enviar.addEventListener('click', calcPromocao)