function Calcular (){
    var numero = document.getElementById("inpNumero").value;
    
    var resultado = document.getElementById("outCalc")

    numero = Number(numero)

    if(numero == " " || isNaN(numero)){
        alert('Digite um número válido')
        return
    }

    var resposta = " "

    for(var i = 0; i <= 10; i++){
        resposta = `${resposta} ${numero} x ${i} = ${numero * i} \n`
    }
    
    resultado.textContent = resposta 

}

    var calcular = document.getElementById("btCalc");
    calcular.addEventListener("click", Calcular);