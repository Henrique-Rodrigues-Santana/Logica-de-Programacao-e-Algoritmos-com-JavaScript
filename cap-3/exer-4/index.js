function MedirTriangulo (){

    var ladoA = document.getElementById('ladoA').value
    var ladoB = document.getElementById('ladoB').value
    var ladoC = document.getElementById('ladoC').value

    var resposta = document.getElementById('resposta')

    var lA = Number(ladoA)
    var lB = Number(ladoB)
    var lC = Number(ladoC)

    if(lA == ' ' || lA == 0 || isNaN(lA)){
        alert('Digite valores válidos')
        return 
    }
    if(lB == ' ' || lB == 0 || isNaN(lB)){
        alert('Digite valores válidos')
        return 
    }
    if(lC == ' ' || lC == 0 || isNaN(lC)){
        alert('Digite valores válidos')
        return 
    }

    if((lA + lB) < lC || (lC + lB) < lA ){
        alert('Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois')
        return
    }

    if(lA == lB && lA == lC){
        resposta.textContent = `Tipo: Triângulo: Equilátero`
    }else if(lA == lB && lA != lC || lA == lC && lA != lB  ){
        resposta.textContent = `Tipo: Triângulo: Isósceles`
    }else if(lA != lB && lA != lC && lB != lC){
        resposta.textContent = `Tipo: Triângulo: Escaleno`
    }

}
    var verificar = document.getElementById('verificar')
    verificar.addEventListener('click', MedirTriangulo)