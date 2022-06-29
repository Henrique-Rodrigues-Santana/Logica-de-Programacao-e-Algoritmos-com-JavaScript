function calcValor(){

    var inpValor = document.getElementById('inpValor').value

    var inpTempo = document.getElementById('inpTempo').value
    

    var pagar = (Math.ceil(inpTempo / 15)) * inpValor


    document.getElementById('outValor').textContent = `Valor a pagar R$:${pagar}`
}

    var enviar = document.getElementById('calc')

    enviar.addEventListener('click', calcValor)