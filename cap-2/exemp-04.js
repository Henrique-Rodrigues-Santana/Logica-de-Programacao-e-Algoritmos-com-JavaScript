function calc (){

    var inKg = document.getElementById('inKg').value

    var inCliente = document.getElementById('inCliente').value
    
    var resultado = (inKg / 1000) * inCliente

    document.getElementById('pagar').textContent = `Valor a pagar R$${resultado.toFixed(2)}`

}

    var calca = document.getElementById('calc')

   calca.addEventListener("click", calc)