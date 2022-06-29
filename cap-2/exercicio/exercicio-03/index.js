function calcP (){
    var inpProduto = document.getElementById('inpProduto').value 
    var inpPreco = document.getElementById('inpPreco').value

    var prod_1 = inpPreco / 2
    var prod_2 = (inpPreco * 2 )+ prod_1

    document.getElementById('outP1').textContent = `${inpProduto} - Promoção: Leve 3 por R$${Math.abs(prod_2)}`
    document.getElementById('outP2').textContent = `O 3° produto sai por R$${prod_1}`
}

    var enviar = document.getElementById('enviar')
    enviar.addEventListener('click', calcP)